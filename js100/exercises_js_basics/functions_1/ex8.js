greetings = {
  en : 'Hi',
  fr : 'Salut',
  pt : 'Ola',
  de : 'Hallo',
  sv : 'Hej',
  af : 'Haai',
}

function greet(language){
  console.log(greetings[language]+"!");  
}

greet('en'); // 'Hi!'
greet('fr'); // 'Salut!'
greet('pt'); // 'Olá!'
greet('de'); // 'Hallo!'
greet('sv'); // 'Hej!'
greet('af'); // 'Haai!'
