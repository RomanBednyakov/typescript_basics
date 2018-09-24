// // базовые перемнный
// //string
// let str: string = 'strsssing!';
//
// //number
// let num: number = 10;
//
// //booleam
// let isTrue: boolean = true;
// let isFalse: boolean = false;
//
// //other
// let unknow: string | number = '1';
// unknow = 1;
// unknow = 'sd';
// let newunknow: any = '1';
// newunknow = 1;
// newunknow = true;
//
// // базовые перемнный
//
// //Array
// let numArray: number[] = [1, 1, 2];
// let numArray2: Array<number> = [1, 1, 2];
//
// let strArray: string[] = ['sda', 'ad', 'sad'];
// let strArray2: Array<string> = ['sda', 'ad', 'sad'];
//
// let booleArray: boolean[] = [true, false];
// let booleArray2: Array<boolean> = [true, false];
// // tuples
// let array: [number, number, string] = [1, 2, '3'];
// let array2: [boolean, number, string] = [true, 2, '3'];
//
// //Функции
//
// function getMyAge(age: number, prefix: string = 'wfm-'): string {
//     return prefix + age
// }
//
// function consoleLog(str: string): void {
//     console.log('@', str);
// }
//
// // consoleLog('saddsa');
// // console.log('@', getMyAge(40, 'wfm'));
//
// let mysum: (a: number, b: number) => number;
//
// function sum(num1: number, num2: number) {
//     return num1 + num2;
// }
//
// mysum = sum;
// // console.log('@', mysum(5, 10));
// // console.log('@', sum(5, 10));
//
// // обьект
// type User = { name: string, age: number, getJobs: () => string[], jobs: string[], logName?: () => void };
//
// let user: User = {
//     name: 'dd',
//     age: 23,
//     jobs: ['a', 'b'],
//     getJobs(): string[] {
//         return this.jobs
//     },
//     logName(): void {
//         console.log('@', this.name);
//     }
// };
//
// let user2: User = {
//     name: 'mass',
//     age: 30,
//     jobs: ['2'],
//     getJobs(): string[] {
//         return this.jobs
//     }
// };