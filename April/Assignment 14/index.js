// To check Greater number.....
function check(){
    var x = 5
    var y = 15
    if (x>10){
        console.log('X is greater')
    }
    else if (y>10){
        console.log('y is greater')
    }
    
}
// check()


// check()

// To print highest var as output......
function greaterNum(){
    const num1 = 4
    const num2 = 12
    const num3 = 8
    let largest=0

    if(num1 >= num2 && num1 >= num3) {
        largest = num1
    }
    else if (num2 >= num1 && num2 >= num3) {
        largest = num2
    }
    else {
        largest = num3
    }
    console.log("The largest number is " + largest)

}