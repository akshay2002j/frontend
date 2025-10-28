jQuery(function () {

  $("#f-sumbit").hover(
    function () {
      $(this).css("background", "green");
    },
    function () {
      $(this).css("background", "white");
    }
  );

  $("#signupfrom").validate({
    rules: {
      name: {
        required: true,
        minlength: 3
      },
      email: {
        required: true,
        email: true
      },
      password: {
        required: true,
        minlength: 4
      },
      phone: {
        required: true,
        minlength: 10,
        maxlength: 10
      }
    },
    messages: {
      name: {
        required: "Please enter your name",
        minlength: "Name must be at least 3 characters long"
      },
      email: {
        required: "Please enter your email",
        email: "Enter a valid email address"
      },
      password: {
        required: "Please enter your password",
        minlength: "Password must be at least 4 characters long"
      },
      phone: {
        required: "Please enter your Phone number",
        minlength: "Phone number must be 10 digits"
      },
      
    },
     errorPlacement: function(error, element) {
            error.insertBefore(element)
    },

    submitHandler: function (form) {
      event.preventDefault();
      console.log("Sign up started");
      const registerRequest = {
        name: $("#f-name").val(),
        email: $("#f-email").val(),
        password: $("#f-password").val(),
        phoneNumber: $("#f-phone").val()
      };

      $.ajax({
        url: "http://localhost:8080/api/user/register",
        type: "POST",
        contentType: "application/json",
        headers: { "email": registerRequest.email },
        data: JSON.stringify(registerRequest),
        success: function (response) {
          console.log("Sign up ended successfully:", response);
          alert("Registration successful! Redirecting to login...");
          setTimeout(function () {
            window.location.href = "login.html";
          }, 1000);
        },
        error: function (err) {
          console.error("Error:", err);
          alert("Failed to sign up! Please check the fields.");
        }
      });
    }
  });

}

);
