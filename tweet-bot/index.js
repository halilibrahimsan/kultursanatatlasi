const { TwitterApi } = require("twitter-api-v2");
const tweets = require("./tweets.json");

function getTodaysTweet() {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const diff = now - start;
  const oneDay = 1000 * 60 * 60 * 24;
  const dayOfYear = Math.floor(diff / oneDay);
  return tweets[dayOfYear % tweets.length];
}

async function postTweet() {
  const client = new TwitterApi({
    appKey: process.env.TWITTER_API_KEY,
    appSecret: process.env.TWITTER_API_SECRET,
    accessToken: process.env.TWITTER_ACCESS_TOKEN,
    accessSecret: process.env.TWITTER_ACCESS_SECRET,
  });

  const tweet = getTodaysTweet();
  console.log("Göndirilen tweet:\n", tweet);

  await client.v2.tweet(tweet);
  console.log("Tweet başarıyla gönderildi.");
}

postTweet().catch((err) => {
  console.error("Tweet gönderilemedi:", err?.data ?? err);
  process.exit(1);
});
