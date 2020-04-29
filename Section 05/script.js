/*

var Person = function(name, yearOfbirth, job){
    this.name = name;
    this.yearOfbirth = yearOfbirth;
    this.job = job;
}

Person.prototype.calculateAge = function(){
   console.log (2020-this.yearOfbirth);
}

Person.prototype.lastName = 'Smith';


var john = new Person ('John',1990,'teacher');
var mark = new Person ('Mark',1980,'driver');
var jane = new Person ('Jane',1950,'retired');

john.calculateAge();
mark.calculateAge();
jane.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);





// Object.create


var personProto = {
    calculateAge : function(){
        console.log(2020-this.yearOfBirth);
    }
}

var john = Object.create(personProto);

john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';

var jane = Object.create (personProto,{
    name : {value : 'Jane'},
    yearOfBirth : {value : 1969},
    job : {value : 'designer'}    
} );

// Objects

var obj1 = {
    name : 'John',
    age : 26
};

var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age);


//Functions 
var age = 27;
var obj = {
    name : 'Jonas',
    city : 'Lisbon'
}
function change(a, b){
    a = 30;
    b.city = 'San Francisco';
}
change(age, obj);

console.log(age);
console.log(obj.city);


// Passing functions as arguments

var years = [1990, 1954, 2007, 1962, 1924];

function arrayCalc(arr, fn){
    var arrRes = [];
    for (i = 0; i< arr.length; i++){
        arrRes.push (fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el){
    return 2020-el;
}

function isFullAge(el){
    return el >= 18;
}


function maxHeartRate(el){
    if (el >= 18 && el <=81){
        return Math.round(206.9- (0.67 * el));
    }else{
        return -1;
    }
}

var ages = arrayCalc(years, calculateAge);
var fullAge = arrayCalc (ages ,isFullAge);
var Rates = arrayCalc (ages, maxHeartRate);

console.log(ages);
console.log(fullAge);
console.log(Rates);

*/


// functions returning functions

function interviewQuestions(job){
    if(job === 'designer'){
        return function(name){
            console.log(name +' Can you please explain to us UX ?');
        }
        }else if(job === 'teacher'){
         return function(name){
            console.log('What subject do you teach, '+name+' ?');
         }   
    }else {
        return function (name){
            console.log('What do you do '+name+' ?');
        }
    }
}

var teacherQuestion = interviewQuestions('teacher');
var designerQuestion = interviewQuestions('designer');

designerQuestion('Mike');
teacherQuestion('John');
designerQuestion('Jane');
teacherQuestion('Albert');

interviewQuestions('driver')('Kyle');
