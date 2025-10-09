//1. What is regex?
// a pattern used to match character in strings.
// it is used for :-
// search
// match
// manipulate
// validation 




//2. how to create?
//literal syntax
// let pattern = /hello/;
//constructor 
//let pattern = new RegExp("hello");



//3. common methods
// test()
//let text = "hello world";
// let pattern = /hello/;
//console.log(pattern.test(text)); //true

// let text = "learning acciojob course";
//let pattern = /accio/
//console.log(pattern.test(text));


//match() and exec()
//let text = "hello hello";
//let pattern = /hello/g;
//conosle.log(text.match(pattern));
// console.log(pattern.exec(text));
// console.log(pattern.exec(text));
// console.log(pattern.exec(text));



// replace()
// let text = "hello hello world";
// console.log(text.replace(/hello/g),"hi");

//search()
//let text = "hello world";
//console.log(text.search(/world/));



//split()
// let text = "apple,orange,grapes";
// console.log(text.split(/,/));


// let text = "hellohhh";
// let pattern = /h/g;
// console.log(pattern.exec(text)); 
// console.log(pattern.exec(text)); 
// console.log(pattern.exec(text)); 
// console.log(pattern.exec(text));
// console.log(text.match(pattern)); 



//flags
//g :- global flag

//i (ignore case sensitivity)
//let text = "HELLO";
//console.log(/hello/i.test(text));

// let text = "ACCIO";
// console.log(/accio/i.test(text));


//m
// let text = "hello\nworld";
// console.log(/^world/m.test(text));

//anchors
//^
// let text = "hello world";
// let pattern = /^hello/;
// console.log(pattern.text(text));

//$
// let text = "hello world";
// let pattern = /world$/;
// console.log(pattern.test(text));




// \b (word boundary)
// let text = "hello there";
// let pattern = /\bhello\b/;
//console.log(pattern.text(text));

// \B (non - word boundary )
//let text = "hello";
//let pattern = /\Bo/;
// console.log(pattern.test(text));

//quantifiers 
//* : matches 0 or more items
//+ : matches 1 or more items
//? : 0 or 1 item

// let text = "aaab";
//let pattern = /a*/;
// let pattern = /a+/;
// let text  = "";
// let pattern = /a?/g;
// console.log(pattern.exec(text));
// console.log(pattern.exec(text));



//{n}: matches exactly n times
// let text  = "aaab";
// let pattern = /a{2}/;
// console.log(pattern.exec(text)); // aa
// console.log(pattern.exec(text)); // null

//{n,} : matches n or mare times
// let text  = "aaab";
// let pattern = /a{2,}/;
// console.log(pattern.exec(text));


//{n,m} : matches between n and m times
// let text  = "aaaaab";
// let pattern = /a{2,3}/;
// console.log(pattern.exec(text));


// sets and ranges
//charatcer set [abc]
// let text = 'cat';
// let pattern = /c[aeiou]t/;
// console.log(pattern.test(text));

// negative character set [^abc]
// let text = "cbt";
// let pattern  = /c[^aeiou]t/;
// console.log(pattern.test(text));

// ranges
//[a-z]
// let text = "g";
// console.log(/[a-z]/.test(text));

//[0-9]

// predefined character classes
// \d : anydigit
// \w : any word character (letter,digit,underscore)
// \s : any whitespace character

// let text = "123abc";
// console.log(/\d/.test(text));
// console.log(/\d/.exec(text));


// dot character
// matches any character(only one) excpet newline (\n)
// let text = "cat";
//c onsole.log(/c.t/.test(text));



// ondigit using regex
// let text = "user123";
// console.log(/\d/.test(text));




// ondigit using regex
// let text = "user123";
// console.log(/\d/.test(text));


//match a word that starts with h 
// let text =  "hello world";
// let pattern = /^hello/
// console.log(pattern.test(text));


// split a string into an array
// let string = "red,green,blue";

// console.log(string.split(/,/));

// let text = "HELLO hello";
// let pattern = /hello/i;
// console.log(pattern.test(text))




// ondigit using regex
// let text = "user123";
// console.log(/\d/.test(text));


//match a word that starts with h 
// let text =  "hello world";
// let pattern = /^hello/
// console.log(pattern.test(text));


// split a string into an array
// let string = "red,green,blue";

// console.log(string.split(/,/));

// let text = "HELLO hello";
// let pattern = /hello/i;
// console.log(pattern.test(text))

// let text = "hello world";
// console.log(/world$/.test(text));


//extract all characters

// let text = "cat";
// let pattern = /c[aeiou]t/;
// console.log(pattern.test(text));


// match any single character

// let text = "cat";

// let pattern = /c.t/;
// console.log(pattern.test(text));

// check whether text conatains only digits;


// let text = "123";
// let pattern = /\d+/;
// // console.log(pattern.test(text));
// console.log(pattern.exec(text));


//matches exactly 3 aaa
// let text = "aaaaaaaa";
// let pattern = /a{3,}/g;
// console.log(pattern.test(text));
// console.log(pattern.exec(text));
// console.log(pattern.exec(text));
9


//multiple h 
// let text = "hahaha";
// let pattern = /h/g;
// console.log(pattern.exec(text));
// console.log(pattern.exec(text));
// console.log(pattern.exec(text));

// let text = "the end";
// let pattern = /\bthe\b/;
// console.log(pattern.test(text));
    
// let text = "A1b2";
// let pattern = /[a-z]/; // can use it with or without g 
// console.log(pattern.test(text));


// email validation
// let text = "afadkfaa9797@gmail.com";
// let pattern = /[a-z]/;
// console.log(pattern.test(text));

//number validation
// let pattern = /\+91\d{10}$/
// let num = "+9189569088398";
// console.log(pattern.test(num));

//password validation 

// let pass = "fspefjwfpwb13e";
// let pattern = /\d/;
// console.log(pattern.test(pass));


