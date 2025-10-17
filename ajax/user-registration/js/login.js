
jQuery(
        function (){
            var submitButtom =  $("#f-sumbit");
        submitButtom.hover(
            function(){ 
                $(this).css("background","green"); 
            },
            function(){
                 $(this).css("background","white"); 
            }
        );
        
                const loginReq = {
                    email: $("#f-email").val(),
                    password: $("#f-password").val()
                };

                    $(".loginform").submit(function(event){
                    event.preventDefault();

                    const loginReq = {
                        email: $("#f-email").val(),
                        password: $("#f-password").val()
                    };

                    $.ajax({
                        url: "http://localhost:8080/api/user/login",
                        type: "POST",
                        contentType: "application/json",  
                        data: JSON.stringify(loginReq),    
                        success: function(response){
                            console.log("Login success:", response);
                            setTimeout(function(){
                                window.location.href = "dashboard.html"; // redirect after login
                            }, 2000);
                        },
                        error: function(err){
                            console.error("Login failed:", err);
                            alert("Failed to Login. Please check the fields");
                        }
                    });
                });

     

    }

);