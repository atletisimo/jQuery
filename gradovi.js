$(document).ready(function(){
$("#base").show()
    $("#detailed").hide()
    $("li").click(function (){
    var city=$(this).html()//vo imeto na city promenlivata ke se smesti gradot koj bil kliknat
    processData(city)
})
    function processData(city){
    $.ajax({
        url:"",
        dataType:"",
        success:function (data){
            $.each(data.deals,function (i,item){

            })
        }
    })
    }
})