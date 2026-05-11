export const formatPrice = (
  value: number,
  currency: string = "IDR",
  locale: string = "id-ID",
) => {
  return new Intl.NumberFormat(locale, {
    currency: currency,
  }).format(value);
};
