let arr = []
let Tip = []
$(".button").click(function () {
    Tip.shift()

    //selecting second class of button (button1,button2...)
    let buttonN = (this.className.substr(7));
    arr.push(buttonN)
    if (arr.length === 1) { //if there's only 1 button 
        $(`.${buttonN}`).addClass("selected-button")
    } else {
        //if there are 2 buttons inside an array,remove first
        // and assign the selected button class to second one
        $(`.${arr[0]}`).removeClass("selected-button")
        $(`.${arr[1]}`).addClass("selected-button")
        arr.shift();
    }
    Tip.shift()
    Tip.push(arr[0])
})


// let bill = parseInt($('#bill')[0].value)
// let tip = parseInt(arr[0])
// let numberOfPeople = parseInt($('#total_person')[0].value)

$('.submit-button').click(function () {
    let bill = parseInt($('#bill')[0].value)
    let tip = Tip
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
    }
    else if ((bill >= 0 && numberOfPeople >=0) && Tip.length > 0){
        alert("lets gooo")
    }
    Tip.shift()
    // console.log(Tip);
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