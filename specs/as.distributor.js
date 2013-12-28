var em = require('em');
var as = em('../lib/as.js');

var distributor = as.Distributors();
var mutator = as.Mutator(function(n,m){
  return "<tag>"+n+"-"+m;
});

mutator.add(function(n){
  return n+"</tag>";
});

mutator.add(function(n){
  console.log('result:',n);
});

mutator.done.add(function(n){
  console.log('mutation done',n);
});

mutator.add(function(n){
  return "html: \n"+n;
});

mutator.fire('alex','john');
