function a(){
    console.log('this a :', this.result);
}


const b = () => {
    console.log('this a :', this.result);
}

a();

const c = {
    result: 'c',
}
console.log('type of a ');
console.log(typeof a);
const bindedA = a.bind(c);
console.log('bindedA result')
bindedA();
console.log('type of b ');
console.log(typeof b);
// https://stackoverflow.com/questions/33308121/can-you-bind-this-in-an-arrow-function
const bindedB = b.bind(c);
console.log('bindedB result')
bindedB();


