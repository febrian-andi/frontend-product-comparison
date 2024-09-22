function formatCurrency(number) {
  let numStr = number.toString();

  let formatted = numStr.replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  return `Rp${formatted}`;
}

export default formatCurrency;