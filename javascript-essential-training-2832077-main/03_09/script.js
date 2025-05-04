// Create a Backpack Object

const keyboard = {
    name: "Everyday coding",
    volumne: 40,
    key: 90,
    shift: {
        left: 1,
        right: 0,
    },
    lidOPen: false,
    toggleLid: function(lidStatus) {
        this.lidOpen = lidStatus;
    }, 
    newShift: function (lengthLeft, lengthRight) {
        this.shift.left = lengthLeft;
        this.shift.right = lengthRight;
    }
};

console.log("the Keyboard object:", keyboard);
console.log("the key value:", keyboard.key);
console.log("the shift L value:", keyboard.shift.left);

var dom = "key";
console.log("the key value:", keyboard[dom]); //the correct practice. 03.06
console.log("the key value:", dom);

console.log("Left before:", keyboard.shift.left);
console.log("Right before:", keyboard.shift.right);
keyboard.newShift(10,15);
console.log("___________________");
console.log("Left after:", keyboard.shift.left);
console.log("right after:", keyboard.shift.right);