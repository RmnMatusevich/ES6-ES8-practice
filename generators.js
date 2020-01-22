const arr = [1,2,3,4];

const str = 'True and fire';

// console.log(arr[Symbol.iterator]);
// console.log(str[Symbol.iterator]);

// const iter = arr[Symbol.iterator]();
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next()); //true 

// for (let item of arr) {
//     console.log(item);
// }

// const counties = {
//     values: ['ru','kz','by','eng'],
//     [Symbol.iterator]() {
//         let i =0;
//         return {
//             next: () => {
//                 const value = this.values[i]
//                 i++;
//                  return {
//                      done: i > this.values.length,
//                      value
//                  }
//             }
//         }
//     }
// }

// for (let item of counties) {
//     console.log(item)
// }

//Generators:


function *gen (num=4) {
    for (let i = 0; i<num; i++) {
        try {
        yield i
        }catch(e){
            console.log('Error: ' +e)
        }
    }
}


const iter = gen(3);
console.log(iter.next());
console.log(iter.throw('ERRRRROOOORR!!!'));
console.log(iter.next());
 console.log(iter.next());

//  for (let i of gen(2)) {
//       console.log(i);
     
     
// }