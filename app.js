/* 
JavaScript Programming Exercise 2 
Strings and string functions
Raghuvir Kakkar
*/


let I = "~~~~~~~~~~~~~";

let firstName = "Raghuvir";
let LastName = "Kakkar";

let age = 19;
 console.log(I);
 // Concatenation 
 let messageconcatenation = 'My name is' + firstName +' ' + LastName +'my age is' + age;
 console.log(messageconcatenation);
 console.log(I);

 //String Template/Template Literals 
 let messageStringLiteral = `My name is ${firstName} ${LastName} and my age is ${age}`;
 console.log(messageStringLiteral);
 console.log(I);

 //Escape $ New Line
 let a ="Add a new line\nThis is a new line";
 console.log(a);
 console.log(1);

 let b = "I quoted the person as saying \"I love javaScript\".";
 console.log(b);
 console.log(I);

 let c = "It's right over there.";
 console.log(c);
 console.log(I);

 let d = 'I quoted the person is sayinh "I love JavaScript".';
 console.log(d);
 console.log(I);

 console.log("String Functions");
 let f = "abcdefg";
 //Length of f
 console.log(`Length of f - ${f.length}`);
 //toUpper
 f=f.toUpperCase();
 console.log(f);

 //toLower
 f = f.toLowerCase();
 console.log(f);

 //substr
 let g = f.substr(2,4);
 console.log(g);

 //substring 
 let h = f.substring(3);
 console.log(h);

 //indexOf
 let index = f.indexOf("c");
 console.log(index);