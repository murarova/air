export function truncate(source, size) {
  return source?.length > size ? source.slice(0, size - 1) + "…" : source;
}

export function convertPriceToUAH(price, rate) {
  if(!price || !rate) {
    return null
  }
  return (Number(price) * Number(rate)).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
}

export function getTotal(price, rate, amount) {
  if(!price || !rate) {
    return null
  }
  return (Number(price) * Number(rate) * amount).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
}

export const pluralize = (count, noun) =>
  `${count} ${noun}${count !== 1 ? 'и' : 'а'}`;
