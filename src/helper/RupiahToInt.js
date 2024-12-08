export default function RupiahToInt(value) {
  if (value === NaN || value === "") {
    return 0;
  }
  return parseInt(value.replace(/\./g, ""));
}
