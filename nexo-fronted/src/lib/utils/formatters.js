export function formatCurrency(amount) {
  return new Intl.NumberFormat("es-CL", { style: "currency", currency: "CLP", maximumFractionDigits: 0 }).format(
    amount
  );
}

export function formatPercentage(value) {
  return `${value}%`;
}
