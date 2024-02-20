import { useState } from 'react';
import Header from './components/Header.jsx';
import UserInput from './components/UserInput.jsx';
import Results from './components/Results.jsx';

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 6,
  });

  const yearIsSmall = userInput.duration <1;
  const yearIsBig = userInput.duration > 40;
  const initialInvestmentIsSmall = userInput.initialInvestment <1;
  const initialInvestmentIsBig = userInput.initialInvestment >=99999999;
  const annualInvestmentIsSmall = userInput.annualInvestment <1;
  const annualInvestmentIsBig = userInput.annualInvestment >=99999999;
  const expectedReturnmentIsSmall = userInput.expectedReturn <1;
  const expectedReturnmentIsBig = userInput.expectedReturn >20;

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange} />
      {yearIsSmall && (
        <p className="error">Please provide a Duration more than Zero!</p>
      )}
      {yearIsBig && (
        <p className="error">Please provide a Duration less than or equal to Fourty Years!</p>
      )}

      {initialInvestmentIsSmall && (
        <p className="error">Please provide an Initial Investment more than Zero!</p>
      )}
      {initialInvestmentIsBig && (
        <p className="error">Please provide an Initial Investment less than ₹9,99,99,999.00!</p>
      )}

      {annualInvestmentIsSmall && (
        <p className="error">Please provide an Annual Investment more than Zero!</p>
      )}
      {annualInvestmentIsBig && (
        <p className="error">Please provide an Annual Investment less than ₹9,99,99,999.00!</p>
      )}

      {expectedReturnmentIsSmall && (
        <p className="error">Please provide an Expected Return more than 0%!</p>
      )}
      {expectedReturnmentIsBig && (
        <p className="error">Please provide an Expected Return less than or equal to 20%!</p>
      )}

      {!yearIsSmall && !yearIsBig && !initialInvestmentIsSmall && !initialInvestmentIsBig 
      && !annualInvestmentIsSmall && !annualInvestmentIsBig && !expectedReturnmentIsSmall
      && !expectedReturnmentIsBig  && <Results input={userInput} />}
    </>
  );
}

export default App;