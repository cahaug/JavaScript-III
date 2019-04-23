/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Implicit Binding
* 2. Explicit Binding
* 3. New Binding
* 4. Window Binding
*
* write out a code example of each explanation above
*/

// Principle 1
    console.log("Principle 1 - Window Binding");
// code example for Window Binding

// Principle 2
    console.log("Principle 2 - Implicit Binding");
    var me = {
        name:'Cale',
        age:22,
        sayName: function (){
            console.log(this.name);
        }
    }
    console.log(me.sayName());

    // in this case this is binding to me, the object to the left of the dot when the name of the function is being called
// code example for Implicit Binding

// Principle 3

console.log("Principle 3 - New Binding");

// code example for New Binding

// Principle 4

    console.log("Principle 4 - Explicit Binding");
    let sayName = function (lang1, lang2, lang3){
        console.log(`My name is ${this.name} and I know ${lang1}, ${lang2}, and ${lang3}`);
    }
    let stacey = {
        name: 'Stacey',
        age:34
    }
    let languages = ['Javascript', 'HTML', 'CSS'];
    console.log(sayName.call(stacey));
    console.log(sayName.call(stacey, languages[0], languages[1], languages[2]));
    console.log(sayName.apply(stacey, languages));
    
    //in this case, using call we are telling the computer explicitly that this is Stacey.
// code example for Explicit Binding