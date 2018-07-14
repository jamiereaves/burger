// wait to attach event handlers until the DOM is fully loaded.
$(function() {
    //click event for the new burger submission button
    $(".create-form").on("submit", function(event) {
        //preventDefault on a submit event to prevent .
        event.preventDefault();
        //create object to hold user submission data (eaten defaults to 0, i.e. uneaten)
        var newBurger = {
        name: $("#ca").val().trim(),
        eaten: 0
        };

        // Send the POST request.
        $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
        }).then(
        function() {
            console.log("added new burger");
            // Reload the page to get the updated list
            location.reload();
        }
        );
    });
    //click event for the "loved it button"
    $(".lovedIt").on("click", function(event) {
        var id = $(this).data("id");
        //object that holds boolean value for loved burger
        var burgerOpinion = {
                eaten: 1,
                loved: 1
        };

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: burgerOpinion
        }).then(
        function() {
            console.log("the burger was loved");
            // Reload the page to get the updated list
            location.reload();
        }
        );
    });
    //click event for the "loathed it button"
    $(".loathedIt").on("click", function(event) {
        var id = $(this).data("id");
        //object that holds boolean value for loved burger
        var burgerOpinion = {
                eaten: 1,
                loved: 0
        };

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: burgerOpinion
        }).then(
        function() {
            console.log("the burger was loathed");
            // Reload the page to get the updated list
            location.reload();
        }
        );
    });
});