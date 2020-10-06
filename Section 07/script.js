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

*/
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