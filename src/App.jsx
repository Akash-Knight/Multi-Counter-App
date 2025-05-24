import { useState } from 'react';
import Counter from './components/Counter';

function App() {
  const [counters, setCounters] = useState([0]);

  const addCounter = () => {
    setCounters([...counters, 0]);
  };

  const increment = (index) => {
    const newCounters = [...counters];
    newCounters[index] += 1;
    setCounters(newCounters);
  };

  const decrement = (index) => {
    const newCounters = [...counters];
    newCounters[index] -= 1;
    setCounters(newCounters);
  };

  const resetAll = () => {
    setCounters(counters.map(() => 0));
  };

  const totalValue = counters.reduce((total, value) => total + value, 0);

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Multi Counter App</h1>
      <div className="space-y-4">
        {counters.map((count, index) => (
          <Counter
            key={index}
            index={index}
            value={count}
            onIncrement={increment}
            onDecrement={decrement}
          />
        ))}
      </div>
      <div className="mt-4 flex gap-2">
        <button onClick={addCounter} className="bg-blue-500 text-white px-4 py-2 rounded">
          Add Counter
        </button>
        <button onClick={resetAll} className="bg-red-500 text-white px-4 py-2 rounded">
          Reset All
        </button>
        <div className="ml-auto font-bold">Total: {totalValue}</div>
      </div>
    </div>
  );
}

export default App;






