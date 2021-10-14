$(function (){

    let boundary = $("#maze .boundary ");
    let status = $("#status");
    let lost = false;
    $("#start").click(function (e) {
        $("#maze .boundary ").removeClass("youlose");
        lost =false;
        status.text("Move your mouse in the path to E in order to win").css({"color":"black"});
        e.preventDefault();
        !lost? boundary.one("mouseover",function () {
            boundary.addClass("youlose")
                .fadeTo(200,.3)
                .fadeTo(200,.8)
                .fadeTo(200,.3)
                .fadeTo(200,.8)
                .fadeTo(200,.3)
                .fadeTo(200,.8)
                .fadeTo(200,1);
            boundary.off("mouseover");
            status.text("Oppss... you lost the game, click on S to start again")
                .css({"color":"red"});
            lost = true;
        }):"";

        $("#maze").mouseleave(function () {
            boundary.addClass("youlose")
                .fadeTo(200,.3)
                .fadeTo(200,.8)
                .fadeTo(200,.3)
                .fadeTo(200,.8)
                .fadeTo(200,.3)
                .fadeTo(200,.8)
                .fadeTo(200,1);
            $(this).off("mouseleave");
            boundary.off("mouseover");
            status.text("Oppss... you lost the game, click on S to start again")
                .css({"color":"red"});
            lost = true;
        });

        $("#end").hover(function () {
            if (!lost){
                status.text("Congratulation!! you won the game, click on S to play again")
                    .css({"color":"green"});
            }
            boundary.off("mouseover");
            $("#maze").off("mouseleave");
        });
    });

});