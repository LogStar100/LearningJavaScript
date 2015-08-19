// Here is my force = mass * acceleration calculator!

var theStart = prompt("Welcome to my F=MA calculator! What would you like to find? Type 'F,' 'M,' or 'A.'")

if (theStart === "F") {
    var mass = prompt("What is the mass?")
    var acceleration = prompt("What is the acceleration?")
    var force = mass * acceleration
    alert("The force is equal to" + " " + force + ".")
}

if (theStart === "M") {
    var force = prompt("What is the force?")
    var acceleration = prompt("What is the acceleration?")
    var mass = force / acceleration
    alert("The mass is equal to" + " " + mass + ".")
}

if (theStart === "A") {
    var force = prompt("What is the force?")
    var mass = prompt("What is the mass?")
    var acceleration = force / mass
    alert("The acceleration is equal to" + " " + acceleration + ".")
}

// Idea from https://www.reddit.com/r/dailyprogrammer/comments/pjbj8/easy_challenge_2/
