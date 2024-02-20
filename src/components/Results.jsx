import { calculateInvestmentResults, formatter } from '../util/investment.js';

export default function Results({ input }) {
  const resultsData = calculateInvestmentResults(input);
  const initialInvestment =
    resultsData[0].valueEndOfYear -
    resultsData[0].interest -
    resultsData[0].annualInvestment;

  return (
    <table id="result">
      <thead>
        <tr>
          <th id="year-heading">Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {resultsData.map((yearData) => {
          const totalInterest =
            yearData.valueEndOfYear -
            yearData.annualInvestment * yearData.year -
            initialInvestment;
          const totalAmountInvested = yearData.valueEndOfYear - totalInterest;

          return (
            <tr key={yearData.year}>
              <td id="year-data">{yearData.year}</td>
              <td className="data">{formatter.format(yearData.valueEndOfYear)}</td>
              <td className="data">{formatter.format(yearData.interest)}</td>
              <td className="data">{formatter.format(totalInterest)}</td>
              <td className="data">{formatter.format(totalAmountInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}