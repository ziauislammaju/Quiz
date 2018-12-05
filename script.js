console.log ("Hello world")
//1a

let age = 18;

//1b

const Name = "Ziaul Islam";

//1c

let isMarried = false;

//1d

age++;

//1e.

// yes it is  possible to change the variable declrated with "let" and "var" but we can not change the  variable "const", "var" and "let" can change  the position but you can not change the position "const" variabel.

//1f
//No you can not change the position "const" variabel .

//2a

Number

//2b

"string"
 
//2c

"boolean"
 
//2d

"string"

 //2e

 console.log(typeof "Hello");

 //2f

 "boolean"
 //2g

let x = "123";

x = Number(x);
//2h

let x = 123; 

x = String(x);

//3a

//variable has been declared but not give the a value yet.

//3b

//Not A Number

//3c

//Number

//3d

//undefined

//3e 

//Number        

//3f

//isNaN()

//3g

//x === 4, checks value and if they are the same type

//3h

//x == null, checks only if there is not value in it

//4a

//sum = 10+15;

//4d

//11

//4c

//(3+4)*2

//4d

//6

//4e

//(20 - 8 )
// 12
// ( 2 - 4)
// -2
// (12-2)
// 10

//4f

//"Hello,world"

//4g

//5

//5a

//"boolean"

//5b

//false

//5c

//false

//5d

//true

//5e

// false

//5f

//true

//5g 

//boolean

//5h

//false

//5i

//true

//5j

//true

//5k

//false
//5l

//a !== false

//5m

//b !== true

//6a

//arr1 = [];

//6b

//3

//let arr = [10, 8, 1];

//6c

//arr.splice(1, 1, 7);

//6d

//arr.push(2);

//6e

//arr.unshift(12);

//6f

//console.log(arr[0]);

//6g

//for (i=0; i < arr.length; i++)
//{
	console.log(arr[i]);
}//
//6h
//0
//6i
//Yes
//6j
//No
//6k
//3
//6l
//true
//6m
//true
//6n
//1, 1, 1

//7a
function returnValue4()
{
	return 4;
}

//7b
//Number
//7c
//undefined
//7d
//2
//7e
//0
//7f
//undefined
//7g
//string
//7h
//string
//7i
//Error
//7j
//Error

//8a
//string
//8b
console.log(arr.slice(-1)[0]);
//8c
function squareOfArr (arr)
{
	return arr.length*2;
}

//8d
function greetingName (name)
{
	console.log("Hello " + name + ",how are you doing?");
}
//8e
//??
const ingredients = ["Banana", "Oats", "Milk"];
const commandString = "ls | cd | touch | cp";
console.log("For pancackes, you will need " + ingredients.join(" and "));
console.log(commandString.split(" "));

function doubleArray (arr)
{
	var newArr = [];
	console.log(arr);
	for (i=0; i < arr.length; i++)
	{
		newArr.push(arr[i]);
	}
	
	for (i=0; i < arr.length; i++)
	{
		newArr.push(arr[i]);
	}
	return newArr;
}