/*
// variables and datatypes.

        console.log("Hello World !!!");

        var firstName = 'John';
        var age = 28;
        var job = 'Teacher';
        console.log(firstName+age+job);


    // variables mutation.

    console.log( firstName +' '+ age +' '+ job );

    age = 'twenty eight';
    job = 'driver';
    isMarried = false;

        alert (firstName + ' is a ' + age + ' years old ' + job + ' Is he married ? ' + isMarried);

        var lastName = prompt('What is his last name ?');

        console.log(firstName + ' ' + lastName); 
    


 // Math operators

    var now , yearJohn , yearMark, ageJohn , ageMark;
    now = 2020;
    ageJohn = 28;
    ageMark = 33 ;
    yearJohn = now - ageJohn;
    yearMark = now - ageMark;

    console.log(yearMark+ ' ' + yearJohn);
    console.log(now+2);
    console.log(now*2);
    console.log(now/10);

 // Logic operators 

    var johnIsOlder = ageJohn > ageMark;
    console.log(johnIsOlder);

 //typeof operator 

    console.log(typeof johnIsOlder );
    console.log(typeof ageMark );
    console.log(typeof age );


// Operator precedence    
        var now, fullAge,yearJohn;
        now = 2020;
        fullAge = 18;
        yearJohn = 1989;

        var isFullAge = now - yearJohn >= fullAge ;

        console.log(isFullAge);

        var ageJohn = now - yearJohn;
        var ageMark = 35;
        var average = (ageJohn + ageMark) / 2

        console.log (average);



// Challenge number one.
        var massMark, massJohn, heightMark, heightJohn, bmiJohn, bmiMark;

        massJohn = 65;
        massMark = 80;
        heightJohn = 1.70;
        heightMark = 1.90;

        bmiJohn = massJohn / (heightJohn * heightJohn);
        bmiMark = massMark / (heightMark * heightMark);

        console.log(bmiJohn,bmiMark);

        var markHeigherJohn = bmiMark > bmiJohn ;

        console.log ("Is Mark BMI higher than John's ?" + markHeigherJohn);


//if/else statement

        var firstName = 'John';
        var civilStatus = 'single';

        if (civilStatus === 'married'){
            console.log(firstName + ' is married.');
        } else{
            console.log('Hopefully '+firstName+ ' will get married soon.' );
        }


        var massMark, massJohn, heightMark, heightJohn, bmiJohn, bmiMark;

        massJohn = 65;
        massMark = 80;
        heightJohn = 1.70;
        heightMark = 1.90;

        bmiJohn = massJohn / (heightJohn * heightJohn);
        bmiMark = massMark / (heightMark * heightMark);

        console.log(bmiJohn,bmiMark);

        var markHeigherJohn = bmiMark > bmiJohn ;

        if (markHeigherJohn){
            console.log("Mark's BMI is higher than John's");
        }else {
            console.log("John's BMI is higher than Mark's.")
        }


*/

/*

var firstName = 'John';
var age = 10;
var job = 'cop';

if ( age < 13 ){
    console.log(firstName+ " is a boy !");
}else if( age >= 13 && age < 20 ){
    console.log(firstName + ' is a teenager !');
}else if (age >= 20 && age < 30){
    console.log(firstName + ' is a young man !');
}else{
    console.log(firstName + ' is a man !');
}


// the ternary operator

var drink = age >= 18 ? 'beer':'juice';
console.log(drink);

// switch statements

switch (job) {
    case 'teacher':
        console.log(firstName + ' teaches students how to code !');
        break;
    case 'driver':
            console.log(firstName + ' is a uber driver !');
            break;
    case 'designer':
                console.log(firstName + ' designes websites !');
            break;
    default:
        console.log(firstName + ' does something else !')
        break;
}

age = 25;
switch (true) {
    case age < 13:
        console.log(firstName+ " is a boy !");
        break;
    case age >= 13 && age < 20:
        console.log(firstName + ' is a teenager !');
        break;
    case age >= 20 && age < 30:
        console.log(firstName + ' is a young man !');
        break;
    default:
        console.log(firstName + ' is a man !');
        break;
}



*/

