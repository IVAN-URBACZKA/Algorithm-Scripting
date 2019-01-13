const arr = {

  "&" : "&amp;",

  "<" : "&lt;",

  ">" : "&gt;",

  '"' : "&quot;",

  "'" : "&apos;"

}

function convertHTML(str) {
  
  for(let item in arr){
    let before = item;
    let after = arr[item];
    let pattern = new RegExp(before,"g");
    str = str.replace(pattern,after);
  }
  return str;

}

console.log(convertHTML("Dolce & Gabbana"));
console.log(convertHTML("Hamburgers < Pizza < Tacos"));
console.log(convertHTML("Sixty > twelve"));
console.log(convertHTML('Stuff in "quotation marks"'));
console.log(convertHTML("Schindler's List"));
console.log(convertHTML("<>"));
console.log(convertHTML("abc"));



