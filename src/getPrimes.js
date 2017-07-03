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
		for(let i=2; i<=n; i++){
			if( (n %2==0) || (n%3==0) || (n%5==0) ){
				continue;
			}// end of inner if statement
			else{
					result.push(i);
			}//end of inner else statement
	}//end of for loop
	}//end of else statement
	return result;
}// end of unction