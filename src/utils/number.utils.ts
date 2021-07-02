enum CurrencyStyle {
  Long,
  Short,
  Humanize,
  Time,
  Raw,
}

export const formatNumber = () => {
  return 0;
};

export const formatCurrency = (value: number) => {
  const number = 123456.789;

  console.log(new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(number));
  console.log(
    new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR', maximumSignificantDigits: 2 }).format(number)
  );
  // expected output: "123.456,79 €"

  // the Japanese yen doesn't use a minor unit
  console.log(new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'JPY' }).format(number));
  // expected output: "￥123,457"

  // limit to three significant digits
  console.log(new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(number));
  // expected output: "1,23,000"
  return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(number);
};

export const formatPercentage = () => {
  return 0;
};

enum DateStyle {
  Long,
  Short,
  Humanize,
  Time,
  Raw,
}
export const formatDate = (date: string, style: DateStyle): string => {
  return '0';
};
