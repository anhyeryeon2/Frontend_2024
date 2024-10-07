import './App.css';
import Summary from './pages/Summary';
import OrderPage from './pages/OrderPage';
import { useState } from 'react';
import CompletePage from './pages/CompletePage';

function App() {
  const [step,setStep] = useState(0);

  return (
    <div style={{padding:'4rem'}}>
      {step ===0 && <OrderPage setStep={setStep} /> }
      {step ===1 && <Summary setStep={setStep}/>}
      {step ===2 && <CompletePage setStep={setStep}/>}

    </div>
  );
}

export default App;
