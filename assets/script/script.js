//link jquery
//create rows columns set time text prompt and save button(inside css)
//make hours show am/pm
//local storage?
//if else for color changing in css based on time

function getLocal(store) {
    let value = localStorage.getItem(store);
    if (value) {
        $(`#eventText${store}`).text(value);
    }
}

$(document).ready(function () {
    $("#currentDay").text(moment().format("dddd, MMMM YYYY"));
    for (let i = 9; i < 18; i++) {

       
        var row = $(`<div data-time=${i} id='${i}' class="row">`);

        var column1 = $('<div class="col-md-2"> <p class="hour">' + formatHours(i) + '</p>');      
        var column2 = $(`<div class="col-md-8 past"><textarea id=eventText${i} class="prompt" placeholder="Add event here..."></textarea>`);
        var column3 = $(`<div class="col-md-2"><button class="saveButton" id=${i}><i class="fas fa-coffee"></i></button>`);

        
        row.append(column1, column2, column3);      

        
        $(".container").append(row);

        getLocal(i);
    }

    function formatHours(hour) {
        var ampm = hour >= 12 ? 'pm' : 'am';
        hour = hour % 12;
        hour = hour ? hour : 12;
        return hour + ampm;
    }
    formatHours();

    function changeColor() {
        var currentTime = new Date().getHours();
        for (var i = 9; i < 18; i++) {
            if ($(`#${i}`).data("time") == currentTime) {
                $(`#eventText${i}`).addClass("present");
                
            } else if (currentTime < $(`#${i}`).data("time")) {
                $(`#eventText${i}`).addClass("future");
                
            } else {
                $(`#eventText${i}`).addClass("past");
            }
        }
    }

    
    changeColor();
   
    

    var saveButton = $('.saveButton');
    saveButton.on('click', function () {
        let textId = $(this).attr('id');
        let textEvent = $(this).parent().siblings().children('.prompt').val();
        localStorage.setItem(textId, textEvent);
    });

})