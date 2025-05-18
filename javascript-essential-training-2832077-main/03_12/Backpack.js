
// Creating Classes:
/*
class declaration : class Name{}
class expression : const Name = class {}

*/

 class Backpack {
    constructor(
        // Defines parameters:
        name,
        volume,
        color,
        pocketNum,
        strapLengthL,
        strapLengthR,
        lidOpen
    ) {
        // Define properties:
        this.name = name;
        this.volume = volume;
        this.color = color;
        this.pocketNum = pocketNum;
        this.strapLength = {
            left: strapLengthL,
            right: strapLengthR,
        };
        this.lidOpen = lidOpen;
    }
    // Add method like normal functions:
    toggleLid(lidStatus) {
        this.lidOpen = lidStatus;
    }
    newStrapLength(lengthLeft, lengthRight) {
        this.strapLength.left = lengthLeft;
        this.strapLength.right = lengthRight;
    }
}


// export default Backpack;


// EXTENDING CLASSES

class HikingBackpack extends Backpack {
    constructor (
        // define propertises
        name,
        volume,
        color,
        pocketNum,
        strapLengthL,
        strapLengthR,
        lidOpen,
        hydrationCapacity
    ) {
        // initialize the parent class properties
        super(name, volume, color, pocketNum, strapLengthL, strapLengthR, lidOpen);
        // new property specific to HikingBacpkack
        this.hydrationCapacity = hydrationCapacity;
    }
}

export default HikingBackpack;

/*
function Backpack (
    name,
    volume,
    color,
    pocketNum,
    strapLengthL,
    strapLengthR,
    lidOpen
) {
    this.name = name;
    this.volume = volume;
    this.color = color;
    this.pocketNum = pocketNum;
    this.strapLength = {
        left: strapLengthL,
        right: strapLengthR,
    };
    this.lidOpen = lidOpen;
    this.toggleLid = function 
    (lidStatus) {
        this.lidOpen = lidStatus;
    };
    this.newStrapLength = function
    (lengthLeft, lengthRight) {
        this.strapLength.left = lengthLeft;
        this.strapLength.right = lengthRight;
    };
}

const everydayPack = new Backpack (
    "Everyday Backpack",
    30,
    "grey",
    15,
    26,
    26,
    false
);

console.log(everydayPack);
console.log(Backpack);

*/