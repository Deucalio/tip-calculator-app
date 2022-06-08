let arr = []
$(".button").click(function () {

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
    // console.log(arr)

})

