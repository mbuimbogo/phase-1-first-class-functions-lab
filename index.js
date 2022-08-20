// Code your solution in this file!
function arrayOfDrivers () {
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
return drivers;
};

function returnFirstTwoDrivers(){
arrayOfDrivers();
const newDrivers = arrayOfDrivers().slice(0,2);
return newDrivers;
}
console.log (returnFirstTwoDrivers());

function returnLastTwoDrivers (){
    arrayOfDrivers()
    const lastDrivers = arrayOfDrivers().slice(2,4);
    return lastDrivers;
}
console.log(returnLastTwoDrivers())

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]
    console.log(selectingDrivers())

function createFareMultiplier (number) {
    return function (value) {
       const fareMultiplier = number*value;
       return fareMultiplier;
    }

}
console.log(createFareMultiplier(5))

function fareDoubler (amount) {
 return amount*2
}

function fareTripler (amount1) {
    return amount1*3
}

// const selectDifferentDrivers = function(drivers, returnDrivers){
//     return returnDrivers(drivers)
// }
function selectDifferentDrivers(driversArray, func) {
    return func(driversArray)

}