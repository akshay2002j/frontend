jQuery(function () {
  var submitButtom = $("#f-sumbit");
  submitButtom.hover(
    function () {
      $(this).css("background", "green");
    },
    function () {
      $(this).css("background", "white");
    }
  );

  $(".loginform").validate({
    rules: {
      email: {
        required: true,
        email: true,
      },
      password: {
        required: true,
        minlength: 4,
      },
    },
    messages: {
      email: {
        required: "Please enter your email",
        email: "Enter a valid email address",
      },
      password: {
        required: "Please enter your password",
        minlength: "Password must be at least 4 characters long",
      },
    },
    errorPlacement: function (error, element) {
      error.insertBefore(element);
    },

    submitHandler: function (form) {
      event.preventDefault();
      const loginReq = {
        email: $("#f-email").val(),
        password: $("#f-password").val(),
      };
      $.ajax({
        url: "http://localhost:8080/api/user/login",
        type: "POST",
        contentType: "application/json",
        headers: { email: loginReq.email },
        data: JSON.stringify(loginReq),
        success: function (response) {
          sessionStorage.setItem("sessionId", response);
          console.log("Login success:", response);
          setTimeout(function () {
            window.location.href = "dashboard.html"; // redirect after login
          }, 1000);
        },
        error: function (err) {
          console.error("Login failed:", err);
          alert("Failed to Login. Please check the fields");
        },
      });
    },
  });
});
