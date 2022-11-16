export default function formatDate(createdAt) {
  const date = new Date(createdAt)

  const day = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
  const time = `${date.getHours()}:${date.getMinutes()}`
  const formatedDate = `${day} - ${time}`

  return formatedDate
}
