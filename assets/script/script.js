//link jquery
//create rows columns set time text prompt and save button(inside css)
//make hours show am/pm
//local storage?
//if else for color changing in css based on time





$(document).ready(function () {
    $("#currentDay").text(moment().format("dddd, MMMM YYYY"));
    for (let i = 9; i < 18; i++) {

       
        var row = $(`<div data-time=${i} id='${i}' class="row">`);

        var column1 = $('<div class="col-sm-2"> <p class="hour">' + formatHours(i) + '</p>');      
        var column2 = $(`<div class="col-sm-8 past"><textarea id=text${i} class="prompt" placeholder="Add event here..."></textarea>`);
        var column3 = $(`<div class="col-sm-2"><button class="saveButton" id=${i}><i class="fas fa-save"></i></button>`);

        
        row.append(column1, column2, column3);
      

        
        $(".container").append(row);

        getLocalStorage(i);
    }

    function formatHours(hour) {
        var ampm = hour >= 12 ? 'pm' : 'am';
        hour = hour % 12;
        hour = hour ? hour : 12;
        return hour + ampm;
    }
    formatHours();

    

})