/*
var teamMike = (89 + 120 + 103)/3;
var teamJohn = (116 + 94 + 123)/3;
var teamMary = (97 + 134 + 105)/3;

if(teamJohn > teamMike){
    console.log('Team John is the winner with an average of '+ teamJohn + ' points');
}else if (teamMike === teamJohn){
    console.log("It's tie !");
}else{
    console.log('Team Mike is the winner with an average of '+ teamMike + ' points');
}

teamMike = (101 + 120 + 103)/3;
teamJohn = (100 + 94 + 123)/3;
if(teamJohn > teamMike){
    console.log('Team John is the winner with an average of '+ teamJohn + ' points');
}else if (teamMike === teamJohn){
    console.log("It's tie !");
}else{
    console.log('Team Mike is the winner with an average of '+ teamMike + ' points');
}

teamMike = (92 + 120 + 124)/3;
teamJohn = (116 + 94 + 123)/3;
teamMary = (116 + 94 + 123)/3;

switch (true) {
    case (teamMary>teamJohn) && (teamMary>teamMike) :
        console.log('Team Mary is the winner with an average of '+ teamMary + ' points');
        break;
    case (teamMike>teamMary) && (teamMike>teamJohn):
        console.log('Team Mike is the winner with an average of '+ teamMike + ' points');
        break;
    case(teamJohn>teamMary) && (teamJohn>teamMike):
         console.log('Team John is the winner with an average of '+ teamJohn + ' points');    
        break
    default:
        console.log("It's tie !");
        break;
}
*/
/*
// Functions

function calculateAge (birthYear){
    return 2020-birthYear;
}
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);
var ageJohn = calculateAge(1990);
console.log(ageJohn, ageMike, ageJane);

function yearsUntilRetirement(year, firstName) {
    var age = calculateAge(year);
    var retirement = 65 - age;
    if(retirement>0){
    console.log(firstName + ' will retire in '+retirement+' years.');
    }else{
        retirement *= -1;
        console.log(firstName+ ' retired '+retirement+' years ago.');
    }
}

yearsUntilRetirement(1970, 'Mary');
yearsUntilRetirement(1940, 'Mark');


// Functions statements and expressions 
var whatDoYouDo = function(job, firstName) {
    switch (job) {
        case 'teacher':
            return firstName + ' teaches kid how to code.';
        case 'driver':
            return firstName + ' drives a cab in Lisbon.';
        case 'designer':
              return firstName + ' designs beautiful websites.';       
        default:
            return firstName + ' does something else.';
    }
}

console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('driver', 'Mike'));
console.log(whatDoYouDo('designer', 'Mark'));
console.log(whatDoYouDo('Lawyer', 'Mary'));
*/
/*
// Arrays 

var names = ['John','Mike','Jane'];
var year = new Array(1990, 1958, 1969);

console.log(names[2]);
console.log(names.length);


names[1]= 'Ben';
names[names.length] = 'Mary';
console.log(names);

var john = ['John', 'Smith', 1990, 'teacher',false];

john.push('designer');
john.push('blue');

john.unshift('Mr.');
console.log(john);

john.pop();
john.shift();
console.log(john);

var isDesigner = john.indexOf('designer') ===-1 ? 'John is Not a Designer !' : 'John is a Designer !';
console.log(isDesigner);



// Challenge 03 

var calculateTip = function (amountBil){
    var tip;

    if (amountBil<50) {
        tip = amountBil * 0.2;

    } else if (amountBil>=50 && amountBil<=200){
        tip = amountBil*0.15;

    }else{
        tip = amountBil*0.1;
    }
    return tip;
}

var tipArray = [calculateTip(124), calculateTip(48), calculateTip(268)];
var finalArray = [tipArray[0]+124, tipArray[1]+48, tipArray[2]+268];

console.log(tipArray);
console.log(finalArray);



var john = {
    firstName : 'John',
    lastName : 'Smith',
    birthYear : 1990,
    family : ['Jane', 'Mark', 'Bob', 'Kate'],
    job : 'teacher',
    isMarried : false
};

console.log(john);

john.isMarried = true;
john.job = 'designer';

console.log(john);


var jane = new Object();
jane.firstName = 'Jane';
jane.birthYear = '1969';
jane.job = 'teacher';

console.log(jane);



// object methodes 
var john = {
    firstName : 'John',
    lastName : 'Smith',
    birthYear : 1994,
    family : ['Jane', 'Mark', 'Bob', 'Kate'],
    job : 'teacher',
    isMarried : false,
    calcAge: function(){
       this.age = 2020- this.birthYear; 
    }
};
john.calcAge();
console.log(john);


// coding challenge 4

var john = {
        fullName : 'John Smith',
        mass : 90,
        height : 1.90,
        calcBMI : function(){
                this.BMI = this.mass / (this.height * this.height);
                return this.BMI;
        }
}

var mark = {
    fullName : 'Mark Smith',
    mass : 90,
    height : 1.80,
    calcBMI : function(){
        this.BMI = this.mass / (this.height * this.height);
        return this.BMI;
    }
}




if (john.calcBMI() > mark.calcBMI()) {
    console.log (john.fullName + ` has a heigher BMI, with `+john.BMI+` points, ` + mark.fullName +` 's BMI is `+mark.BMI+` points`);
} else if(mark.BMI>john.BMI){
    console.log (mark.fullName + ` has a heigher BMI, with `+mark.BMI+` points, ` + john.fullName +` 's BMI is `+john.BMI+` points`);
}else{
    console.log('They have the same BMI');
}


// Loops and iterations

for (var i =0 ; i < 10; i++) {
    console.log(i+1);
}

var john = ['John', 'Smith', 1990, 'teacher',false];

for (var i=0 ; i < john.length ; i++){
    console.log(john[i]);
}
var i =0; 
while ( i< john.length ){
    console.log(john[i]);
    i++;
}
*/

