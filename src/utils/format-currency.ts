export default function formatCurrency(value: number | string): string {
  let numberValue: number

  if (typeof value === 'string') {
    numberValue = parseFloat(value)
  } else {
    numberValue = value
  }

  return `R$ ${numberValue
    .toFixed(2)
    .replace('.', ',')
    .replace(/(\d)(?=(\d{3})+,)/g, '$1.')}`
}
