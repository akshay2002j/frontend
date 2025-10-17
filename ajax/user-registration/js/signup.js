jQuery(function () {

    $("#f-sumbit").hover(
        function () {
            $(this).css("background", "green");
        },
        function () {
            $(this).css("background", "white");
        }
    );


    $("#signupfrom").submit(function (event) { 
        event.preventDefault();
        console.log("Sign up started");

        const registerRequest = {
            name: $("#f-name").val(),
            email: $("#f-email").val(),
            password: $("#f-password").val(),
            phoneNumber: $("#f-phone").val()
        };

         $.ajax({
            url: "http://localhost:8080/api/user", 
            type: "POST",
            contentType: "application/json",
            headers: {"email":registerRequest.email},
            data: JSON.stringify(registerRequest),           
            success: function(response) {
                console.log("Sign up ended successfully:", response);
                alert("Registration successful! Redirecting to login...");
                setTimeout(function() {
                    window.location.href = "login.html";
                }, 1000);
            },
            error: function(err) {
                console.error("Error:", err);
                alert("Failed to sign up! Please check the fields.");
            }
        });
    });

});
