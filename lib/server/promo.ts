import PromoCodeModel from "@/models/PromoCode";

export async function validatePromoCode(code: string): Promise<{
  valid: boolean;
  percentage: number;
  message: string;
}> {
  const promo = await PromoCodeModel.findOne({
    code: code.toUpperCase(),
    isActive: true
  }).lean();

  if (!promo) {
    return { valid: false, percentage: 0, message: "Invalid promo code" };
  }

  if (promo.expiresAt && new Date(promo.expiresAt) < new Date()) {
    return { valid: false, percentage: 0, message: "Promo code expired" };
  }

  return {
    valid: true,
    percentage: promo.discountPercent,
    message: "Promo code applied"
  };
}
