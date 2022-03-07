//Compare Scopes of the var and let Keywords
function checkScope() {
   var i = 'function scope';
   if (true) {
      i = 'block scope';
      console.log('Block scope i is: ', i);
   }
   console.log('Function scope i is: ', i);
   return i;
}
checkScope();

function checkScope_1() {
   let i = 'function scope';
   if (true) {
      let i = 'block scope';
      console.log('Block scope i is: ', i);
   }
   console.log('Function scope i is: ', i);
   return i;
}
checkScope_1();