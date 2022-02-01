$(document).click(function () {

    $("#dialog").dialog({
        autoOpen: false,
        modal: true,
        buttons: {
            Add: function () {
                input = $("#input").val()
                $("#comments").append("<b>" + input + "</b>").css("color", "blue")
                $("#dialog").dialog("close")
            }

        }

    })
    $("#button").click(function () {
        $("#dialog").dialog("open")
    })
    $("#button").hover(function () {
        $(this).css("background", "green")

    }, function () {
        $(this).css("background", "none")


    })
})
