repeat(3, 'ha'); // 'hahaha'
repeat(4, 'hi');

function repeat(times, text){
  repeat_text = "";
  for (let i = 0; i < times; i += 1) {
    repeat_text += text;
  }
  console.log(repeat_text);
}
