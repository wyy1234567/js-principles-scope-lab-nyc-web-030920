// Write your solution in this file!
var customerName = 'bob';
var bestCustomer;
const leastFavoriteCustomer = " ";

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

function setBestCustomer() {
    bestCustomer = 'not bob';
}

function overwriteBestCustomer() {
    bestCustomer = "maybe bob";
    return bestCustomer;
}

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'bob'
    return leastFavoriteCustomer;
}