const range = (start, end) => {
  const result = []

  for (let i = start; i <= end; i++) {
    result.push(i)
  }

  return result
}

console.dir(range(15, 30))