// cart item increment decrement

// initialize quantity variable
var qnty = 0;

// Function to decrement quantity

function decrement() {
  // check if quantity is greater than 0

  if (qnty > 0) {
    // Decrement quantity
    qnty--;

    // call function to update quantity display
    updatedQnty();
  }
}

// function to increment quantity
function increment() {

  // increment quantity
  qnty++;

  // call function to update quantity display
  updatedQnty();
}

// function to update quantity display
function updatedQnty() {
  
  // update quantity display element with current quantity value
  document.getElementById('cart-qnt').value = qnty;
}
