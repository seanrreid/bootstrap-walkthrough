$(function() {
    $.ajax({
        type: "GET",
        url: "https://api.chucknorris.io/jokes/random?category=dev",
        success: function(response) {
            $("#chuckSays").replaceWith(response.value);
        },
        error: function(error) {
            console.error(error);
        }
    });
});
