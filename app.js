let arr = []
let Tip = []
let arrVal = []
$(".button").click(function () {
    // Tip.shift()

    //selecting second class of button (button1,button2...)
    let buttonN = (this.className.substr(7));
    let buttonNValue = parseInt(this.innerHTML)

    arr.push(buttonN)
    if (arr.length === 1) { //if there's only 1 button 
        $(`.${buttonN}`).addClass("selected-button")
        Tip.shift()
        Tip.push(arr[0])
        
        arrVal.shift()
        arrVal.push(buttonNValue);
    } else {
        //if there are 2 buttons inside an array,remove first
        // and assign the selected button class to second one
        $(`.${arr[0]}`).removeClass("selected-button")
        $(`.${arr[1]}`).addClass("selected-button")
        arr.shift();

        Tip.shift()
        Tip.push(arr[0])
        
        arrVal.shift()
        arrVal.push(buttonNValue);
    }
    
})

$('.submit-button').click(function () {
    let ButtonNVal = parseInt(this.innerHTML)
    let bill = parseFloat($('#bill')[0].value)
    let tip = Tip[0]
    let numberOfPeople = parseInt($('#total_person')[0].value)
    if ( (bill <= 0) && (numberOfPeople <= 0) ) {
        // $('.bill').addClass('special-bill');
        addClass($('.bill'))
        addClass($('.number-of-ppl'))

        removeClass()
    } else if (bill <= 0) {
        addClass($('.bill'))
        removeClass()
    } else if (numberOfPeople <= 0){
        addClass($('.number-of-ppl'))
        removeClass()
    }else if (isNaN(bill) || isNaN(numberOfPeople) ){ 
        alert("Can't be empty", tip)
    }else if (Tip.length <= 0){
        alert("Select Tip, please")
    }else if (Tip[0].includes("selected-button")){
        alert("Select Tip, again")
    }else if(Tip[0].includes("6")){
        var customBtnVal = parseInt($('.button6')[0].value)
        arrVal.shift()
        arrVal.push(customBtnVal)

        let result = calculate(bill,arrVal[0],numberOfPeople);
        $('.tip-amount')[0].innerHTML = `$${result[0]}`
        $('.person')[0].innerHTML = `$${result[1]}`
    }
    else if ((bill >= 0 && numberOfPeople >=0) && Tip.length > 0){
        console.log(bill,arrVal[0],numberOfPeople);
        let result = calculate(bill,arrVal[0],numberOfPeople);
        $('.tip-amount')[0].innerHTML = `$${result[0]}`
        $('.person')[0].innerHTML = `$${result[1]}`
    }
    else if (isNaN(Tip[0])){
        alert("select TIP")
    }
    
    
})

const removeClass = () => {
    setTimeout(() => {
        $('.bill').removeClass('special');
        $('.number-of-ppl').removeClass('special');
    }, 2000); //removes class after 4 second
}
const addClass = (css_class) => {  //adds special class
   css_class.addClass('special')
}

//function to calculate Tip Amount and Person

const calculate = (bill,tip,numberOfPpl) => {
    let tipAmount = threePlaces(((bill/numberOfPpl) * (tip/100)))
    let total = threePlaces(tipAmount + (bill/numberOfPpl) + (tip/100))
    return([tipAmount,total])
}

//returns a digit truncated to 3 decimal places
const threePlaces = (digit) => parseFloat(digit.toString().split("").slice(0,4).join(""))
