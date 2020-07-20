//index.js
//获取应用实例
const template_id = "PxzeZugcj3NR4gE4IytMro7xEaM_zD2vaVEpsRyGzhw";
const url = "http://192.168.22.67/";
var openid,access_token;
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },

  onLoad: function () {
    // console.log("4");
    // console.log("ssssddtrue".endsWith(true));

    // console.log(Array.isArray("[1,2,3]"));
    // console.log(Array.isArray([1,2,3]));
    // console.log(Array.isArray(new Map()));


//     const array1 = ['a', 'b', 'c'];
// const array2 = ['d', 'e', 'f'];
// const array3 = array1.concat(1,undefined, array2);

// console.log(array3);

// const isBelowThreshold = (currentValue) => currentValue < 40;
// const array1 = [1, 30, 39, 29, 10, 13, 50];
// console.log(array1.every(isBelowThreshold));

// var arr1 = [1, 2, [3, 4]];
// console.log(arr1.flat("0"));

// var arr = [1,2,3,4];
// console.log(arr.includes(3,"-3"));

// var arr = ["a", , "c"];
// var sparseKeys = Object.keys(arr);
// var denseKeys = [...arr.keys()];
// console.log(sparseKeys); // ['0', '2']
// console.log(denseKeys);  // [0, 1, 2]

// const array1 = [1, 'a', new Date('21 Dec 1997 14:12:00 UTC')];
// const localeString = array1.toLocaleString(1, { timeZone: 'UTC' });

// console.log(localeString);

// console.log(Array[Symbol.species]);

// var buffer = new ArrayBuffer(8);
// var dataview = new DataView(buffer);
// console.log(dataview.getBigUint64(0));

// create an ArrayBuffer with a size in bytes
// const buffer = new ArrayBuffer(16);
// Highest possible BigInt value that fits in a signed 64-bit integer
// const max = 2n ** (64n - 1n) - 1n;
// const view = new DataView(buffer);
// // view.setBigInt64(1, max);
// console.log(view.getBigInt64(1));


// const alsoHuge = new BigInt(9007199254740991);
// var buffer = new ArrayBuffer(16);
// var dataview = new DataView(buffer);
// // console.log(dataview.setBigInt64(0,alsoHuge));
// console.log(dataview.getBigInt64(0)); // 3n

// var buffer = new ArrayBuffer(8);
// var dataview = new DataView(buffer);
// console.log(dataview.setFloat32(1, 3));
// console.log(dataview.getFloat32(1)); // 3

// // const unixTimeZero = Date.parse('01 Jan 1970 00:00:00 GMTF');
// const unixTimeZero = Date.parse(0);
// const javaScriptRelease = Date.parse('04 Dec 1995 00:12:00 GMT');
// console.log(unixTimeZero);
// console.log(javaScriptRelease);

// var Xmas = new Date("December 25, 1995 23:15:00");
// var year = Xmas.getYear(); // returns 95
// console.log(year);

// var today = new Date();
// var str = today.toGMTString();  // deprecated! use toUTCString()
// console.log(str);

// const event = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));
// const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
// console.log(event.toLocaleDateString('de-DE', options));
// // expected output: Donnerstag, 20. Dezember 2012
// console.log(event.toLocaleDateString('ar-EG', options));
// // expected output: الخميس، ٢٠ ديسمبر، ٢٠١٢
// console.log(event.toLocaleDateString(undefined, options));

// const event = new Date('August 19, 1975 23:15:30');
// console.log(event.toTimeString());

// const x = Error('I was created using a function call!');
// const y = new Error('I was constructed via the "new" keyword!');
// console.log(x);
// // console.log(x.toSource());
// console.log(x.toString());
// console.log(y);

// // 使用 Set (可迭代对象)
// var s = new Set([1, 2, 3, 2]);
// console.log(Uint8Array.from(s));
// // Uint8Array [ 1, 2, 3 ]
// // 使用字符串
// console.log(Int16Array.from('123'));                      
// // Int16Array [ 1, 2, 3 ]
// // 使用箭头函数对数组元素进行映射
// console.log(Float32Array.from([1, 2, 3], x => x + x));      
// // Float32Array [ 2, 4, 6 ]
// // 生成一个数字序列
// console.log(Uint8Array.from({length: 5}, (v, k) => k));    
// // Uint8Array [ 0, 1, 2, 3, 4 ]

// const maxNumber = Math.pow(10, 1000); // max positive number
// if (maxNumber === Infinity) {
//   console.log('Let\'s call it Infinity!');
//   // expected output: "Let's call it Infinity!"
// }
// console.log(1 / maxNumber);
// // expected output: 0

// const locales1 = ['ban', 'id-u-co-pinyin', 'de-ID'];
// const options1 = { localeMatcher: 'lookup' };
// console.log(Intl.Collator.supportedLocalesOf(locales1, options1));

// const date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));
// // Results below assume UTC timezone - your results may vary
// console.log(new Intl.DateTimeFormat('en-US').format(date));
// // expected output: "12/20/2012"
// console.log(new Intl.DateTimeFormat('en-GB').format(date));
// // expected output: "20/12/2012"
// // Include a fallback language, in this case Indonesian
// console.log(new Intl.DateTimeFormat(['ban', 'id']).format(date));

// const rtf1 = new Intl.RelativeTimeFormat('en', { style: 'narrow' });
// console.log(rtf1.format(3, 'quarter'));
// //expected output: "in 3 qtrs."
// console.log(rtf1.format(-1, 'day'));
// //expected output: "1 day ago"
// const rtf2 = new Intl.RelativeTimeFormat('es', { numeric: 'auto' });
// console.log(rtf2.format(2, 'day'));

// let code = '"\u2028\u2029"';
// console.log(JSON.parse(2));  // 正常
// // eval(code);  // 错.

// function Tree(name) {
//   this.name = name;
// }
// var theTree = new Tree("Redwood");
// console.log( "theTree.constructor is " + theTree.constructor ); 

// const map1 = new Map();
// map1.set('bar', 'baz');
// map1.set(1, 'foo');
// console.log(map1.size);
// // expected output: 2
// map1.clear();
// console.log(map1.size);
// console.log(map1.get("sssdds"));
// console.log(map1.get(undefined));
// console.log(map1.get(NaN));
// console.log(map1.get(1));
// console.log(map1.get(-1));

// var myMap = new Map();
// myMap.set("0", "foo");
// myMap.set(1, "bar");
// myMap.set({}, "baz");
// var mapIter = myMap.keys();
// console.log(mapIter.next().value); // "0"
// console.log(mapIter.next().value); // 1
// console.log(mapIter.next().value); // Object

// console.log(Math.abs('-1'));     // 1
// console.log(Math.abs(-2));       // 2
// console.log(Math.abs(null));     // 0
// console.log(Math.abs("string")); // NaN
// console.log(Math.abs());         // NaN

// console.log(Math.acos(-2));  // NaN
// console.log(Math.acos(-1));  // 3.141592653589793
// console.log(Math.acos(0));   // 1.5707963267948966
// console.log(Math.acos(0.5)); // 1.0471975511965979
// console.log(Math.acos(1));   // 0
// console.log(Math.acos(2));   // NaN
// console.log(Math.acos('2'));   // NaN
// console.log(Math.acos(new Map()));   // NaN

// console.log(Math.atan2(90));

// console.log(Math.ceil(undefined));
// console.log(Math.sign());
// console.log(Math.pow("10", 2));

// console.log(Number.parseFloat("String"));
// console.log(Number.parseFloat("2"));
// console.log(Number.parseFloat("2.2"));
// console.log(Number.parseFloat(2));
// console.log(Number.parseFloat(2.2));

// var number = new Number();
// console.log(number.toPrecision());
// // console.log(number.toSource());
// console.log(number.toString());
//   },

// var obj = {
//   prop: 42
// };
// Object.freeze(obj);
// obj.prop = 33;
// // Throws an error in strict mode
// console.log(obj.prop);

// const entries = new Map([
//   ['foo', 'bar'],
//   ['baz', 42]
// ]);
// const obj = Object.fromEntries(entries);
// console.log(obj);
// // expected output: Object { foo: "bar", baz: 42 }

var o, d;

o = { get foo() { return 17; } };
d = Object.getOwnPropertyDescriptor(o, "foo");
// d {
//   configurable: true,
//   enumerable: true,
//   get: /*the getter function*/,
//   set: undefined
// }

o = { bar: 42 };
d = Object.getOwnPropertyDescriptor(o, "bar");
// d {
//   configurable: true,
//   enumerable: true,
//   value: 42,
//   writable: true
// }

// var o = {};
// Object.defineProperty(o, "baz", {
//   value: 8675309,
//   writable: false,
//   enumerable: false
// });
// d = Object.getOwnPropertyDescriptor(o, "baz");
// console.log(d);
// // d {
// //   value: 8675309,
// //   writable: false,
// //   enumerable: false,
// //   configurable: false
// // }

// var s = Object.create(
//   Object.getPrototypeOf(d), 
//   Object.getOwnPropertyDescriptors(d) 
// );
// console.log(s);
// var arr = ["a", "b", "c"];
// console.log(Object.getOwnPropertyNames(arr).sort()); // ["0", "1", "2", "length"]
// // 类数组对象
// var obj = { 0: "a", 1: "b", 2: "c"};
// console.log(Object.getOwnPropertyNames(obj).sort()); // ["0", "1", "2"]
// // 使用Array.forEach输出属性名和属性值
// Object.getOwnPropertyNames(obj).forEach(function(val, idx, array) {
//   console.log(val + " -> " + obj[val]);
// });
// // 输出
// // 0 -> a
// // 1 -> b
// // 2 -> c
// //不可枚举属性
// var my_obj = Object.create({}, {
//   getFoo: {
//     value: function() { return this.foo; },
//     enumerable: false
//   }
// });
// my_obj.foo = 1;
// console.log(Object.getOwnPropertyNames(my_obj).sort()); 

// var obj = {};
// var a = Symbol("a");
// var b = Symbol.for("b");
// obj[a] = "localSymbol";
// obj[b] = "globalSymbol";
// var objectSymbols = Object.getOwnPropertySymbols(obj);
// console.log(objectSymbols.length); // 2
// console.log(objectSymbols)         // [Symbol(a), Symbol(b)]
// console.log(objectSymbols[0])      // Symbol(a)

// const prototype1 = {};
// const object1 = Object.create(prototype1);
// console.log(Object.getPrototypeOf(object1) === prototype1);
// // expected output: true

// console.log(Object.is('foo', 'foo'));     // true
// console.log(Object.is(window, window));   // true
// console.log(Object.is('foo', 'bar'));     // false
// console.log(Object.is([], []));           // false
// var foo = { a: 1 };
// var bar = { a: 1 };
// console.log(Object.is(foo, foo));         // true
// console.log(Object.is(foo, bar));         // false
// console.log(Object.is(null, null));       // true
// // 特例
// console.log(Object.is(0, -0));            // false
// console.log(Object.is(0, +0));            // true
// console.log(Object.is(-0, -0));           // true
// console.log(Object.is(NaN, 0/0));         // true

// // 新对象默认是可扩展的.
// var empty = {};
// console.log(Object.isExtensible(empty)); // === true
// // ...可以变的不可扩展.
// Object.preventExtensions(empty);
// console.log(Object.isExtensible(empty)); // === false
// // 密封对象是不可扩展的.
// var sealed = Object.seal({});
// console.log(Object.isExtensible(sealed)); // === false
// // 冻结对象也是不可扩展.
// var frozen = Object.freeze({});
// console.log(Object.isExtensible(frozen)); // === false

// // 一个对象默认是可扩展的,所以它也是非冻结的.
// console.log(Object.isFrozen({})); // === false
// // 一个不可扩展的空对象同时也是一个冻结对象.
// var vacuouslyFrozen = Object.preventExtensions({});
// console.log(Object.isFrozen(vacuouslyFrozen)) //=== true;
// // 一个非空对象默认也是非冻结的.
// var oneProp = { p: 42 };
// console.log(Object.isFrozen(oneProp)) //=== false
// // 让这个对象变的不可扩展,并不意味着这个对象变成了冻结对象,
// // 因为p属性仍然是可以配置的(而且可写的).
// Object.preventExtensions(oneProp);
// console.log(Object.isFrozen(oneProp)) //=== false
// // 此时,如果删除了这个属性,则它会成为一个冻结对象.
// delete oneProp.p;
// console.log(Object.isFrozen(oneProp)) //=== true
// // 一个不可扩展的对象,拥有一个不可写但可配置的属性,则它仍然是非冻结的.
// var nonWritable = { e: "plep" };
// Object.preventExtensions(nonWritable);
// Object.defineProperty(nonWritable, "e", { writable: false }); // 变得不可写
// console.log(Object.isFrozen(nonWritable)) //=== false
// // 把这个属性改为不可配置,会让这个对象成为冻结对象.
// Object.defineProperty(nonWritable, "e", { configurable: false }); // 变得不可配置
// console.log(Object.isFrozen(nonWritable)) //=== true
// // 一个不可扩展的对象,拥有一个不可配置但可写的属性,则它仍然是非冻结的.
// var nonConfigurable = { release: "the kraken!" };
// Object.preventExtensions(nonConfigurable);
// Object.defineProperty(nonConfigurable, "release", { configurable: false });
// console.log(Object.isFrozen(nonConfigurable)) //=== false
// // 把这个属性改为不可写,会让这个对象成为冻结对象.
// Object.defineProperty(nonConfigurable, "release", { writable: false });
// console.log(Object.isFrozen(nonConfigurable))//=== true
// // 一个不可扩展的对象,值拥有一个访问器属性,则它仍然是非冻结的.
// var accessor = { get food() { return "yum"; } };
// Object.preventExtensions(accessor);
// console.log(Object.isFrozen(accessor)) //=== false
// // ...但把这个属性改为不可配置,会让这个对象成为冻结对象.
// Object.defineProperty(accessor, "food", { configurable: false });
// console.log(Object.isFrozen(accessor)) //=== true
// // 使用Object.freeze是冻结一个对象最方便的方法.
// var frozen = { 1: 81 };
// console.log(Object.isFrozen(frozen)) //=== false
// Object.freeze(frozen);
// console.log(Object.isFrozen(frozen)) //=== true
// // 一个冻结对象也是一个密封对象.
// console.log(Object.isSealed(frozen)) //=== true
// // 当然,更是一个不可扩展的对象.
// console.log(Object.isExtensible(frozen)) //=== false

// var a = 1;
// console.log(Object.isSealed(a));

// const object1 = {};
// Object.preventExtensions(object1);
// try {
//   Object.defineProperty(object1, 'property1', {
//     value: 42
//   });
// } catch (e) {
//   console.log(e);
//   // Expected output: TypeError: Cannot define property property1, object is not extensible
// }

// // 请注意，该方法是非标准的：
// var o = {};
// o.__defineGetter__('gimmeFive', function() { return 5; });
// console.log(o.gimmeFive); // 5
// // 请尽可能使用下面的两种推荐方式来代替：
// // 1. 在对象字面量中使用 get 语法
// var o = { get gimmeFive() { return 5; } };
// console.log(o.gimmeFive); // 5
// // 2. 使用 Object.defineProperty 方法
// var o = {};
// Object.defineProperty(o, 'gimmeFive', {
//   get: function() {
//     return 5;
//   }
// });
// console.log(o.gimmeFive); // 5

// const object1 = {};
// object1.property1 = 42;
// console.log(object1.hasOwnProperty('property1'));
// // expected output: true
// console.log(object1.hasOwnProperty('toString'));
// // expected output: false
// console.log(object1.hasOwnProperty('hasOwnProperty'));
// // expected output: false

// function Foo() {}
// function Bar() {}
// function Baz() {}
// Bar.prototype = Object.create(Foo.prototype);
// Baz.prototype = Object.create(Bar.prototype);
// var baz = new Baz();
// console.log(Baz.prototype.isPrototypeOf(baz)); // true
// console.log(Bar.prototype.isPrototypeOf(baz)); // true
// console.log(Foo.prototype.isPrototypeOf(baz)); // true
// console.log(Object.prototype.isPrototypeOf(baz)); // true

// const object1 = {};
// const array1 = [];
// object1.property1 = 42;
// array1[0] = 42;
// console.log(object1.propertyIsEnumerable('property1'));
// // expected output: true
// console.log(array1.propertyIsEnumerable(0));
// // expected output: true
// console.log(array1.propertyIsEnumerable('length'));
// // expected output: false

// const object1 = {
//   property1: 42
// };
// // Object.seal(object1);
// object1.property1 = 33;
// console.log(object1.property1);
// // expected output: 33
// delete object1.property1; // cannot delete when sealed
// console.log(object1.property1);
// // expected output: 33

// var dict = Object.setPrototypeOf({key:1}, null);
// console.log(dict);

// var obj = { foo: 'bar', baz: 42 };
// console.log(Object.values(obj)); // ['bar', 42]
// // array like object
// var obj = { 0: 'a', 1: 'b', 2: 'c' };
// console.log(Object.values(obj)); // ['a', 'b', 'c']
// // array like object with random key ordering
// // when we use numeric keys, the value returned in a numerical order according to the keys
// var an_obj = { 100: 'a', 2: 'b', 7: 'c' };
// console.log(Object.values(an_obj)); // ['b', 'c', 'a']
// // getFoo is property which isn't enumerable
// var my_obj = Object.create({}, { getFoo: { value: function() { return this.foo; } } });
// my_obj.foo = 'bar';
// console.log(Object.values(my_obj)); // ['bar']
// // non-object argument will be coerced to an object
// console.log(Object.values('foo')); // ['f', 'o', 'o']

// const promise1 = Promise.resolve(3);
// const promise2 = 42;
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 100, 'foo');
// });
// // Promise.all([promise1, promise2, promise3]).then((values) => {
// //   console.log(values);
// // });
// // Promise.all(new Set([1,2,3])).then((values) => {
// //   console.log(values);
// // });
// Promise.all(new Map([[1,2],[2,3],[3,4]])).then((values) => {
//   console.log(values);
// });
// // expected output: Array [3, 42, "foo"]

