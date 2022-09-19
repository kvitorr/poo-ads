var users = [
    { name: "Oby", age: 12 },
    { name: "Heera", age: 32 },
];
var loggedInUser = users.find(function (u) { return u.name === loggedInUsername; });
console.log(loggedInUser.age); // Possivelmente, o objeto é 'nulo'.
/*
if(loggedInUser != null) { // Só printará se o objeto não for nulo.
    console.log(loggedInUser.age);
}
*/ 
