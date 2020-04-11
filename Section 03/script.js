///////////////////////////////////////
// Lecture: Hoisting
/*
// Functions 
calculateAge(1994);
function calculateAge(year){
    console.log(2020-year);
}

        // retirement(1994);
var retirement = function(year){
    console.log(65- (2020-year));
}
// Variables

console.log(age);
var age = 25;
console.log(age);

function foo(){
    console.log(age);
    var age = 65;
    console.log(age);
}
 foo();



///////////////////////////////////////
// Lecture: Scoping

var a = 'Hello ! ';
first();
function first(){
    var b = 'Hi ! ';
    second();
    function second(){
        var c= 'Hey ! ';
        console.log( a + b + c );
    }
}


*/





// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();
function first() {
    var b = 'Hi!';
    second();
    function second() {
        var c = 'Hey!';
        third()
    }
}
function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/



///////////////////////////////////////
// Lecture: The this keyword
/*
calculateAge(1994);

function calculateAge(year){
    console.log(2020-year);
    console.log(this);
}
*/

var john = {
    fullName:'John Smith',
    yearOfBirth : 1989,
    calculateAge : function(){
        console.log(this);
        console.log(2020-this.yearOfBirth);
    }
}
john.calculateAge();

var mike = {
    fullName : 'Mike Miller',
    yearOfBirth : 1984
}

mike.calculateAge = john.calculateAge;
mike.calculateAge();




