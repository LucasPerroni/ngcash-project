export default function formatCash(value) {
  const formatedValue = (value / 100).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
  return formatedValue
}
