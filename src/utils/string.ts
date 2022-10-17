export const normalizeAnchor = (input: string) => input.toLowerCase().replaceAll(' ', '-')
export const unindent = (input: string) => {
  const [indent] = input.match(/^(?!\n)\s+/g) ?? ['  ']
  let indented = true
  const lines = input.split('\n')

  for (const line of lines)
    if (!line.startsWith(indent) && !/^\s*$/.test(line)) {
      indented = false
      break
    }

  return indented ? lines.map(v => v.slice(indent.length)).join('\n') : input
}
