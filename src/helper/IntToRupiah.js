function IntToRupiah(value) {
  if (value === NaN) {
    return "0";
  }
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

export default IntToRupiah;
