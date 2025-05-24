

function Counter({ index, value, onIncrement, onDecrement }) {
  return (
    <div className="flex items-center justify-between bg-white shadow p-3 rounded">
      <span className="font-medium">Counter {index + 1}: {value}</span>
      <div className="flex gap-2">
        <button
          onClick={() => onDecrement(index)}
          className="bg-gray-300 px-3 py-1 rounded"
        >
          -
        </button>
        <button
          onClick={() => onIncrement(index)}
          className="bg-green-500 text-white px-3 py-1 rounded"
        >
          +
        </button>
      </div>
    </div>
  );
}

export default Counter;