/*
var john = ['John', 'Smith', 1990, 'teacher',false];

for (var i = 0; i< john.length; i++){
    if(typeof john[i] !== 'string') continue;
    console.log(john[i]);
}


for (var i = 0; i< john.length; i++){
    if(typeof john[i] !== 'string') break;
    console.log(john[i]);
}


for (var i=john.length-1 ; i >= 0 ; i--){
    console.log(john[i]);
}

*/


// Challenge 05


var john = {
    amountBill : [124, 48, 268, 180, 42],
    amoutTip : [],
    amountFinal : [],
    calcTip : function(){
        for (var i = 0; i<this.amountBill.length;i++){
                if(this.amountBill[i]<50){
                    this.amoutTip[this.amoutTip.length] = this.amountBill[i]*0.2;
                }else if (this.amountBill[i]>=200){
                    this.amoutTip[this.amoutTip.length] = this.amountBill[i]*0.1;
                }else{
                    this.amoutTip[this.amoutTip.length] = this.amountBill[i]*0.15;
                }
        } 
    
    },
    calcFinal : function(){
        for (i = 0; i<this.amountBill.length; i++){
            this.amountFinal[i] = this.amountBill[i] + this.amoutTip[i];
        }
    }
}
john.calcTip();
john.calcFinal();
console.log (john);


var mark = {
    amountBill : [77, 375, 110, 45],
    amoutTip : [],
    amountFinal : [],
    calcTip : function(){
        for (var i = 0; i<this.amountBill.length;i++){
            if(this.amountBill[i]<100){
                this.amoutTip[this.amoutTip.length] = this.amountBill[i]*0.2;
            }else if (this.amountBill[i]>=300){
                this.amoutTip[this.amoutTip.length] = this.amountBill[i]*0.25;
            }else{
                this.amoutTip[this.amoutTip.length] = this.amountBill[i]*0.1;
            }
    } 
    },
    calcFinal : function(){
        for (i = 0; i<this.amountBill.length; i++){
            this.amountFinal[i] = this.amountBill[i] + this.amoutTip[i];
        }
    }
}

mark.calcTip();
mark.calcFinal();
console.log (mark);

var averageTip = function(arr){
    var sum = 0;
    for (var i = 0; i< arr.length; i++){
        sum += arr[i];
    }
    return sum/arr.length;
}

var averageJohn = averageTip(john.amoutTip);
var averageMark = averageTip(mark.amoutTip);

console.log(`The average of John's tips is ${averageJohn}, and Mark's Average is ${averageMark}`);

if (averageJohn === averageMark) {
    console.log('They have the same average of tips');
}else if(averageMark>averageJohn){
    console.log('Mark tips more than John.');

}else{
    console.log ('John tips more than Mark.');
}