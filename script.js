var today = moment().format("llll");
$("#currentDay").append(today);



for (i=8; i < 17; i++) {
    var textBox = document.querySelector("#hour"+ i +">textarea");
    var saveBtn = document.querySelector("#hour" + i + ">button");
    
    saveBtn.addEventListener("click", function(event) {
        var text = event.target.previousElementSibling.value;

        var key = event.target.parentElement.id;
        
        localStorage.setItem(key, text);
    })
    
    textBox.value = localStorage.getItem("hour" + i);

    var currentTime = moment().hour();

if (i < currentTime) {
    $("#hour" + i).addClass("past");
}
else if (i === currentTime) {
    $("#hour" + i).addClass("present")
}
else if (i > currentTime) {
    $("#hour" + i).addClass("future");
}

};

