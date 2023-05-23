import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Formuls from './components/formuls/formuls.jsx';

function App() {
  let [counter, set_counter] = useState(0)
  let [status, set_status] = useState("")
  return (
    <div className="App">
      <div>
        {counter}
        <button onClick={() => set_counter(counter + 1)}>+</button>
        <button onClick={() => set_counter(counter - 1)}>-</button>
      </div>
      <div>
        <h2>{status}</h2>
        <input type="text" value={status} onChange={(e) => set_status(e.currentTarget.value)} />
      </div>
      <Formuls />
    </div>
  )
}

export default App;
