$(document).ready(function(){
    $("#hotel_form").show();
    $("#tricket_form").hide();
    $("#place_form").hide();

    $("#hotel_btn span").addClass("line");

    /* if condition */
    $("#tricket_btn").click(function(){
        $("#tricket_form").show();
        $("#hotel_form").hide();
        $("#place_form").hide();

        $("#tricket_btn span").addClass("line");
        $("#hotel_btn span").removeClass("line");
        $("#place_btn span").removeClass("line");
    });
    /*if condition */
    $("#place_btn").click(function(){
        $("#place_form").show();
        $("#hotel_form").hide();
        $("#tricket_form").hide();

        $("#place_btn span").addClass("line");
        $("#hotel_btn span").removeClass("line");
        $("#tricket_btn span").removeClass("line");
    })
});