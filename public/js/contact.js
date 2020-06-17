$(document).ready(function () {

    const loginForm = $("#login-form");
    const emailInput = $("#email-input");
    const passwordInput = $("#password-input");
  
    loginForm.on("submit", function(event) {
        event.preventDefault();
        const userData = {
          email: emailInput.val().trim(),
          password: passwordInput.val().trim()
        };
    
        if (!userData.email || !userData.password) {
          return;
        }

        console.log(userData)
        loginUser(userData.email, userData.password);
        emailInput.val("");
        passwordInput.val("");
      });
    
      function loginUser(email, password) {
        $.post("/api/login", {
          email: email,
          password: password
        })
          .then(function() {
            window.location.replace("/members");
          })
          .catch(function(err) {
            console.log(err);
          });
      }
    });
    