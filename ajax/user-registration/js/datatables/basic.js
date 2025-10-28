
const nameArr = ["Akshay","Rohan","Jadhav","hii"];
const numArr = [1,2,3,4,5,6,];
const newArr = [...nameArr,...nameArr];
console.log(newArr);

arr = [1,4,8,[12,16,18],[1,3,5,[6,7,9]]]

const flatarr = arr.flat(3);
console.log(flatarr);

const numbers = [3, 8, 1, 9, 5];
const max = numbers.reduce((acc, curr) => acc > curr ? acc : curr);
console.log(max);

let obj = {
    name: "Sourav",
    age: 23,
    job: "Developer"
};

console.log(obj.name);
let car = { model: "Tesla" };
car.color = "Red";
console.log(car);
console.log(car.hasOwnProperty("model"));

let obj1 = { name: "Sourav" };
let obj2 = { age: 23};

let obj3 = { ...obj1, ...obj2 };
console.log(obj3);

//set
const mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(2); // duplicate, ignored
mySet.add("Hello");
mySet.forEach((val)=>{
    console.log(val);

});
console.log(mySet.has(2));
console.log(mySet.values()); 



const capitals = new Map();

capitals.set("India", "New Delhi");
capitals.set("USA", "Washington DC");
capitals.set("Japan", "Tokyo");
console.log(capitals.get("India")); 
console.log(capitals.has("USA")); 
capitals.delete("Japan");
console.log(capitals.size); 




//objects and destructuring
const user = {
  name: "Akshay",
  age:23,
  address: {
    city: "Pune",
    state: "Maharashtra"
  }
};
console.log(user.address.city); 
const { name, age } = user;
console.log(name); // Akshay
console.log(age);  // 23
const { address: { city, state } } = user;
console.log(city); // Pune



const myObj = {
    name :"Akshay",
    age : 23,
}

console.log( delete myObj.age);
console.log(myObj);
