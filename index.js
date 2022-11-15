// introduction to the console
console.log(
  "hello world"
);

//variables

const myName = "Tom";

console.log(myName);

const myAge = 20;

console.log(
  "my age is " + myAge
);

//Functions

const loggingFunction = () => {
  console.log(
    "this is logging to the console"
  );
};

loggingFunction();

const functionWithParameter = (
  argument
) => {
  console.log(argument);
};

functionWithParameter(
  "now this is logging to the console"
);

console.log(
  Math.random()
);

console.log(
  Math.random() * 50
);

console.log(
  Math.floor(
    Math.random() * 50
  )
);

// intro to dom manipulation

document.getElementById(
  "bonusBall"
).textContent = "49";

// we can change these using maths.random

function myFunction() {
  document.getElementById(
    "number1"
  ).textContent = Math.floor(
    Math.random() * 50
  );
  document.getElementById(
    "number2"
  ).textContent = Math.floor(
    Math.random() * 50
  );
  document.getElementById(
    "number3"
  ).textContent = Math.floor(
    Math.random() * 50
  );
  document.getElementById(
    "number4"
  ).textContent = Math.floor(
    Math.random() * 50
  );
  document.getElementById(
    "number5"
  ).textContent = Math.floor(
    Math.random() * 50
  );
  document.getElementById(
    "number6"
  ).textContent = Math.floor(
    Math.random() * 50
  );
}
