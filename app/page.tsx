import Link from "next/link";
import {
  Palette, Brush, Landmark, BookOpen, PenLine, Clapperboard, Film,
  Sparkles, Building2, Shapes, MapPin, Map, ChevronRight,
  Users, Gem,
} from "lucide-react";

const kategoriler = [
  {
    href: "/resim-sanati",
    Icon: Palette,
    baslik: "Resim Sanatı",
    aciklama: "Mağara duvarlarından dijital tuvale, insanlığın en eski görsel dili. Teknikler, malzemeler ve tarihin büyük eserleri.",
    renk: "from-amber-600 to-orange-500",
    bg: "bg-amber-950/20 border-amber-800/30",
    accent: "text-amber-400",
  },
  {
    href: "/ressamlar",
    Icon: Brush,
    baslik: "Ressamlar",
    aciklama: "Da Vinci'den Warhol'a, tarihte iz bırakan on büyük ressam: biyografileri, eserleri ve miras.",
    renk: "from-yellow-600 to-amber-500",
    bg: "bg-yellow-950/20 border-yellow-800/30",
    accent: "text-yellow-400",
  },
  {
    href: "/sanat-akimlari",
    Icon: Landmark,
    baslik: "Sanat Akımları",
    aciklama: "Rönesans'tan Minimalizme, sanatın her büyük dönüşüm noktası: akımın doğuşu, özellikleri ve mirası.",
    renk: "from-blue-600 to-indigo-500",
    bg: "bg-blue-950/20 border-blue-800/30",
    accent: "text-blue-400",
  },
  {
    href: "/edebiyat",
    Icon: BookOpen,
    baslik: "Edebiyat",
    aciklama: "Dünyanın dört bir yanından on büyük yazar, Nobel ödüllüler ve edebiyatın temel eserleri.",
    renk: "from-emerald-600 to-teal-500",
    bg: "bg-emerald-950/20 border-emerald-800/30",
    accent: "text-emerald-400",
  },
  {
    href: "/edebiyat-akimlari",
    Icon: PenLine,
    baslik: "Edebiyat Akımları",
    aciklama: "Romantizm'den Sihirli Realizm'e, edebiyatın her büyük düşünce hareketi. Dönem, özellikler, önemli eserler.",
    renk: "from-rose-600 to-pink-500",
    bg: "bg-rose-950/20 border-rose-800/30",
    accent: "text-rose-400",
  },
  {
    href: "/sinema",
    Icon: Clapperboard,
    baslik: "Sinema",
    aciklama: "Film noir'dan Yeni Dalga'ya, sinema türleri ve akımları. Yönetmenler, akımlar ve önemli filmler.",
    renk: "from-violet-600 to-purple-500",
    bg: "bg-violet-950/20 border-violet-800/30",
    accent: "text-violet-400",
  },
  {
    href: "/sinema-tarihi",
    Icon: Film,
    baslik: "Sinema Tarihi",
    aciklama: "Lumière Kardeşler'den dijital çağa, sinemanın 130 yıllık yolculuğu. Her dönemin kilit isimleri ve filmleri.",
    renk: "from-slate-500 to-gray-500",
    bg: "bg-slate-950/20 border-slate-700/30",
    accent: "text-slate-400",
  },
  {
    href: "/geleneksel-sanatlar",
    Icon: Gem,
    baslik: "Geleneksel Sanatlar",
    aciklama: "Hat, Tezhip, Minyatür, Ebru ve Çini: Türk-İslam sanat geleneğinin şaheserleri.",
    renk: "from-teal-600 to-cyan-500",
    bg: "bg-teal-950/20 border-teal-800/30",
    accent: "text-teal-400",
  },
  {
    href: "/mimari-tasarim",
    Icon: Building2,
    baslik: "Mimari & Tasarım",
    aciklama: "Le Corbusier'den Mimar Sinan'a, insanlığın yarattığı en büyük yapıtlar ve mimarinin tarihi.",
    renk: "from-stone-500 to-zinc-500",
    bg: "bg-stone-950/20 border-stone-700/30",
    accent: "text-stone-300",
  },
  {
    href: "/heykel",
    Icon: Shapes,
    baslik: "Heykel",
    aciklama: "Michelangelo'dan Rodin'e, üç boyutlu sanatın büyük ustaları ve tarihin kalıcı eserleri.",
    renk: "from-orange-600 to-red-500",
    bg: "bg-orange-950/20 border-orange-800/30",
    accent: "text-orange-400",
  },
  {
    href: "/populer-kultur",
    Icon: Sparkles,
    baslik: "Popüler Kültür",
    aciklama: "Rock'n'roll'dan anime'ye, internet kültüründen hip-hop'a; modern zamanların kültürel dönüm noktaları.",
    renk: "from-fuchsia-600 to-pink-500",
    bg: "bg-fuchsia-950/20 border-fuchsia-800/30",
    accent: "text-fuchsia-400",
  },
  {
    href: "/kent-kultur",
    Icon: MapPin,
    baslik: "Kent & Kültür",
    aciklama: "Sinemada İstanbul, edebiyatta Paris, sanatta New York — şehirlerin sanatsal kimlikleri.",
    renk: "from-cyan-600 to-blue-500",
    bg: "bg-cyan-950/20 border-cyan-800/30",
    accent: "text-cyan-400",
  },
];

