//fade in effects
$("#main-archi").fadeIn(500);
$("#main-fashion").delay(300).fadeIn(500);
$("#main-interior").delay(600).fadeIn(500);
$("#main-lifestyle").delay(900).fadeIn(500);

$("#fashion").on("singletap",function() {
    $("#cat1").fadeIn(500);
    $("#cat2").delay(300).fadeIn(500);
    $("#cat3").delay(600).fadeIn(500);
    $("#cat4").delay(900).fadeIn(500);
    $("#cat5").delay(1200).fadeIn(500);
}); 

//add comments
$("#send").on("singletap", function() {
    var nickname = $("#name-holder").val();
    var content = $ ("#comment-holder").val();
    if (nickname.length < 1) {
        nickname = "Anonymous";
    }
    if (content.length < 1) {
        $.UIPopup({
            id: "note-new-warning",
            title: 'Oops!',
            message: 'It seems you forgot to leave your valuable opinion. (:',
            continueButton: 'OK',
            callback: function() {
                content = ""; 
            }
        });
    }else{
        addComment(nickname, content);
    } 

});

function addComment(nickname, content) {
    $("#old-comment").append("<li>" + "<h3>" + nickname + "</h3>" + "<h4>" + content + "</h4>" + "</li>");
    $("#name-holder").val("");
    $("#comment-holder").val("");
}

//change font size in settings
$('#rangeValue').html($('#changeFontSize').val());
$('#changeFontSize').on('change', function() {
    var fontSize = $(this).val();
    $('#rangeValue').html($(this).val());
    $('.article-text').css("font-size", fontSize+"px");
});

//night mode
$('.switch').on('singletap swipeleft swiperight', function() {
    if (this.classList.contains('on')) {
        $('.article-text').css("color", "black");
        $('body').css("background-color", "");
    } else {
        $('.article-text').css("color", "#A6A69E");
        $('body').css("background-color", "#322C3D");
    }
});