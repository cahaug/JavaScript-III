console.log("=====This.js=====")

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

    const sayAge = function(){
        console.log(this.age)
    }
    const me1 = {
        age:25
    }
    sayAge();
    window.age = 35;
    sayAge();
    // you generally don't want to bind your this keyword to the window object but if you have to you can set it.  Unless you're in strict mode, which will throw an error/return undefined.
// code example for Window Binding

// Principle 2

    console.log("Principle 2 - Implicit Binding");

    const me = {
        name:'Cale',
        age:22,
        sayName: function (){
            console.log(this.name);
        }
    }
    me.sayName();

    // in this case this is binding to me, the object to the left of the dot when the name of the function is being called
// code example for Implicit Binding

// Principle 3

    console.log("Principle 3 - New Binding");

    const Animal = function (color, name, type){
        this.color=color,
        this.name=name,
        this.type=type
    }
    const zebra = new Animal ('black and white', 'Zachary', 'Zebra');
    console.log(zebra);

    // this is binded to the new object being constructed when the function is invoked with the new keyword
// code example for New Binding

// Principle 4

    console.log("Principle 4 - Explicit Binding");

    const sayName = function (lang1, lang2, lang3){
        console.log(`My name is ${this.name} and I know ${lang1}, ${lang2}, and ${lang3}`);
    }
    const stacey = {
        name: 'Stacey',
        age:34
    }
    const languages = ['Javascript', 'HTML', 'CSS'];
    sayName.call(stacey);
    sayName.call(stacey, languages[0], languages[1], languages[2]);
    sayName.apply(stacey, languages);
    sayName.bind(stacey, languages[0], languages[1], languages[2]);

    
    //in this case, using call we are telling the computer explicitly that this is Stacey, using call, apply and bind.
// code example for Explicit Binding