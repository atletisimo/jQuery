$(document).ready(function() {
    $("#search").click(function () {
        var movie_name = $("#tekst").val();
        $("#f2014").append("<li>" + movie_name + "</li>");
        $("#f2013").append("<li>" + movie_name + "</li>");

    })
    $("#f2014").sortable({
        connectWith: "#fav"
    })
    $("#f2013").sortable({
        connectWith: "#fav"
    })
    $("#fav").sortable({
        receive: function (event, ui) {

        }
    })
    $("#rejting").dialog({
        autoOpen: false,
        modal: true,
        buttons: {
            Add: function () {
                var rate = $("#r").val();
                $("#t").append("Rejting: " +rate + "<br>")

            }

        }

    })
    $("#fav").click(function(){
        $("#rejting").dialog("open")
    })

})
