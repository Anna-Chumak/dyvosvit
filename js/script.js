function sendEmail() {
  let tempParams = {
    from_name: document.getElementById("fromName").value,
    user_email: document.getElementById("userEmail").value,
    user_phone: document.getElementById("userPhone").value,
    message: document.getElementById("message").value,
  };

  emailjs
    .send("service_4m9mdux", "template_euyktdq", tempParams)
    .then(function (res) {
      console.log("success", res.status);
    });
}

document
  .getElementById("submit-button")
  .addEventListener("click", function (e) {
    let name = document.getElementById("fromName");
    let email = document.getElementById("userEmail");
    let phoneNumber = document.getElementById("userPhone");
    let message = document.getElementById("message");

    e.preventDefault();
    sendEmail();
    name.value = "";
    email.value = "";
    phoneNumber.value = "";
    message.value = "";
  });
