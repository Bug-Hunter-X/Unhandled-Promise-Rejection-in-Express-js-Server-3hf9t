# Unhandled Promise Rejection in Express.js Server

This repository demonstrates a common error in Express.js applications: unhandled promise rejections in asynchronous middleware or routes.  The `bug.js` file showcases the problematic code, where an asynchronous operation (`doSomethingAsync`) might throw an error without proper handling.  The lack of error handling can lead to unexpected server crashes or silent failures.

The `bugSolution.js` file provides a corrected version with comprehensive error handling, showcasing best practices for handling asynchronous operations in Express.js.  This improved version ensures the server remains stable even during unexpected errors, providing informative error messages or graceful fallbacks.

## How to reproduce the bug
1. Clone this repository.
2. Run `npm install` to install Express.js.
3. Run `node bug.js`. 
4. Observe that the server may crash or fail silently (depending on the outcome of the `doSomethingAsync` function's simulated error). 

## How to fix the bug
Refer to the `bugSolution.js` file which demonstrates proper error handling techniques within the `async` function and the Express route handler.