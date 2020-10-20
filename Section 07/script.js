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
*/

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