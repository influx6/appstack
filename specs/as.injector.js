var em = require('em');
var as = em('../lib/as.js');
var ma = as.Matchers;

ma.scoped('array injector test');

var inj = as.ArrayInjector.make(function(f){
    if(f.length >= 3) return true;
    return false;
});

var posj = as.PositionArrayInjector.make(function(f){
    if(f.length >= 4) return true;
    return false;
});

inj.on(function(cur){
  console.log('three-sum:',cur);
});

posj.on(function(cur){
  console.log('positioned:',cur);
});


inj.push(10,20,30);
posj.push(2,30).push(0,20).push(1,10).push(4,40);
