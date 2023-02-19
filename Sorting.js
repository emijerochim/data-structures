const bubbleSort = (arr) => {
  //time: O(n^2) - space: O(1)
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        let aux = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = aux;
      }
    }
  }
  return arr;
};

const selectionSort = (arr) => {
  //time: O(n^2) - space: O(1)
  for (let i = 0; i < arr.length; i++) {
    let min = i,
      aux;
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    aux = arr[i];
    arr[i] = arr[min];
    arr[min] = aux;
  }
  return arr;
};

const insertionSort = (arr) => {
  //time: O(n^2) - space: O(1)
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < arr[0]) {
      arr.unshift(arr.splice(i, 1)[0]);
    }
    for (let j = 1; j < i; j++) {
      if (arr[i] > arr[j - 1] && arr[i] < arr[j]) {
        arr.splice(j, 0, arr.splice(i, 1)[0]);
      }
    }
  }
  return arr;
};

const mergeSort = (arr) => {
  //time: O(n log(n)) - space: O(n)
  if (arr.length === 1) {
    return arr;
  }
  const middle = Math.floor(arr.length / 2),
    left = arr.slice(0, middle),
    right = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
};
const merge = (left, right) => {
  let result = [],
    leftIndex = 0,
    rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
};

const quickSort = (arr, left, right) => {
  //time: O(n^2) - space: O(log(n))
  let pivot, partitionIndex;

  if (left < right) {
    pivot = right;
    partitionIndex = partition(arr, pivot, left, right);
    quickSort(arr, left, partitionIndex - 1);
    quickSort(arr, partitionIndex + 1, right);
  }

  return arr;
};
const partition = (arr, pivot, left, right) => {
  let pivotValue = arr[pivot],
    partitionIndex = left;

  for (let i = left; i < right; i++) {
    if (arr[i] < pivotValue) {
      swap(arr, i, partitionIndex);
      partitionIndex++;
    }
  }
  swap(arr, right, partitionIndex);

  return partitionIndex;
};
const swap = (arr, firstIndex, secondIndex) => {
  let temp = arr[firstIndex];
  arr[firstIndex] = arr[secondIndex];
  arr[secondIndex] = temp;
};

//tests
const arrNum = [3, 675, 0, 34, -56, 4, 6, 1, 34, 8, -2];
console.log(arrNum);
//console.log(bubbleSort(arrNum)); //time: O(n^2) - space: O(1)
//console.log(selectionSort(arrNum)); //time: O(n^2) - space: O(1)
//console.log(insertionSort(arrNum)); //time: O(n^2) - space: O(1)
//console.log(mergeSort(arrNum)); //time: O(n log(n)) - space: O(n)
console.log(quickSort(arrNum, 0, arrNum.length - 1)); //time: O(n^2) - space: O(log(n))
//radixSort ? countingSort?
