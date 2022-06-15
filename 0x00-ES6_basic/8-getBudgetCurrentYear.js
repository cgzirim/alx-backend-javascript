function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

export default function getBudgetForCurrentYear(income, gdp, capita) {
  const budget = {};
  const a = `income-${getCurrentYear()}`;
  const b = `gdp-${getCurrentYear()}`;
  const c = `capita-${getCurrentYear()}`;

  budget[a] = income;
  budget[b] = gdp;
  budget[c] = capita;

  return budget;
}
