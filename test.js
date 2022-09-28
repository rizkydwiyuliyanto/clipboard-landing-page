const num1 = (x,callback) => {
    callback(x)
}

const num2 = (x, callback) => {
    callback(x)
}

const num3 = (x, callback) => {
    callback(x)
}

num1(4, (x) => {
  num2(2, (y) => {
    num3(4, (z) => {
      console.log(x + y + z);
    });
  });
});