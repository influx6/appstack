var em = require('em');
var as = em('../lib/as.js');
var ma = as.Matchers;

var Person = as.Class.create({
    init: function(name){ this.name = name; }
});

var Human = Person.extend({
  init: function(name,age){
    this.Super(name);
    this.age = age;
  }
});

var Man = Human.extend({
  init: function(name,age){
    this.Super(name,age);
    this.sex = 'M';
  }
});

console.log(Man);
console.log(Man.prototype.superParent == Human.prototype.superParent);

var alex = Person.make('alex');
var john = Human.make('john',29);
var josh = Man.make('josh',30);

console.log(alex,john);

