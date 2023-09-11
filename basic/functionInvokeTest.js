const add = () => console.log("Add function is invoke");
const remove = () => console.log("Remove function is invoke");

const Condition  = true;

const result = Condition ? add : remove;

console.log("Expected to appear before functions");
console.log(typeof(result()))