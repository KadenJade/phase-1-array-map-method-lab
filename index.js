const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];



const titleCased = () => {
 
  return tutorials.map((line) => {
    const newArray = []
    const tokens = line.split(" ");
    const arrayLineNowUpper = tokens.map((word) => {
    const upper = word[0].toUpperCase() + word.slice(1)
    newArray.push(upper)
    })     
    
   return newArray.join(" ")
  })
}

titleCased()




/*
let newArray = [];
const upperCaseThat = () => {
  return tutorials.map(array) => {
    const arrayString = array.split(" ");
    let nowCapitalized = capitalize(arrayString[i])
    let nowSpaced = nowCapitalized.join(" ")
    newArray.push(nowSpaced)
  }
}

function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1);
}

string.map(capitalize)
*/
/*
//break into strings
function titleCased(){
  const noSpace = tutorials.split(" ")
  //cap each first letter
  noSpace.map(capitalize)
  const nowSpaced = noSpace.join(" ")
  newArray.push(nowSpaced)
  return newArray
}
*/
