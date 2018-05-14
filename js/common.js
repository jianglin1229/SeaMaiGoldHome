$(document).ready(function() {
    $("#header").load("header.html", function() {
        var links = $(".navbar-nav>li>a"),
            index = 0, //默认第一个菜单项
            //取当前URL最后一个/后面的文件名，pop方法是删除最后一个元素并返回最后一个元素
            url = location.href.split("?")[0].split("/").pop();
        console.log(links[0].href);
        console.log(url)
        var links3 = $(".navbar-nav li .dropdownUl li a");
        if (url) { //如果有取到，则进行匹配，否则默认首页（即index所指向的那个）
            for (var i = 0; i < links.length; i++) { //遍历menu中的链接地址
                if (links[i].href.indexOf(url) != -1) {
                    index = i;
                    break;
                }
            }
            for (var i = 0; i< links3.length; i++) {
                if (links3[i].href.indexOf(url) != -1) {
                    index = 3;
                    break;
                }
            }
        }

        $(".navbar-nav li").removeClass("active");
        $(".navbar-nav li").eq(index).addClass("active");

        $('.new').hover(function () {
            $('.dropdownUl').toggle();
        })

    });
    $("#footer").load("footer.html");
});
$(window).scroll(function() {
    if ($(window).scrollTop() >= 100) {
        $("#header .navbar-default").addClass("navChange");
    } else {
        var current = $("#header .navbar-default");
        current.removeClass("navChange");
        current = $(this);
    }
});