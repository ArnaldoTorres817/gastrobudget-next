export function debounce(
  callback: (...args: any[]) => void,
  delay = 1500
): (...args: Parameters<typeof callback>) => void {
  let timeout: NodeJS.Timeout

  return (...args) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      callback(...args)
    }, delay)
  }
}
