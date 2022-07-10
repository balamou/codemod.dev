var someGlobalVariableWRITE = 'foo';
var someReadAndWriteVar = [];
var usedInLoopWrite = 3;

var someGlobalVariableREAD = 'hello';
var alsoARead = 35456;

var someObject = {
  age: 25,
};

var insideACallbackWrite = 10;

function notAPureFunction() {
  someGlobalVariableWRITE = 'no'; // global write

  console.log(someGlobalVariableREAD); // global read

  var foo = alsoARead; // also a read
  var area = alsoARead * 10; // also a read

  var someLocalVariable = 10; // local

  someLocalVariable = 12;

  {
    someLocalVariable = 15;
  }

  pureFunction(() => {
    insideACallbackWrite = 11;
    console.log('hello');
  });

  pureFunction(someGlobalVariableREAD);
}

function pureFunction(someParameter) {
  console.log(someParameter);

  var anotherLocalVariable = 234;

  anotherLocalVariable = 1;

  someGlobalVariableREAD = 'Not so fast';

  outsideFunction();
}

function outsideFunction() {
  notAPureFunction();
}

function anotherPureFunction(r) {
  var pi = 3.145;

  return pi * r * r;
}

function dirtyFunction(param) {
  param = 10;
  console.log(someParameter);

  var anotherLocalVariable = 234;

  anotherLocalVariable = 1;

  someGlobalVariableWRITE = 'Not so fast';
  {
    someReadAndWriteVar = 'no'; // global write
  }

  for (let i = 0; i < 10; i++) {
    usedInLoop += i;
  }

  console.log(someReadAndWriteVar, anotherPureFunction);

  someObject.age = 30;

  const localObject = {
    cost: 100,
  };

  localObject.cost = 245;

  var somethingElse = localObject.cost;
}

function simpleFunction() {
  const leftObj = {
    cost: 100,
  };
  const rightObj = {
    hello: 10,
  };

  leftObj.cost = 245; // we don't want

  var somethingElse = rightObj.cost; // we want

  function helloDoNotParse() {
    console.log(someGlobalVariableREAD);

    function skip() {
      someGlobalVariableWRITE = 12;
    }
  }
}
