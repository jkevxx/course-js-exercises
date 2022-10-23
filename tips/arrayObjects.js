// if you want to change a array of object you need to put the number of what element want you change, because if you don't put [item] you gonna create a new element (object) with the same name

let array = [{ animal: "🐤" }, { name: "🐵" }];

let newArray = array;

//newArray.animal = "🐱"; // incorrect [ { animal: '🐤' }, { name: '🐵' }, animal: '🐱' ]
//newArray[0].animal = '🐱' // correct [ { animal: '🐱' }, { name: '🐵' } ]

// newArray;
