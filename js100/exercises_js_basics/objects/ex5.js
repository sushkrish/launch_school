let ocean = {};
let prefix = 'Indian';

ocean.prefix = 'Pacific';

console.log(ocean); // {prefix: 'Pacific'}

ocean[prefix] = 'Pacific'; //{Indian: 'Pacific'}
console.log(ocean);
