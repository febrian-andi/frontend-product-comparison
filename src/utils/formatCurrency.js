function formatCurrency(number) {
  let numStr = number;
  
  if (typeof number !== "string") {
    numStr = number.toString();
 }

  let formatted = numStr.replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  return `Rp${formatted}`;
}

export default formatCurrency;