// console.log(Promise.any(new Set([1,2,3])));

// // using a resolved promise, the 'then' block will be triggered instantly, 
// // but its handlers will be triggered asynchronously as demonstrated by the console.logs
// const resolvedProm = Promise.resolve(33);
// // let thenProm = resolvedProm.then(value => {
// //     console.log("this gets called after the end of the main stack. the value received and returned is: " + value);
// //     return value;
// // });
// let thenProm = resolvedProm.then();
// let thenProm = resolvedProm.then(undefined);
// // instantly logging the value of thenProm
// console.log(thenProm);
// // using setTimeout we can postpone the execution of a function to the moment the stack is empty
// setTimeout(() => {
//     console.log(thenProm);
// });

// function resolved(result) {
//   console.log('Resolved');
// }
// function rejected(result) {
//   console.error(result);
// }
// // Promise.reject(new Error('fail')).then(resolved, rejected);
// Promise.reject(new Set());
// // expected output: Error: fail

// const promise1 = Promise.resolve(123);
// promise1.then((value) => {
//   console.log(value);
//   // expected output: 123
// });

// function monster1(disposition) {
//   this.disposition = disposition;
// }
// const handler1 = {
//   construct(target, args) {
//     console.log('monster1 constructor called');
//     // expected output: "monster1 constructor called"
//     return new target(...args);
//   }
// };
// const proxy1 = new Proxy(monster1, handler1);
// console.log(new proxy1('fierce').disposition);
// // expected output: "fierce"

