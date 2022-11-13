///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

const summedPrice = cart.reduce((acc, curr)=> acc + curr.price, 0)
console.log(summedPrice);

console.log('---------------------------------------------------------');

//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE

const calcFinalPrice = (cartTotal, couponValue, tax) => {
    return cartTotal + (cartTotal * tax) - couponValue;
}

console.log(calcFinalPrice(20, 10, .10));

console.log('---------------------------------------------------------');

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE

    My customer object will have the following properties: name, phoneNumber, email, address, order, quantity, totalAmount, paymentType, and cardNumber. A restaurant would need this information to know who made the order and all the relevant information for the customer to pay for their order and have the food delivered to the correct address. The phoneNumber, quantity, totalAmount, and cardNumber are all number data types because they are the properties containing only numbers. The totalAmount property could also be classified as a floating point number due to the presence of a decimal. The name, email, address, and 'order' properties are all string data types because they are contain in quote marks and are a mix of letter characters and numbers when applicable. Lastly, paymentType is an array because the customer will have the choice to choose how they will pay for their order and will put in a card number if the customer chooses to pay with a debit or credit card.
*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE

let customer = {
    name: 'Noé Arch',
    phoneNumber: 1234567890,
    email: 'noearch@gmail.com',
    address:'987 French Street, French City, 47947',
    order: 'Large Cheese Pizza, Extra Sauce, Sprite',
    quantity: 1,
    totalAmount: 20.78,
    paymentType: ['cash', 'credit card', 'debit card'],
    cardNumber: 0987656321
}

console.log(customer);