const onecikaranlar = [
  { baslik: "Leonardo da Vinci", aciklama: "Tarihinin en çok yönlü dehası", Icon: Brush, href: "/ressamlar/leonardo-da-vinci" },
  { baslik: "Sürrealizm", aciklama: "Bilinçaltının rüya dili", Icon: Landmark, href: "/sanat-akimlari/surrrealizm" },
  { baslik: "Sihirli Realizm", aciklama: "García Márquez — Edebi akımın zirvesi", Icon: BookOpen, href: "/edebiyat-akimlari/magik-realizm" },
  { baslik: "Mimar Sinan", aciklama: "Osmanlı'nın büyük ustası", Icon: Building2, href: "/mimari-tasarim" },
];

const istatistikler = [
  { rakam: "10+", etiket: "Ünlü Ressam",    Icon: Brush },
  { rakam: "9+",  etiket: "Sanat Akımı",    Icon: Landmark },
  { rakam: "6+",  etiket: "Edebi Akım",     Icon: BookOpen },
  { rakam: "5+",  etiket: "Sinema Dönemi",  Icon: Film },
];

export default function AnaSayfa() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gray-950">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/20 via-gray-950 to-indigo-900/20" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(192,144,64,0.07) 0%, transparent 50%),
                              radial-gradient(circle at 80% 20%, rgba(99,102,241,0.07) 0%, transparent 50%)`,
          }}
        />
        <div className="relative max-w-6xl mx-auto px-4 py-24 md:py-36">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-amber-900/30 border border-amber-700/40 rounded-full px-4 py-1.5 mb-8">
              <Map className="w-3.5 h-3.5 text-amber-400" />
              <span className="text-amber-400 text-sm font-medium">
                Kapsamlı Türkçe Kültür &amp; Sanat Rehberi
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
              Kültür &amp;{" "}
              <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                Sanat
              </span>{" "}
              Atlası
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              Resim sanatından edebiyata, sinemadan popüler kültüre — insanlığın
              yaratıcı mirasını derinlemesine keşfedin.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/ressamlar" className="bg-amber-500 hover:bg-amber-400 text-gray-950 font-semibold px-6 py-3 rounded-xl transition-all duration-150 hover:scale-105 flex items-center gap-2">
                <Brush className="w-4 h-4" />
                Ressamları Keşfet
              </Link>
              <Link href="/sinema-tarihi" className="bg-gray-800 hover:bg-gray-700 text-white font-semibold px-6 py-3 rounded-xl border border-gray-700 transition-all duration-150 hover:scale-105 flex items-center gap-2">
                <Film className="w-4 h-4" />
                Sinema Tarihine Bak
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Öne Çıkanlar */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="flex items-center gap-2 mb-6">
          <Sparkles className="w-5 h-5 text-amber-500" />
          <h2 className="text-xl font-bold text-white tracking-tight">Öne Çıkanlar</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {onecikaranlar.map((item) => {
            const ItemIcon = item.Icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className="group bg-gray-900 border border-gray-800 rounded-xl p-4 hover:border-amber-700/50 hover:bg-gray-800 transition-all duration-150"
              >
                <div className="w-9 h-9 rounded-lg bg-amber-900/20 border border-amber-800/30 flex items-center justify-center mb-3">
                  <ItemIcon className="w-4 h-4 text-amber-400" />
                </div>
                <div className="text-white font-semibold text-sm group-hover:text-amber-400 transition-colors leading-tight mb-1">
                  {item.baslik}
                </div>
                <div className="text-gray-500 text-xs">{item.aciklama}</div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Kategoriler */}
      <section className="max-w-6xl mx-auto px-4 pb-20">
        <div className="flex items-center gap-2 mb-2">
          <Map className="w-5 h-5 text-amber-500" />
          <h2 className="text-xl font-bold text-white tracking-tight">Tüm Kategoriler</h2>
        </div>
        <p className="text-gray-500 text-sm mb-8">
          Her bölümde derinlemesine içerik, önemli isimler ve tarihsel bağlam sizi bekliyor.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {kategoriler.map((kat) => {
            const KatIcon = kat.Icon;
            return (
              <Link
                key={kat.href}
                href={kat.href}
                className={`group relative overflow-hidden bg-gray-900 border ${kat.bg} rounded-2xl p-6 hover:scale-[1.02] transition-all duration-200 hover:shadow-xl hover:shadow-black/50`}
              >
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl ${kat.renk} opacity-10 rounded-bl-3xl`} />
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${kat.renk} flex items-center justify-center mb-4 opacity-90`}>
                  <KatIcon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-white font-bold text-lg mb-2 group-hover:text-amber-400 transition-colors tracking-tight">
                  {kat.baslik}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {kat.aciklama}
                </p>
                <div className="mt-4 flex items-center gap-1 text-amber-500 text-sm font-medium">
                  Keşfet
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* İstatistikler */}
      <section className="bg-gray-900 border-t border-b border-gray-800 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {istatistikler.map((stat) => {
              const StatIcon = stat.Icon;
              return (
                <div key={stat.etiket}>
                  <div className="flex justify-center mb-2">
                    <div className="w-10 h-10 rounded-xl bg-amber-900/20 border border-amber-800/30 flex items-center justify-center">
                      <StatIcon className="w-5 h-5 text-amber-400" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-amber-400 tracking-tight">
                    {stat.rakam}
                  </div>
                  <div className="text-gray-400 text-sm mt-1">{stat.etiket}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