// const monster1 = {
//   canEvolve: true
// };
// const handler1 = {
//   preventExtensions(target) {
//     target.canEvolve = false;
//     Object.preventExtensions(target);
//     return true;
//   }
// };
// const proxy1 = new Proxy(monster1, handler1);
// console.log(monster1.canEvolve);
// // expected output: true
// Object.preventExtensions(proxy1);
// console.log(monster1.canEvolve);
// // expected output: false

// this.a = 1;
// console.log(Reflect.apply(function(res){console.log(res);console.log(this.a)}, this, [1.75]));
// console.log(Reflect.apply(Math.floor, this, [1.75]));
// console.log(Reflect.apply(Math.floor, undefined, [1.75]));
// console.log(Reflect.apply(Math.floor, undefined, [1.75]));
// // expected output: 1
// console.log(Reflect.apply(String.fromCharCode, undefined, [65,90,104, 101, 108, 108, 111]));
// // expected output: "hello"
// console.log(Reflect.apply(RegExp.prototype.exec, /ab/, ['confabulation']).index);
// // expected output: 4
// console.log(Reflect.apply(''.charAt, 'ponies', [3]));
// // expected output: "i"

// const regex1 = /\w+/;
// // const regex2 = new RegExp('\\w+');
// const regex2 = new RegExp();
// console.log(regex1);
// console.log(regex2);

