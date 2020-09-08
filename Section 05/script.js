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

// functions returning functions

function interviewQuestions(job){
    if(job === 'designer'){
        return function(name){
            console.log(name +', Can you please explain to us UX ?');
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



// IIFE

function game(){
    var score = Math.random() * 10;
    console.log(score >= 5);
}
game();



(function () {
    var score = Math.random() * 10;
    console.log(score >= 5);
}
)();

(function (goodLuck) {
    var score = Math.random() * 10;
    console.log(score >= 5 - goodLuck);
})(5);


//CLOSURES

function retirement(retirementAge){
    var a = " years left until retirement.";
    return function(yearOfBirth){
        var age = 2020-yearOfBirth;
        console.log((retirementAge-age) + a);
    }
}

var retirementUS = retirement(66);

retirementUS(1990);
retirement(66)(1994);

function interviewQuestion(job){
    return function(name){
        if(job === 'designer'){
                console.log(name +', Can you please explain to us UX ?');
            
            }else if(job === 'teacher'){

                console.log('What subject do you teach, '+name+' ?');
             }   
        else {
                console.log('What do you do '+name+' ?');
            }
        }

    }
    var teacherQuestion = interviewQuestion('teacher');
    var designerQuestion = interviewQuestion('designer');

        interviewQuestion('driver')('Kyle');

        

        // Bind, call and Apply

    var john = {
        name:'John',
        age: 26,
        job:'teacher',
        presentation (style, timeOfDay){
            if (style === 'formal'){
            console.log (`Good ${timeOfDay} Ladies and gentlelmen ! I'm ${this.name} I'm ${this.age} years old and I'm a ${this.job}.`);
        }else if(style === 'friendly'){
            console.log (`Hey ! what's up ? I'm ${this.name}, I'm ${this.age} and I'm a ${this.job}, have a nice ${timeOfDay}.`);
            }
        }
    };

    var emily = {
        name:'Emily',
        age: 35,
        job:'designer'
    };

john.presentation('formal','afternoon');

john.presentation.call(emily,'friendly','morning');

//john.presentation.apply(emily,['friendly','morning']); .apply is used for arrays...

var jonhFriendly = john.presentation.bind(john,'friendly');

jonhFriendly('day');

var emilyFormal = john.presentation.bind(emily,'formal');

emilyFormal('night');


var years = [2001, 1954, 2007, 1962, 1924];

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

function isFullAge(limit, el){
    return el >= limit;
}
var age = arrayCalc(years,calculateAge);

var isFullAgeJapan = arrayCalc(age,isFullAge.bind(this,'20'));

console.log(age);
console.log(isFullAgeJapan);




// Coding Challenge 07

(function(){
    function Questions(question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }
    Questions.prototype.displayQuestion = function() {
        console.log(this.question);
        for (var i = 0; i < this.answers.length; i++) {
            console.log(i + ': ' + this.answers[i]);
        }
    }
    
    Questions.prototype.checkAnswer = function(ans) {
            if (ans === this.correct){
                console.log(`The answer is correct !`);
            }else{
                console.log(`The answer is wrong ! Try again !1`);
            }
    }
    
    
    
    var q1,q2,q3;
    
    q1 = new Questions(`What's the result of 3*3 ?`,
                        ['1','6','9','15'],
                        2);
    q2 = new Questions(`What progamming language are you using right now ?`,
                        ['Javascript','Python','php'],
                        0);
    q3 = new Questions(`What's the US capital ?`,
                        ['DC','Paris','Roma'],
                        0);
    
    var allQuestions = [q1, q2, q3];
    
    var n = Math.floor(Math.random() * allQuestions.length);
       
    allQuestions[n].displayQuestion();
    
    var answer = parseInt(prompt ('Please select the correct answer !'));
    
    allQuestions[n].checkAnswer(answer);
})();
*/

// Expert Level

(function(){
    var score = 0;
    var q1,q2,q3;
    function Questions(question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }
    Questions.prototype.displayQuestion = function() {
        console.log(this.question);
        for (var i = 0; i < this.answers.length; i++) {
            console.log(i + ': ' + this.answers[i]);
        }
    }
    
    Questions.prototype.checkAnswer = function(ans) {
            if (ans === this.correct){
                score++;
                console.log(`The answer is correct !`);
                console.log(`Your score is ${score}`);
                console.log(`----------------------`);
            }
            else{
                console.log(`The answer is wrong ! Try again !`);
                console.log(`Your score is ${score}`);
                console.log(`----------------------`);
            }
    }
    
    
    
    
    
    q1 = new Questions(`What's the result of 3*3 ?`,
                        ['1','6','9','15'],
                        2);
    q2 = new Questions(`What progamming language are you using right now ?`,
                        ['Javascript','Python','php'],
                        0);
    q3 = new Questions(`What's the US capital ?`,
                        ['DC','Paris','Roma'],
                        0);
    
    var allQuestions = [q1, q2, q3];
    
  function showQuestion() {
     var n = Math.floor(Math.random() * allQuestions.length);
       
    allQuestions[n].displayQuestion();
    
    var answer = prompt ('Please select the correct answer !');

        if (answer !== 'exit') {
        allQuestions[n].checkAnswer(parseInt(answer));
        showQuestion();     
        }

     
    };
    
      showQuestion();  

})();