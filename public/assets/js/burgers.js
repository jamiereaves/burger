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
    //click event for the "ate it" button
    $(".eatMe").on("click", function(event) {
        var id = $(this).data("id");
        //object that holds boolean value for eaten burger
        var burgerAccomplished = {
                eaten: 1
        };

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: burgerAccomplished
        }).then(
        function() {
            console.log("the burger was eaten");
            // Reload the page to get the updated list
            location.reload();
        }
        );
    });
});