// const regex1 = RegExp('foo*', 'g');
// const str1 = 'table football, gfoosball';
// let array1;
// console.log(array1 = regex1.exec(str1));
// console.log(array1 = regex1.exec(str1));
// while ((array1 = regex1.exec(str1)) !== null) {
//   console.log(`Found ${array1[0]}. Next starts at ${regex1.lastIndex}.`);
//   // expected output: "Found foo. Next starts at 9."
//   // expected output: "Found foo. Next starts at 19."
// }

// var myString = "Table of Contents";
// console.log(myString.anchor("contents_anchor"));

// var worldString = 'Hello, world';
// console.log(worldString.small());     // <small>Hello, world</small>
// console.log(worldString.big());       // <big>Hello, world</big>
// console.log(worldString.fontsize(7));

// console.log("ssss".italics("ddd"));

// var hotText = 'MDN';
// var URL = 'https://developer.mozilla.org/';
// console.log(hotText.link(URL));

// var worldString = 'Hello, world'; 
// console.log(worldString.blink()); // <blink>Hello, world</blink> 
// console.log(worldString.bold()); // <b>Hello, world</b> 
// console.log(worldString.italics()); // <i>Hello, world</i> 
// console.log(worldString.strike()); // <strike>Hello, world</strike>

// var superText = 'superscript'; 
// var subText = 'subscript'; 
// console.log('This is what a ' + superText.sup() + ' looks like.'); 
// // 这就是<sup>superscript</sup>的样子。
// console.log('This is what a ' + subText.sub() + ' looks like.'); 
// // 这就是<sub>subscript</sub>的样子。

