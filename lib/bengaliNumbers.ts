export function toBengaliNumber(num: number | string): string {
  const bnDigits = ['০','১','২','৩','৪','৫','৬','৭','৮','৯'];
  return String(num).replace(/\d/g, (d) => bnDigits[parseInt(d)]);
}