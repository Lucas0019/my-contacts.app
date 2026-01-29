export function formatPhone(value: string) {
  const digits = value.replace(/\D/g, '');

  if (digits.length <= 10) {
    // (11) 9999 9999
    return digits
      .replace(/^(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{4})(\d)/, '$1 $2')
      .slice(0, 14);
  }

  // (11) 9 9999 9999
  return digits
    .replace(/^(\d{2})(\d)/, '($1) $2')
    .replace(/(\d)(\d{4})(\d)/, '$1 $2 $3')
    .slice(0, 16);
}
