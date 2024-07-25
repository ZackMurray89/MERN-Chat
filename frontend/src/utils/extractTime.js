export function extractTime(timestamp) {
  const date = new Date(timestamp)
  const now = new Date()

  const hours = date.getHours()
  const minutes = date.getMinutes()
  const ampm = hours >= 12 ? 'PM' : 'AM'

  const formattedHours = hours % 12 || 12

  const formattedMinutes = minutes.toString().padStart(2, '0')

  const timeString = `${formattedHours}:${formattedMinutes} ${ampm}`

  if (date.toDateString() === now.toDateString()) {
    return timeString
  }

  const yesterday = new Date(now)
  yesterday.setDate(yesterday.getDate() - 1)
  if (date.toDateString() === yesterday.toDateString()) {
    return `Yesterday, ${timeString}`
  }

  const monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]
  const month = monthNames[date.getMonth()]
  const day = date.getDate()
  const year = date.getFullYear()

  return `${month}, ${day}, ${year}, ${timeString}`
}
