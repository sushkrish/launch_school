function largest(arr){
  let max = arr[0];
  for (num of arr){
    max = num > max ? num : max;
  }
  return max;
}


list1 = [1,6,3,2];
list2 = [-1, -6, -3, -2];
list3 = [2,2];
console.log(largest(list1));
console.log(largest(list2));
console.log(largest(list3));

