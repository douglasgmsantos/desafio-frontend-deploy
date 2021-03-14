export const formatValue = (number: number, localeParam: string = 'BR', style: string = "currency") => {

  let locale = "pt-BR";
  let options = {
    style,
    currency: 'BRL',
    minimumFractionDigits: 2
  }

  if (localeParam === "US") {
    options = {
      ...options,
      currency: "USD"
    }
  }

  return new Intl.NumberFormat(locale, options).format(number);
}

