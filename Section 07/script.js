/*
// ES5 

var name5 = 'Jane Smith';
var age5 = 23;
var name5 = 'Jane Miller';
console.log(name5);


// ES6

const name6 = 'Jane Smith';
let age6 = 23;
name6 = 'Jane Miller';
console.log (name6);


// ES5

var drivingLicence5 = function (passedTest){
    if(passedTest){
        var name = 'Jane';
        var yearOfBirth = 1990;
        console.log(name +' born in  '+yearOfBirth+ 
        ', is now officially allowed to drive a car !');
    } 
};
drivingLicence5(true);

// ES6

var drivingLicence6 = function (passedTest){
    if(passedTest){
        const name = 'Mike';
        let yearOfBirth = 1992;
        console.log(name +' born in  '+yearOfBirth+ 
        ', is now officially allowed to drive a car !');
    } 
};
drivingLicence6(true);


// Lecture : Strings

let firstName = 'John';
let lastName = 'Smith';
const yearOfBirth = 1990;

function calculateAge(year){
    return 2020-year;
}
console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth} and today he's ${calculateAge(yearOfBirth)}`);

const n = `${firstName} ${lastName}`;

console.log (n.startsWith('J'));
console.log (n.endsWith('th'));
console.log (n.includes(' '));
console.log (`${firstName } `.repeat(5));




// Lecture: Arrow functions

const years = [1990, 1965, 1982, 1937];

var age5 = years.map(function(el){
    return 2020- el;
});
console.log(age5);

let age6 = years.map(el => 2020-el);
console.log(age6);

ages6 = years.map((el, index) => {
    console.log (`Age element ${index + 1}:
    ${2020- el}.`);
});

ages6 = years.map((el, index) => {

    const now = new Date().getFullYear();
    const age = now - el;

    return `Age element ${index + 1}:
    ${age}.`;

});
console.log(age6);


// Arrow functions 2

// ES5 

var box5 = {
    color: 'green',
    position: 1,
    clickMe: function(){
        var self = this;
        document.querySelector('.green').addEventListener('click', function(){
            var str = 'This is box number '+ self.position+' and it is '+ self.color;
            alert(str);
        })
    }
}

//box5.clickMe();


var box6 = {
    color: 'green',
    position: 1,
    clickMe: function(){
       
        document.querySelector('.green').addEventListener('click', () => {
            var str = 'This is box number '+ this.position+' and it is '+ this.color;
            alert(str);
        })
    }
}

box6.clickMe();


function Person(name){
    this.name = name;
}
//ES5

Person.prototype.myFriends5 = function(friends){

    var arr = friends.map (function(el){
        return this.name + ' is friend with ' + el;
    }.bind(this));
    console.log(arr);
}




//ES6
Person.prototype.myFriends6 = function(friends){

    var arr = friends.map ((el) => this.name +
     ' is friend with ' + el);
    console.log(arr);
}


var friends = ['Bob', 'Jane', 'Mark'];

new Person('John').myFriends6(friends);




// Destructuring 

const [name, age] = ['John', 26];
console.log(name);
console.log(age);

const obj = {
    firstName: 'John',
    lastName: 'Smith'
};

const {firstName, lastName} = obj;
console.log(firstName);
console.log(lastName);

function calculateAgeRetirement (year){
    const age = new Date().getFullYear() - year;
    return [age, 65- age];
}

const[age2 , retirement] = calculateAgeRetirement(1990);

console.log(age2);
console.log(retirement);




// Arrays In ES6

const boxes = document.querySelectorAll('.box');

//ES5

var boxArray5 = Array.prototype.slice.call(boxes);

boxArray5.forEach(function(cur){
    cur.style.backgroundColor = 'dodgerblue';
});




//ES6
const boxArray6 = Array.from(boxes);
boxArray6.forEach(cur => cur.style.backgroundColor = 'dodgerblue');

//ES5 

for (var i = 0; i< boxArray5.length; i++){
    if (boxArray5[i].className === 'box blue'){
        continue;
    }
    boxArray5[i].textContent = 'I changed to blue !';
}



//ES6 
for(const cur of boxArray6){
    if(cur.className === 'box blue'){
        continue;
    }
    cur.textContent = 'I changed to blue';
}

//ES5
var ages = [12, 17, 8, 21,14,11];



var full = ages.map(function(cur){
    return cur >= 18;
});

console.log(full);

console.log(full.indexOf(true));

console.log(ages[full.indexOf(true)]);


//ES6
 

console.log(ages.findIndex(cur => cur >= 18));

console.log(ages.find (cur => cur >= 18));



// Spread operator

var addFourAges = function(a, b, c, d){
    return a+b+c+d;
}



var sum1 = addFourAges(18, 30, 12, 21);

console.log(sum1);

//ES5

var ages = [18, 30, 12, 21];

var sum2 =addFourAges.apply(null, ages); 
console.log(sum2);

//ES6 

var sum3 = addFourAges(...ages);
console.log(sum3);

const familySmith = ['John', 'Jane', 'Mark'];
const familyMiller = ['Mary', 'Bob', 'Ann'];

const bigFamily = [...familyMiller, 'Lily', ...familySmith];
console.log (bigFamily);


const h = document.querySelector('h1');
const boxes = document.querySelectorAll ('.box');

const all = [h, ...boxes];

Array.from(all).forEach(cur => cur.style.color = 'purple');
*/

// Rest parametres

function isFullAge5(){
    var argsArr = Array.prototype.slice.call(arguments);

    argsArr.forEach(function(cur){
        console.log((2020- cur)>= 18)
    })
};

//isFullAge5(1990, 2005, 1999);

function isFullAge6(limit, ...years){
    years.forEach(cur => console.log(2020-cur >=limit));
}

isFullAge6(15, 1990, 2005, 1999,2015);











