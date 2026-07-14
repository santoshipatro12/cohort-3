
// 'use strict'
// a=10;
// console.log(a)
'use strict'
function test() {
    console.log(this)
}
test()

var obj ={
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    getIntro: function() {
        console.log(this.firstName + ' ' + this.lastName )
    }
}

var obj2 ={
    firstName: 'Johvygin',
    lastName: 'Doe',
    age: 25
}
obj.getIntro.call(obj2)

var arr = [1, 2, 3]
console.log(arr.__proto__.__proto__.__proto__) // ArrayMethods -> ObjectMethods -> null  {object}