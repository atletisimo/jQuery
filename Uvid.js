$(document).ready(function(){
$(document).tooltip()
    $("#new_student").dialog({
    autoOpen:false,
    modal:true,
    buttons:{
        Add:function (){
var data=$("#input_student").val()
            $("#prva").append("<li>"+data+"</li>")
        $("#new_student").dialog("close")
        }
    }

})
    $("#add").click(function (){
        $("#new_student").dialog("open")
    })
    $("#prva").sortable({
        connectWith:"#vtora"
    })
$("#vtora").sortable({
    receive: function (event,ui){
        $student=$(ui.item)
        $("#point").dialog("open")
    }
})
$("#point").dialog({
    autoOpen: false,
    modal:true,
    buttons:{
        Add:function (){
            var student_points=$("#points").val()
$student.attr("title",student_points)
            $("#point").dialog("close")
        }
    }
})

})