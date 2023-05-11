var num=3;
$(document).ready(function(){
    $(".add").click(function(){
        // var num = $(".num:last") + 1;
        num++;
        // var cont = "数据" + num; 
        var addlist = "<div class='list'>" +
                            "<div class='num'>" + num + "</div>" +
                            "<div class='content'>" + "</div>" +
                            "<button class='deleted'>Deleted</button>" +
                      "</div>";
        $(".table").append(addlist);
    })

    $(".deleted").click(function(){
        $(this).parent().remove();
        num--;
        for (var j =0;j<num;j++){
            $(".list .num").eq(j).text(j+1);
        }
    })
})