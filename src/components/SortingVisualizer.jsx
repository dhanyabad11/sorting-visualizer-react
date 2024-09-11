import React, { useState, useEffect } from 'react';
import { bubbleSort, quickSort, mergeSort, selectionSort } from './SortingAlgorithms';

function SortingVisualizer() {
  const [array, setArray] = useState([]);

  // Generate new random array
  const generateArray = () => {
    const newArr = Array.from({ length: 50 }, () => Math.floor(Math.random() * 500));
    setArray(newArr);
  };

  useEffect(() => {
    generateArray(); // Generate an array when the component loads
  }, []);

  return (
    <div className="visualizer-container">
      <button onClick={generateArray}>Generate New Array</button>
      <button onClick={() => bubbleSort(array, setArray)}>Bubble Sort</button>
      <button onClick={() => quickSort(array, setArray)}>Quick Sort</button>
      <button onClick={() => mergeSort(array, setArray)}>Merge Sort</button>
      <button onClick={() => selectionSort(array, setArray)}>Selection Sort</button>

      <div className="array-container">
        {array.map((value, idx) => (
          <div className="array-bar" key={idx} style={{ height: `${value}px` }}></div>
        ))}
      </div>
    </div>
  );
}

export default SortingVisualizer;
