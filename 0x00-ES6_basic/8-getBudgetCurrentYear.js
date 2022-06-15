function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

export default function getBudgetForCurrentYear(income, gdp, capita) {
  const a = `income-${getCurrentYear()}`;
  const b = `gdp-${getCurrentYear()}`;
  const c = `capita-${getCurrentYear()}`;

  const budget = {
    [a]: income,
    [b]: gdp,
    [c]: capita,
  };

  return budget;
}