// var str = "abcdefghij";
// console.log("(1,2): "    + str.substr(1,2));   // (1,2): bc
// console.log("(-3,2): "   + str.substr(-3,2));  // (-3,2): hi
// console.log("(-3): "     + str.substr(-3));    // (-3): hij
// console.log("(1): "      + str.substr(1));     // (1): bcdefghij
// console.log("(-20, 2): " + str.substr(-20,2)); // (-20, 2): ab
// console.log("(20, 2): "  + str.substr(20,2));  // (20, 2):

// var superText = 'superscript';
// var subText = 'subscript';
// console.log('This is what a ' + superText.sup() + ' looks like.');
// // "这就是<sup>superscript</sup>的样子。"
// console.log('This is what a ' + subText.sub() + ' looks like.');
// // "这就是<sub>subscript</sub>的样子。"

// console.log("sss".toSource());

// const monster1 = {
//   _age: 111,
//   [Symbol('secret')]: 'I am scared!',
//   eyeCount: 4
// };
// const handler1 = {
//   ownKeys(target) {
//     return Reflect.ownKeys(target);
//   }
// };
// const proxy1 = new Proxy(monster1, handler1);
// for (let key of Object.keys(proxy1)) {
//   console.log(key);
//   // expected output: "_age"
//   // expected output: "eyeCount"
// }

