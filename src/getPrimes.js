/*This script file gets the prime numbers from 0 to n
where n is d input given to the function.*/

'use strict' ;



function getPrimes(n){
	let result = [];
	if (n < 0){
		return 'Enter a number greater than 2';
	}// end of if statement
	else if (n == 0){
		return 'Enter a number greater than 2';
	}// end of else if statement
	else if (n == 1){
		return 'Enter a number greater than 2';
	}//end of else if statement
	else if (typeof n != 'number'){
		return 'You can only find prime numbers of an Integer';
	}//end of else if statement
	else if (n == 2){
		result.push(n);
		return result;
	}//end of else if statement
	else{
		for(let i=2; i<n; i++){
			let isPrime = true;
		  for(let j = 2; j <= (Math.sqrt(i)); j++){
		     if(i%j==0){
		     	isPrime = false;
		     } //end of if statement
	}//end of inner for loop
	if(isPrime==true){
	result.push(i);
}//end of if statement
}//end of outter for loop
	return result;
	}//end of outter else statement
}// end of unction

let result = getPrimes(12);
console.log('When input is 12, output is : '+result);
//export default getPrimes