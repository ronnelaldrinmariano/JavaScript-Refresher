let x;

const name = 'John';
const age = 30;

x = 'Hello, my name is: ' + name + ' and I am ' + age + ' years old';


// Template Literals

x = `Hello, name is ${name} and I am ${age} years old`

// String Properties and Methods

const s = new String('Hello World') ;

x = typeof s;



// x = s.length;

// Access value by key 
x = s[1];

x = s.__proto__;

x = s.toUpperCase();
x = s.toLowerCase();

x = s.charAt(0);

x = s.indexOf('1');

x = s.substring(0, 4);

x = s.substring(7);

x = s.slice(-11, 4);

x = '                    Hello World';
x = x.trim();

x = s.replace('World', 'John');

x = s.includes('Hello');

x = s.valueOf();

x = s.split('');

console.log(x);