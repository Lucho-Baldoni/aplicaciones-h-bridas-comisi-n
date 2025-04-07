
import isPrime from './isPrime.js';
import dotenv from 'dotenv';


dotenv.config();

const number = process.env.NUMBER_TO_CHECK; 
console.log(`El número ${number} es primo? ${isPrime(Number(number))}`);
