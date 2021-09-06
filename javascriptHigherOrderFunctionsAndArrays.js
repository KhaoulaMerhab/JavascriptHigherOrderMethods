const students = [
    {firstName: "Hana" , lastName:"Mokrani" , age : 20 , hobby : "cooking"},
    {firstName: "Yanis" , lastName:"Yousfi" , age : 19 , hobby : "gaming"},
    {firstName: "Feryal" , lastName:"Baka" , age : 19 , hobby : "singing"},
    {firstName: "Monsef" , lastName:"Noubadji" , age : 18 , hobby : "hacking"},
    {firstName: "Yasmine" , lastName:"Belblidya" , age : 19 , hobby : "teaching"},
    {firstName: "Mohamed" , lastName:"Deliher" , age : 19 , hobby : "playingFootball"},
    {firstName: "Tilelli" , lastName:"Lebiad" , age : 19 , hobby : "drawing"},
    {firstName: "Khaoula" , lastName:"Merhab" , age : 19 , hobby : "nothing"}
];


const birthdays = [30 , 28 , 18 , 6 , 1 , 9 , 11 , 8, 13 , 9 , 27 , 14] ; 

const ages = [25,22,54,28,15,11,7,18,20,35,33,42,14,26]


//?---------------------- forEach : it's just a better way to look through an array , no back 

//*Get all the students in the students Array

//! ES5 way (for loop) 

for(let i = 0; i < students.length; i++ ){
    // console.log(students[i].firstName +' '+ students[i].lastName);
}

//! ES6 way (forEach)

students.forEach(student => {
    // console.log(student.firstName +' '+ student.lastName);
});

birthdays.forEach(birthday => {
    if(birthday >= 10){
        // console.log(birthday + ' Yaaaaay HBD 🎉🥳😘');
    }
});


//?---------------------- filter : filter the elements from an array as an array []

//* Get ages that are able to drive

//! ES5 way (for loop)

let canDrive = [] ; 

for(let i = 0; i < ages.length ; i++){
    if(ages[i] >= 18 ){
        canDrive.push(ages[i]) ;
    }
}

//! ES6 way (filter)

    //** method 0 :
const canDrive = ages.filter((age) => {
    if(age >= 18){
        return true ;
    }
})

//     //**  method 1 : 
const canDrive = ages.filter((age) => age >= 18 ) ; //** That's cool isn't it 😎😏😋

// console.log(canDrive);


//* Get the ages of the students of LPDWI 😁

//! ES6 way (filter)

    //** method 0 :
const lpdwiAges = students.filter((student) => {
    if(student.age <= 18){
        // console.log(`${student.firstName} ${student.lastName} , cuuute 😍`);
    }else if(student.age === 19){
        // console.log(`${student.firstName} ${student.lastName} ∈ ninteen group 1️⃣9️⃣`);
    }else {
        // console.log(`${student.firstName} ${student.lastName} First arrives to the twenties 2️⃣0️⃣👨🏻‍🚀👏🏻`);
    }
}) 

    //** method 1 : 
const lpdwiAges = students.filter((student) => (student.age <= 18) ? console.log(`${student.firstName} ${student.lastName} , cuuute 😍`) : (student.age === 19)? console.log(`${student.firstName} ${student.lastName} ∈ ninteen group 1️⃣9️⃣`) : console.log(`${student.firstName} ${student.lastName} First arrives to the twenties 2️⃣0️⃣👨🏻‍🚀👏🏻`)) ; // ** just one cool line 😋

//?---------------------- map : you can make arrays from any array you have and manupilate it as  you want 

// ** Get the names of every single student in LPDWI 

//! ES5 way : 
const lpdwiNames = students.map(function(student) {
    return `${student.firstName} ${student.lastName} : ${student.age} => is a member of LPDWI Family ❤`
}) ;

//! ES6 way : 
const lpdwiNames = students.map(student => ` ${student.firstName} ${student.lastName} : ${student.age} => is a member of LPDWI Family ❤ `) ; // ** adorable <3

// console.log(lpdwiNames);

// ** Do some math on ages array 

const mathAges = ages
                .map(age => Math.sqrt(age))
                .map(age => (age * age ))
                .map(age => (age * 2)) ; 

// console.log(mathAges);

//?---------------------- sort : sort the elements of the array 

//** Sort the ages array 

    // ** Method 0 : 
const agesSorted = ages.sort((a , b) => {
    if(a > b){
        return 1 ;
    } else {
        return -1;
    }
})

    // ** Method 1 : 
const agesSorted = ages.sort((a , b) => a > b ? 1 : -1) ; // ** elegant one single line ✨

// console.log(agesSorted);

// ** Sort the hobbies by alphabet 
// const birthdaySorted = birthdays.sort((a , b) => a - b); //! when we don't add any param it sorts the first num only like this => [1, 11, 13, 14, 18, 27, 28, 30, 6, 8, 9, 9] 

const birthdaySorted = birthdays.sort((a , b) => a - b); 

// console.log(birthdaySorted);

//?---------------------- reduce : it can be used for a lot of things we can use it to sum all the items in an array 

// ** Sum all the items of ages of students 

//! ES5 way : 

let ageSum = 0 ;                                                                     

for(let i = 0; i < ages.length; i++){
    ageSum += ages[i] ;  
}

//! ES6 way : 

const ageSum = ages.reduce((total,age) => total + age ,0) //! reduce method take 2 params 1st is a function and the 2nd is initialize the total param (total = 0)  

// console.log(ageSum);

// ** Sum all the ages of the students 

const stuSum = students.reduce((total, student) => total + student.age , 0) ;

// console.log(stuSum);