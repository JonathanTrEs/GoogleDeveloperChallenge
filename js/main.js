//Hide draw section if there are not canvas
$("#drawSection").hide();

$("#gridButton").click(function() {
    if ($("#gridHeight").val() < 1 || $("#gridWidth").val() < 1) {
        alert("Please insert a valid grid value");
    } else {
        //Show draw section
        $("#drawSection").show();
        makeGrid();
    }
})

function makeGrid() {
    //If a canvas already exist, remove it.
    if ($("#pixelCanvas") != null) {
        $("#pixelCanvas").remove();
    }
    //Create the new table with the size setting by the user
    mytable = $('<table></table>').attr({ id: "pixelCanvas" });
    var rows = $("#gridHeight").val();
    var cols = $("#gridWidth").val();
    var tr = [];
    var idCont = 0;

    for (var i = 0; i < rows; i++) {
        var row = $('<tr></tr>').appendTo(mytable);
        for (var j = 0; j < cols; j++) {
            cont = i + "-" + j;
            $('<td></td>').appendTo(row);
        }

    }
    //Add the table to the dom
    mytable.appendTo("#drawSection");
}

//Listener for the grid
$('body').on('click', 'td', function() {
    $(this).css('background-color', $("#colorPicker").val());
});

//Color picker function
$(function() {
    $('#cp2').colorpicker();
});