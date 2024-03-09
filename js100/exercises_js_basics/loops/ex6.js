let cities = ['Istanbul', 'Los Angeles', 'Tokyo', null, 'Vienna', null, 'London', 'Beijing', null];

for (val of cities){
  if(val){
    console.log(val.length);
  }
}
