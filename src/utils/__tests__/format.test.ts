import { describe, it, expect } from "vitest";

import { formatPrice } from "../format";

// \u202f = espace insécable
// \u00a0 = espace insécable avant €

describe("formatPrice", () => {
  it("should format price correctly", () => {
    const price = 123456;
    const formattedPrice = formatPrice(price);
    expect(formattedPrice).toEqual("1\u202f234,56\u00a0€");
  });

  it("should handle zero price", () => {
    const price = 0;
    const formattedPrice = formatPrice(price);
    expect(formattedPrice).toEqual("0,00\u00a0€");
  });

  it("should handle negative price", () => {
    const price = -123456;
    const formattedPrice = formatPrice(price);
    expect(formattedPrice).toEqual("-1\u202f234,56\u00a0€");
  });
});
