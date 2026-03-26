// ! Printing Statements

// // 1) document.write()  <-- deprecated, print data on UI
// document.write("hello");        // it do not give 
// document.write("hello");

// // 2) document.writeln() : to print data on viewport/UI
// document.writeln("<em>Bye");        // it gives space after every use
// document.writeln("Bye</em>");

// // 3) console.log : to print data on console window
// console.log("hello world")




//  ! TOKEN : Smallest unit of any programming language
//  there are 4 type of token
//     1) Keywords : pre define words with specific meaning.  All keywords must be in lowercase. eg: if, else, var, let, const, etc...
//     2) Identifiers : Name given to a class, variables, functions, etc... 
//     3) Literals/ Values : Data stored into a variable.
//     4) Operators : used to perform some operations between two operands.


// ! DATATYPES
// there are 2 types of datatype
// ! 1) primitive : called by value (immutable)
//      -number

    var a1 = 10;
    console.log(a1);
    console.log(typeof a1); // number
    
//      -string

    var a2 = "hello";
    console.log(a2);
    console.log(typeof a2); // string

//     ! advantage of using backticks
        // - multiline string 
        // - string interpolation using ${}
    var a3 = `welcome
    its js class ${a2}` // multiline strring
    console.log(a3);
    console.log(typeof a3); // string


//      -boolean

    var a4 = true;
    console.log;    //true
    console.log(typeof a4); // boolean
    console.log(typeof typeof a4);  // string

//      -undefine : default value provided by js-engine implecitly

    var a5;
    console.log(a5);
    console.log(typeof a5); // undefine

//      -null : provided by developers intentionally

    var a6 = null;
    console.log(a6);
    console.log(typeof a6); // object (by default by js every variable is object)

//      -bigint : more then the range of [-2^53 - 1 to 2^53 - 1]

    var a7 = 9999999999999999999999999999n;
    console.log(a7);
    console.log(typeof a7); //bigint

//      -Symbol : use to make data unique

    var a8 = Symbol("hello");
    var a9 = Symbol("hello");
    console.log(a8);
    console.log(a9);
    console.log(a8 == a9);  //false


//  ! Difference between == and ===
    var n1 = 10;
    var n2 ="10";
    
    console.log(n1 == n2); // true, check only data not datatype
    console.log(n2 === n2); // false, check data and datatype
// ! 2) Non - primitive : call by reference (mutable)
//      -object
    var obj = {
        firstname : "john",        // key value pair called property
        lastname : "doe",
    }
    console.log(obj);
    console.log(typeof obj);    // object

//      -array
    var arr = [1,2,3,4];
    console.log(arr);
    console.log(typeof arr);    //object

//      -function
    function funname(){
        console.log("hello this is function");
    }
    funname()
    console.log(typeof funname);    // function
    
    console.log(typeof("hel" * 10));    // its a special Number and gives nan value.
    


// ! Mutable and immutable example
var str = "hello";
console.log(str);   // hello
str[0] = "k";
console.log(str);   // hello, string is immutable so it do not change

var arr = [10,0,30,40];
arr[1] = 20;
console.log(arr);  // [10,20,30,40], array is mutable so it change the value

// ! HOISTING : js engine move all the declaration at the top of the code before execution
console.log(x); // undefined, because only declaration is hoisted not initialization
var x = 10;    // undefined, because only declaration is hoisted not initialization
console.log(x); // 10, because now x is initialized with value 10

// ! Temporal Dead Zone : it is the time between the hoisting and initialization of a variable.
console.log(y); // ReferenceError: Cannot access 'y' before initialization, because y is in temporal dead zone
let y = 20;
console.log(y); // 20, because now y is initialized with value 20