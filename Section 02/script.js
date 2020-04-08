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