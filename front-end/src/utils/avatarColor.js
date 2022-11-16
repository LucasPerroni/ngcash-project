export default function stringAvatar(name) {
  const firstName = name.split(" ")[0][0]
  const secondName = name.split(" ")[1]

  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${firstName}${secondName ? secondName[0] : ""}`,
  }
}

function stringToColor(string) {
  let hash = 0
  let i

  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash)
  }

  let color = "#"

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff
    color += `00${value.toString(16)}`.slice(-2)
  }

  return color
}