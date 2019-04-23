
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