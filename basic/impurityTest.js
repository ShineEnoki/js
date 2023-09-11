// let sample1 = 5;

// function testPurity1(){
//     sample1 = sample1 + 1
// }

// testPurity1();
// console.log(sample1);

let sample2 = 5;

function testPurity2(data){
    data = data + 1;
}

testPurity2(sample2)
console.log(sample2)