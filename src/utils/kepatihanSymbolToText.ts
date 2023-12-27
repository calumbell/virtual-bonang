export default function kepatihanSymbolToText(
  symbol: keyof typeof symbolsToText
) {
  return symbolsToText[symbol];
}

const symbolsToText = {
  '1': 'One',
  '2': 'Two',
  '3': 'Three',
  '4': 'Four',
  '5': 'Five',
  '6': 'Six',
  '7': 'Seven',
  '!': 'High One',
  '@': 'High Two',
  '£': 'High Three',
  '$': 'High Four',
  '%': 'High Five',
  '^': 'High Six',
  '&': 'High Seven',
  'q': 'Low One',
  'w': 'Low Two',
  'e': 'Low Three',
  'r': 'Low Four',
  't': 'Low Five',
  'y': 'Low Six',
  'u': 'Low Seven',
};