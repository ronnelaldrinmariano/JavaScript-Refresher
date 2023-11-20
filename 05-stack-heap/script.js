// This values are stored in the stack
const name = 'John';
const age = 30;

// Reference values are stored on the heap

const person = {
    name: 'Brad',
    age: 40
};


let newName = name;



newName = 'Jonathan';



console.log(name, newName);



