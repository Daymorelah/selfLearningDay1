
/*This file tests the code in getPreimes.js located in the src folder*/

'use strict';

const assert = require('chai').assert;
import getPrimes from '../src/getPrimes.js'

describe('Funcntion getPrimes',()=>{

	describe('Test for invalid inputs',()=>{
		it('Return, Enter a number greater than 2, if input is negative',()=>{
			let result = getPrimes(-3);
			assert.equal(result,'Enter a number greater than 2');
		});//end of it block
		it('Return, Enter a number greater than 2, if input is zero',()=>{
			let result = getPrimes(0);
			assert.equal(result,'Enter a number greater than 2');
		});//end of it block
		it('Return, Enter a number greater than 2, if input is eual to 1',()=>{
			let result = getPrimes(1);
			assert.equal(result,'Enter a number greater than 2');
		});//end of it block
		it('Return, You can only find prime numbers of an Integer, if input is a string',()=>{
			let result = getPrimes('Hello');
			assert.equal(result,'You can only find prime numbers of an Integer');
		});//end of it block
		it('Return, You can only find prime numbers of an Integer, if input is a special character',()=>{
			let result = getPrimes('!£$@~!£$%^');
			assert.equal(result,'You can only find prime numbers of an Integer');
		});//end of it block
		it('Return, You can only find prime numbers of an Integer, if input is a string',()=>{
			let result = getPrimes('45');
			assert.equal(result,'You can only find prime numbers of an Integer');
		});//end of it block
	});//end of first test suite

	describe('Test for valid inputs',()=>{
		it('Return, [2, 3, 5, 7, 11,] ,if input is 12',()=>{
			let result = getPrimes(12);
			assert.deepEqual(result, [ 2, 3, 5, 7, 11 ]);
		});//end of it block
		it('Return, [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37], if input is 40',()=>{
			let result = getPrimes(40);
			assert.deepEqual(result,[2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37]);
		});//end of it block
		it('Return [2] if input is 2',()=>{
			let result = getPrimes(2);
			assert.deepEqual(result,[2]);
		});//end of it block
		it('Return, [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61,], if input is 65',()=>{
			let result = getPrimes(65);
			assert.deepEqual(result,[2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61,]);
		});//end of it block
		it('Return, [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107], if input is 107',()=>{
			let result = getPrimes(107);
			assert.deepEqual(result,[2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107]);
		});//end of it block
	});//end of first test suite
});//end of main test suite