// var obj = {
//   key1 : 1
// };
// wx.setStorageSync('obj', obj);
// console.log(wx.getStorageSync('obj').key1);

// wx.setStorage({
//   key : "keya",
//   data : "valuea",
//   success : function(res){
//     console.warn(res);
//   }
// });
// console.warn(wx.getStorageSync('keya'));
// wx.removeStorage({
//   key : "keya",
//   success : function(res){
//     console.warn(res.errMsg);
//   }
// });
// wx.removeStorage({
//   key : "keya2",
//   success : function(res){
//     console.warn(res.errMsg);
//   }
// });
// wx.getStorage({
//   key:"keya",
//   success: function(res){
//       console.warn("-------------*-*-*-*-*-*-*-");
//       console.warn("sssss",res.data);
//   },
//   fail: function(res){
//       console.warn("fail",res);
//   }
// });
// wx.removeStorageSync("logs");
// wx.removeStorageSync("key");
// wx.removeStorageSync("obj");
// wx.getStorageInfo({
//   success : function(res){
//     console.warn(res);
//   }
// })


},
login_tap(){

wx.login({
  success: function(res){
    console.log("get code success:", res);
    wx.request({
      url: url + "jscode2session",
      data : {
        JSCODE: res.code
      },
      success(res){
        console.log("login success : ",res.data);
        openid = res.data.openid;
      },
      fail(res){
        console.log("login fail : ",res);
      }
    });

  }

});
},
token_tap(){

    wx.request({
      url: url + "getAccessToken",
      success(res){
        console.log("getAccessToken success : ",res.data);
        access_token = res.data;
      },
      fail(res){
        console.log("getAccessToken fail : ",res);
      }
    });

},
send_tap(){

  wx.requestSubscribeMessage({
    tmplIds : [template_id],
    success(res){
      console.log("requestSubscribeMessage success :" + res);
      var message = {
        "date2":{
            "value":"2020年06月06日 12:30"
        },
        "character_string5":{
            "value":"339208499"
        }
      };
    
      wx.request({
        url : url + "send",
        data : {
          openid,
          access_token,
          template_id,
          page : "/pages/index/index",
          data : JSON.stringify(message),
          miniprogram_state : "developer",
        },
        success(res){
          console.log("send success : " + res);
        },
        fail(res){
          console.log("send fail : " + res);
        }
      });
    },
    fail(res){
      console.log("requestSubscribeMessage fail :" + res);
    }
  });

},

})
