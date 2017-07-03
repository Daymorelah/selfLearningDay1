
/*This file tests the code in getPreimes.js located in the src folder*/

'use strict';

const assert = require('chai').assert;
import getPreimes from '../src/getPreimes.js'

describe('Funcntion getPreimes',()=>{

	describe('Test for invalid inputs',()=>{
		it('Return Enter a number greater than 2 if input is negative',()=>{
			let result = getPreimes(-3);
			assert.equal(result,'Enter a number greater than 2');
		});//end of it block
		it('Return Enter a number greater than 2 if input is zero',()=>{
			let result = getPreimes(0);
			assert.equal(result,'Enter a number greater than 2');
		});//end of it block
		it('Return Enter a number greater than 2 if input is eual to 1',()=>{
			let result = getPreimes(1);
			assert.equal(result,'Enter a number greater than 2');
		});//end of it block
		it('Return You can only find prime numbers of an Integer if input is a string',()=>{
			let result = getPreimes('Hello');
			assert.equal(result,'Enter a number greater than 2');
		});//end of it block
		it('Return You can only find prime numbers of an Integer if input is a string',()=>{
			let result = getPreimes('45');
			assert.equal(result,'Enter a number greater than 2');
		});//end of it block
	});//end of first test suite

	describe('Test for valid inputs',()=>{
		it('Return [2, 3, 5, 7, 11,] if input is 12',()=>{
			let result = getPreimes(12);
			assert.equal(result,[2, 3, 5, 7, 11,]);
		});//end of it block
		it('Return [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37] if input is 40',()=>{
			let result = getPreimes(40);
			assert.equal(result,[2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37]);
		});//end of it block
		it('Return [2,] if input is 2',()=>{
			let result = getPreimes(2);
			assert.equal(result,[2]);
		});//end of it block
		
	});//end of first test suite
});//end of main test suite