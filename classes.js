class Person {
    type = 'human';
    constructor(name) {
        this.name = name;
    }

    greet () {
        console.log(`${this.name} say Hello!`)
    }
}

const Max = new Person('Max');

// console.log(Max)
// Max.greet();
// console.log(Max.type);

// console.log(Max.__proto__ === Person.prototype);


class Programmer extends Person {
    constructor(name, job) {
        super(name);
        this.job = job;
    }
}

const Frontend = new Programmer('Alex', 'frontend developer');

// console.log(Frontend);


//Static:

class Util {
    static average(...args){
        return args.reduce((acc, i)=> acc+=i, 0)/args.length
    }
}


const res  = Util.average(1,2,3,4,5,6,7,8,9);

console.log(res);

const util = new Util();
// console.log(util.average(1,2,3,4,5,6,7,8,9,10))
