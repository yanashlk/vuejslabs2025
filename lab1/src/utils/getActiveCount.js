export function getActiveCount(list) {
  return list.filter((t) => t.status === 'active').length
}
