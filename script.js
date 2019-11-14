
// get name
var name = prompt('Please enter your first name');
console.log('First Name. ' + name);
document.getElementById('firstname').innerHTML = 'First Name: ' + name;

// get surmane
var lastName = prompt('Please enter your last name');
console.log('Last Name: ' + lastName);
document.getElementById('lastname').innerHTML = 'Last Name: ' + lastName;

// get age
var custyear = parseInt(prompt('Enter your year of birth'));
var year = new Date();
var currentyear = year.getFullYear();
var age = (currentyear - custyear);
console.log('Year of birth: ' + custyear );
console.log('Current year: ' + currentyear);
console.log('Age: ' + age);
document.getElementById('age').innerHTML = 'Age: ' + age ;

// get kms
var km = parseInt( prompt('Please enter the kilometers between your departure and arrival station'));
console.log('distance: ' + km);

// km pirce
var price = 0.21 * km;
console.log('No dicount: ' + price);

// discount
var kid = 18;
var senior = 65;
var discount = 0;

var pricePlusDiscount;
  if ( age < 18 ) {
    discount = .20;
    var discountedPrice = price - ( price * discount);
    console.log('Elegible for 20% discount: ' + discountedPrice);

  }
  else if ( age  > 65 )  {
    discount =  .40;
    var discountedPrice  = price - ( price * discount);
    console.log('Elegible for 40% discount. ' + discountedPrice);
  }
  else {
    discount = 0;
    var discountedPrice = price - ( price * discount);
    console.log('Not qualifying for discount: ' + discountedPrice);
  }

document.getElementById('discount').innerHTML = 'Your ticket will cost ' + discountedPrice  + "€";
