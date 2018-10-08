/* JavaScript code here */
//task1
console.log("External");
//task2

function sumArray(arr)
{
    var sum = 0;
    
    arr.forEach(function(value, index)
    {
        sum = sum + value;
    });
    return sum;
}

console.log(sumArray([1,2,3,4,5,6]));
//task3

function checkEmail(emailString){
    var emailFormat=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var match = emailFormat.test(emailString);
    return match; 
}
console.log(checkEmail("john@smith.com"));
console.log(checkEmail("johnsmith.com"));
//task4

var library = [ 
   {
       author: 'Bill Gates',
       title: 'The Road Ahead',
       readingStatus: true
   },
   {
       author: 'Steve Jobs',
       title: 'Walter Isaacson',
       readingStatus: true
   },
   {
       author: 'Suzanne Collins',
       title:  'Mockingjay: The Final Book of The Hunger Games', 
       readingStatus: false
   }];
function getReadingstatus(index){
    return library[index].readingStatus;
}
console.log(getReadingstatus(1));
console.log(getReadingstatus(0));
console.log(getReadingstatus(2));
//Task 5

var cart = [ 
   {
       name: 'Shoes',
       price: 560,
       quantity: 4
   },
   {
       name: 'Regular Tees',
       price: 455.50,
       quantity: 6
   },
   {
       name: 'Socks',
       price: 65.99,
       quantity: 2
   }];
//5a
function addItem(){
    cart.push(newItem);
    console.log(cart);
   }
var newItem={name:"Watch", price: 64, quantity: 1}
    addItem(newItem);
//5b

function sortCart(){
  //add code
  var len = cart.length;
  var temp;
  for(var i = 0; i <= len - 1; ++i) {
    for (var j = 0; j <= len - 1; ++j) {
      if(cart[i].name < cart[j].name) {
        temp = cart[i];
        cart[i] = cart[j];
       cart[j] = temp;
      }
    }
  }
  return cart;
}

console.log(sortCart());
//5c

function findByName(givenName){
  for (var i = 0; i < cart.length; i++) {
    if(cart[i].name == givenName){
      console.log("Name: "+cart[i].name + "Price: " + cart[i].price + "Quantity: "+cart[i].quantity);
    }
  }
}
//5d

function totalBill(){
  var totalAmount=0;
  for( var i =0; i < cart.length; i++){
    totalAmount = totalAmount + cart[i].quantity*cart[i].price;

  }
  return totalAmount;
  }
console.log(totalBill());
