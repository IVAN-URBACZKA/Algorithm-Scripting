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


-----------------------------------------------------
  
  //Intermediate Algorithm Scripting: Sum All Odd Fibonacci Numbers

  
 function sumFibs(num) {

    // create array
    let arr = [1,1];

    // addition with a loop for
  for(i=1;i!=num;i++){
        let actualNumber = arr[i];
        let beforeNumber = arr [i-1];
        let final = actualNumber + beforeNumber;
        arr.push(final);
    }
    // filter item value if impair and less than num;
    arr = arr.filter(item => item % 2 != 0 && item <= num);

    // add impairs numbers
    return arr.reduce(function(a,b){
        return a + b;
    })
  }
  
  console.log(sumFibs(4));


