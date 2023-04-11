export function copyToClipboard(text: string) {
  navigator.clipboard
    .writeText(text)
    .then(() => console.log(`Copied to clipboard: ${text}`))
    .catch((err) => console.log(`Could not copy to clipboard: ${err}`));
}

export function parseProxy(proxy: Object) {
  return JSON.parse(JSON.stringify(proxy));
}
