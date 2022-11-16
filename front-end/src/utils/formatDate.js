export default function formatDate(createdAt) {
  const date = new Date(createdAt)

  const day = date.getDate().toLocaleString("pt-BR", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  })
  const month = (date.getMonth() + 1).toLocaleString("pt-BR", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  })
  const hours = date.getHours().toLocaleString("pt-BR", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  })
  const minutes = date.getMinutes().toLocaleString("pt-BR", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  })

  const dayMonthYear = `${day}/${month}/${date.getFullYear()}`
  const time = `${hours}:${minutes}`
  const formatedDate = `${dayMonthYear} - ${time}`

  return formatedDate
}
