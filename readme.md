1/ What is the difference between var, let, and const?

ANS : var is function-scoped, and let and const are block-scoped. const variables can't be reassigned, unlike var and let.



2/ What is the difference between map(), forEach(), and filter()?

ANS:forEach() iterates through an array and executes a function for each element, but it doesn't return a new array. map() also iterates through an array and executes a function for each element, but it returns a new array with the results. filter() creates a new array containing only the elements that pass a provided test.



3/ What are arrow functions in ES6?

ANS: Arrow functions in ES6 provide a more compact syntax for writing functions. They also handle the keyword differently, inheriting it from the surrounding code rather than having their own binding. This makes them particularly useful for callbacks and methods.



4/ How does destructuring assignment work in ES6?

ANS: Destructuring assignment in ES6 is a feature that allows developers to extract values from arrays or objects and assign them to separate variables in a concise way. It simplifies code by removing the need to access each element or property individually. With arrays, values can be assigned based on their position, while with objects, variables are matched to property names. Destructuring also allows skipping unwanted elements or properties, which makes the code more flexible. Default values can be assigned when the original data is missing or undefined. Variables can also be renamed while extracting them from objects, enhancing clarity and readability. This feature is especially useful when dealing with complex data structures or working with function parameters. By using destructuring, developers can write shorter and more expressive code. Overall, destructuring improves maintainability, reduces repetition, and makes JavaScript code cleaner and easier to understand.


5/ Explain template literals in ES6. How are they different from string concatenation?

ANS: Template literals are a way to create strings in ES6 using backticks (`). They are different from traditional string concatenation because they allow for embedded expressions (e.g., ${variable}) and multi-line strings without needing the + operator. This makes the code cleaner and more readable.
