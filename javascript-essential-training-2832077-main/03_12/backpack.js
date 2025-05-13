
/*
Creating Classes:

Class Declaration : class Name {}
Class Expression: const Name = class {}
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
}