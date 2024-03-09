let a = extractLanguage('en_US.UTF-8');  // 'en'
let b = extractLanguage('en_GB.UTF-8');  // 'en'
let c = extractLanguage('ko_KR.UTF-16'); // 'ko'
console.log(a,b,c);

function extractLanguage(locale){
  return locale.split('_')[0];
}
