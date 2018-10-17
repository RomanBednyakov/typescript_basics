type User = { name: string, age: number };
const user: User = {
    name: 'WFM',
    age: 20
};

function logUser(user: User): void {
    console.log('@', user.name + ' ' + user.age);
}

logUser(user);

let variable: any;
variable = 1;
variable = '22';

//enum
enum Job {
    FrontEnd,
    Backend = 50,
    Desinger
}

const job: Job = Job.Backend;
console.log('@', job);

const job2: Job = Job.Desinger;
console.log('@', job2);

// never

function throwNewError(error: string): never {
    throw new Error(error);
}

//null
let newWar: null;
newWar = null;
//
// let myNuber: number | null = 20;
// myNuber = null;
//
// class
// class User {
//     public name: string;// public
//     private isTeacher: boolean;
//     protected age: number = 30;
//
//     constructor(name: string, public job: string) {
//         this.name = name;
//     }
//
//     public getAge(): number {
//         return this.age;
//     }
//     public setTitle(title: boolean) {
//         this.isTeacher = title;
//     }
// }
//
// const user = new User('wfm', 'frontend');
//  user.setTitle(false);
//
// class User {
//     private isTeacher: boolean;
//     protected age: number = 30;
//
//     constructor(public name: string, public job: string) {
//     }
//
//     public getAge(): number {
//         return this.age;
    }
}

class WMF extends User {
    name: string = 'WFM';

    constructor(job: string) {
        super('WFM', job);
        this.age = 100;
    }
}

const user = new User('wfm', 'frontend');
const wfm = new WMF('frontend');

abstract class Car {
    model: string;
    year: number = 2010;

    abstract logInfo(info: string): void;

    getCarYear(): number {
        return this.year;
    }
}
class Mers extends Car{
    logInfo(info: string): void {
        console.log('@', info);
    }

}
const car = new Mers();

Интерфейс
interface ILenght {
    length: number;
}

function getLenght(varieble: ILenght): void {
    console.log('getLenght', varieble.length);
}

getLenght([1, 2, 3, 4]);

const box = {
    name: 'WFM',
    length: 20,
};

getLenght(box);

interface IUser {
    name: string;
    age?: number;

    logInfo(info: string): void;
}

interface IgetYear {
    getYear(): number;
}

// const user: IUser = {
//     name: 'WFM',
//     age: 20,
//     logInfo(info) {
//         console.log('@', info);
//     }
// };
class User implements IUser, IgetYear {
    getYear(): number {
        return 200
    }
    name: string = 'sda';
    logInfo(info: string): void {
        console.log('@', info);
    };
}

дженерики
function getter(data: any) {
    return data;
}

console.log('@',getter('sa'));
console.log('@',getter(100));

function genericGetter<T>(data: T): T {
    return data
}
console.log('@',genericGetter<string>('sa').length);
console.log('@',genericGetter<number>(100).toFixed(2));

decoratert
function logger(constrFn: Function) {
    console.log('@', constrFn);
}

function shouldLog(flag: boolean): any {
    return flag ? logger : null;
}

@shouldLog(true)
class User {
    constructor(public name: string, public  age: number) {
        console.log('@i am new user');
    }
}


function addShowAbility(constructorFn: Function) {
    constructorFn.prototype.showHtml = function () {
        const pre = document.createElement('pre');
        pre.innerText = JSON.stringify(this);
        document.body.appendChild(pre);
    }
}

@addShowAbility
class User {
    constructor(public name: string, public  age: number, public job: string) {
    }
}

let user = new User('wFM', 23, 'frontEnd');
(<any>user).showHtml();
