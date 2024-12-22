import { useState } from 'react';
import { Plus, Minus, RotateCcw } from 'lucide-react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [isSpinning, setIsSpinning] = useState('');
  const [hoveredButton, setHoveredButton] = useState(null);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  const handleDoubleClick = (buttonType) => {
    setIsSpinning(buttonType);
    switch (buttonType) {
      case 'increment':
        setCount(prev => prev + 10);
        break;
      case 'decrement':
        setCount(prev => prev - 10);
        break;
      case 'reset':
        setCount(0);
        break;
    }
    setTimeout(() => setIsSpinning(''), 500);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100">
      <div className="p-8 bg-white rounded-2xl shadow-2xl transform transition-all duration-500 hover:shadow-xl hover:scale-105">
        <div className="text-center mb-8">
          <h2 className="text-xl text-gray-600 font-medium mb-2 transition-all duration-300 hover:text-purple-600">Compteur</h2>
          <div className="relative">
            <span className={`text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 
              transition-all duration-300 hover:scale-110 inline-block
              ${isSpinning ? 'animate-bounce' : ''}`}>
              {count}
            </span>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full 
              transition-all duration-300 hover:w-24" />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <button
            onClick={decrement}
            onDoubleClick={() => handleDoubleClick('decrement')}
            onMouseEnter={() => setHoveredButton('decrement')}
            onMouseLeave={() => setHoveredButton(null)}
            className={`flex items-center justify-center p-4 rounded-xl transition-all duration-300
              ${hoveredButton === 'decrement' 
                ? 'bg-red-500 text-white scale-110 shadow-lg' 
                : 'bg-red-50 text-red-600'}
              ${isSpinning === 'decrement' ? 'animate-spin' : ''}`}
          >
            <Minus className="transform transition-transform" size={24} />
          </button>

          <button
            onClick={reset}
            onDoubleClick={() => handleDoubleClick('reset')}
            onMouseEnter={() => setHoveredButton('reset')}
            onMouseLeave={() => setHoveredButton(null)}
            className={`flex items-center justify-center p-4 rounded-xl transition-all duration-300
              ${hoveredButton === 'reset' 
                ? 'bg-amber-500 text-white scale-110 shadow-lg' 
                : 'bg-amber-50 text-amber-600'}
              ${isSpinning === 'reset' ? 'animate-spin' : ''}`}
          >
            <RotateCcw className="transform transition-transform" size={24} />
          </button>

          <button
            onClick={increment}
            onDoubleClick={() => handleDoubleClick('increment')}
            onMouseEnter={() => setHoveredButton('increment')}
            onMouseLeave={() => setHoveredButton(null)}
            className={`flex items-center justify-center p-4 rounded-xl transition-all duration-300
              ${hoveredButton === 'increment' 
                ? 'bg-green-500 text-white scale-110 shadow-lg' 
                : 'bg-green-50 text-green-600'}
              ${isSpinning === 'increment' ? 'animate-spin' : ''}`}
          >
            <Plus className="transform transition-transform" size={24} />
          </button>
        </div>
      </div>

      <div className="mt-8 text-sm text-gray-500 transition-all duration-300 hover:text-purple-600">
        Double-cliquez pour : +10, -10, ou reset avec animation !
      </div>
    </div>
  );
};

export default Counter;