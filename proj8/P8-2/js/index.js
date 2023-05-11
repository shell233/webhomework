$(document).ready(function(){
    var $div_li=$(".tab-menu li");
    $div_li.click(function(){
        $(this).addClass("selected");
        $(this).siblings().removeClass("selected");

        var li_index=$div_li.index(this)
        $(".tab-box>div").eq(li_index).show()
            .siblings().hide();
    }).hover(function(){
        $(this).addClass("hover");
    },function(){
        $(this).removeClass("hover");
    })
})