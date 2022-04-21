// Lowest Number in Three Numbers

function lowestNum(){
    const num1 = 4
    const num2 = 12
    const num3 = 8
    let lowest=0

    if(num1 <= num2 && num1 <= num3) {
        lowest = num1
    }
    else if (num2 <= num1 && num2 <= num3) {
        lowest = num2
    }
    else {
        lowest = num3
    }
    console.log("The lowest number is " + lowest)

}

// Vowel or not

function vowel(){
    var ch='a';
if(ch=='a' || ch=='e' || ch=='i' || ch=='o' || ch=='u')
    console.log("<b>"+ch+"</b>" + " is a Vowel");
else if(ch=='A' || ch=='E' || ch=='I' || ch=='O' || ch=='U')
    console.log("<b>"+ch+"</b>" + " is a Vowel");
else
    console.log("<b>"+ch+"</b>" + " is a Consonant");
}

