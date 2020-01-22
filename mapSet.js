const map = new Map(
    [['a',1]]
);

// console.log(map);
// console.log(map.get('a'));
map.set('b',2).set(NaN, 'Number')
// console.log(map.get(NaN));
// map.clear();

// console.log(map.has(42));

 map.delete('b');

//  console.log(map.size);
 

// console.log(map.keys());
// console.log(map.entries()); // keys+values
// console.log(map.values());




//SET:
// unick values!!!
const set = new Set([1,1,2,3,5,8,13,5,8]);

console.log(set);
set.size();
set.add();
set.clear();
set.delete();

//set.keys = set.values !!!
set.entries();


