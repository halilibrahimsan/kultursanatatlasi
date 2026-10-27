import { describe, expect, it } from "vitest";
import { isSafeHref, normalizeUrl, usernameError } from "./validation";
import { SOCIAL_BY_KEY } from "./socials";

describe("usernameError", () => {
  it("accepts valid names", () => {
    for (const name of ["ali", "istanbul_jazz", "kultur.sanat", "a1b2c3"]) expect(usernameError(name)).toBeNull();
  });
  it("rejects bad names", () => {
    for (const name of ["ab", "has space", "ÇAĞLA", ".dot", "dot.", "two..dots", "admin", "a".repeat(31)]) {
      expect(usernameError(name)).not.toBeNull();
    }
  });
});

describe("normalizeUrl", () => {
  it("adds https and keeps full urls", () => {
    expect(normalizeUrl("example.com/tickets")).toBe("https://example.com/tickets");
    expect(normalizeUrl("http://example.com")).toBe("http://example.com/");
  });
  it("turns emails into mailto links", () => {
    expect(normalizeUrl("hello@example.com")).toBe("mailto:hello@example.com");
  });
  it("rejects unsafe or broken links", () => {
    expect(() => normalizeUrl("javascript:alert(1)")).toThrow();
    expect(() => normalizeUrl("data:text/html,hi")).toThrow();
    expect(() => normalizeUrl("localhost")).toThrow();
    expect(() => normalizeUrl("")).toThrow();
  });
});

describe("isSafeHref", () => {
  it("only allows web, mail and phone links", () => {
    expect(isSafeHref("https://x.com")).toBe(true);
    expect(isSafeHref("mailto:a@b.co")).toBe(true);
    expect(isSafeHref("javascript:alert(1)")).toBe(false);
    expect(isSafeHref(null)).toBe(false);
  });
});

describe("socials", () => {
  it("builds profile urls from handles", () => {
    expect(SOCIAL_BY_KEY.instagram.toUrl("@linqi")).toBe("https://instagram.com/linqi");
    expect(SOCIAL_BY_KEY.tiktok.toUrl("linqi")).toBe("https://www.tiktok.com/@linqi");
    expect(SOCIAL_BY_KEY.whatsapp.toUrl("+90 532 000 00 00")).toBe("https://wa.me/905320000000");
    expect(SOCIAL_BY_KEY.x.toUrl("https://x.com/linqi")).toBe("https://x.com/linqi");
  });
  it("can't be turned into a javascript: link", () => {
    expect(SOCIAL_BY_KEY.website.toUrl("javascript:alert(1)")).toMatch(/^https:\/\//);
    expect(SOCIAL_BY_KEY.email.toUrl("javascript:alert(1)")).toMatch(/^mailto:/);
  });
});
