// Bubble Sort
export const bubbleSort = async (array, setArray) => {
    let arr = [...array];
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          // Swap
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
          setArray([...arr]);
          await new Promise(resolve => setTimeout(resolve, 50)); // For animation
        }
      }
    }
  };
  
  // Quick Sort
  export const quickSort = async (array, setArray) => {
    const arr = [...array];
    
    const quickSortHelper = async (arr, low, high) => {
      if (low < high) {
        const pivotIndex = await partition(arr, low, high);
        await quickSortHelper(arr, low, pivotIndex - 1);
        await quickSortHelper(arr, pivotIndex + 1, high);
      }
    };
  
    const partition = async (arr, low, high) => {
      let pivot = arr[high];
      let i = low - 1;
      for (let j = low; j < high; j++) {
        if (arr[j] < pivot) {
          i++;
          [arr[i], arr[j]] = [arr[j], arr[i]];
          setArray([...arr]);
          await new Promise(resolve => setTimeout(resolve, 50));
        }
      }
      [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
      setArray([...arr]);
      await new Promise(resolve => setTimeout(resolve, 50));
      return i + 1;
    };
  
    await quickSortHelper(arr, 0, arr.length - 1);
    setArray(arr);
  };
  
  // Merge Sort
  export const mergeSort = async (array, setArray) => {
    const arr = [...array];
    
    const mergeSortHelper = async (arr) => {
      if (arr.length <= 1) return arr;
      const mid = Math.floor(arr.length / 2);
      const left = await mergeSortHelper(arr.slice(0, mid));
      const right = await mergeSortHelper(arr.slice(mid));
      return await merge(left, right);
    };
  
    const merge = async (left, right) => {
      let result = [];
      let i = 0, j = 0;
      while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
          result.push(left[i]);
          i++;
        } else {
          result.push(right[j]);
          j++;
        }
        setArray([...result, ...left.slice(i), ...right.slice(j)]);
        await new Promise(resolve => setTimeout(resolve, 50));
      }
      return [...result, ...left.slice(i), ...right.slice(j)];
    };
  
    const sortedArray = await mergeSortHelper(arr);
    setArray(sortedArray);
  };
  
  // Selection Sort
  export const selectionSort = async (array, setArray) => {
    let arr = [...array];
    for (let i = 0; i < arr.length; i++) {
      let minIndex = i;
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }
      if (minIndex !== i) {
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        setArray([...arr]);
        await new Promise(resolve => setTimeout(resolve, 50));
      }
    }
  };
  
  // Insertion Sort
  export const insertionSort = async (array, setArray) => {
    let arr = [...array];
    for (let i = 1; i < arr.length; i++) {
      let key = arr[i];
      let j = i - 1;
      while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j = j - 1;
        setArray([...arr]);
        await new Promise(resolve => setTimeout(resolve, 50));
      }
      arr[j + 1] = key;
      setArray([...arr]);
      await new Promise(resolve => setTimeout(resolve, 50));
    }
  };
  