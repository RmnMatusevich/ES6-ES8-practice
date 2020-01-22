const validator = {
    get(target, prop){
        return prop in target?target[prop]:`${prop} is not in the object`
    },
    set(target, prop, value){
        if (value.length > 2) {
            Reflect.set(target, prop, value)
        }else {
            console.log('Length must be more than 2');
            
        }
    }
};

const form = {
    login: 'Tester',
    password: '1234554321'
}

const formProxy = new Proxy(form, validator);
// console.log(formProxy.login);
// console.log(formProxy.password);

// console.log(formProxy['username']);

formProxy.password = '23';

console.log
(formProxy.password)

function log(message) {
    console.log('[Log]: '+ message);
    
}

const proxy = new Proxy(log, {
    apply(target, thisArg, argArray){
        if (argArray.length ===1) {
            Reflect.apply(target, thisArg, argArray)
        }else {
            console.log('Arguments amount not equals');
            
        }
    }
});

proxy('BDGBDFV');
proxy();