/**
 * Use the global Date() object to transform dates.
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
 */

import Backpack from "./Backpack.js";

const everydayPack = new Backpack(
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false,
  "December 5, 2018 15:00:00 PST"
);

console.log("The everydayPack object:", everydayPack);
console.log("Date acquired:", everydayPack.dateAcquired);


// console.log("Date:", everydayPack.dateAcquired);
const event = new Date (everydayPack.dateAcquired);
// console.log("Date:", event);
console.log(event.toDateString());
// everydayPack.dateAcquired = toString();
// everydayPack.dateAcquired = toDateString();

console.log("Days since aquired:", everydayPack.backpackAge());
