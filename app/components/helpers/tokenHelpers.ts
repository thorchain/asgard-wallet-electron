
export const shortSymbol = (symbol: string) => {
  console.log('why no symbol?')
  console.log(symbol)
  return symbol?.split("-")[0].substr(0,4)
}