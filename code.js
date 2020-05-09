//Question1
function printHashTriangle(height){
    
    var container = '';

    for (var i = 0; i < height; i++) {
        container = container + '#';
        console.log(container);
    }
}
console.log(printHashTriangle(7));

//Question2
for (a=1; a<=100; a++) {
    if ( !(a%5) && !(a%3) ) {
        console.log('FizzBuzz');
    } else if ( !(a%5) && (a%3)) {
        console.log('Buzz');
    } else if ( !(a%3) ) {
        console.log('Fizz');
    } else {
        console.log(a);
    }
}

//Question3
var size = 8;
var block = '#';
var indent = ' ';

for (var i = 1; i <= size; i++) {
  var line = '';

  for (var j = 1; j <= size; j++){
    if (i%2) {
        if (j%2) {
            line = line + indent;
        } else {
            line = line + block;
        }
    } else {
        if (j%2) {
            line = line + block;
        } else {
            line = line + indent;
        }
    }
  }

  console.log(line);
}
