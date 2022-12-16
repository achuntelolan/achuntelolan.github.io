$("#submit-form").submit((e)=>{
    e.preventDefault()
    $.ajax({
        url:"https://script.google.com/macros/s/AKfycbxoZTrTGHnOainpFw-4Gh0eo9RBMiRbOUC31BOjuPq76wC6Z926DmhFijdO3p78jUmwpA/exec",
        data:$("#submit-form").serialize(),
        method:"post",
        success: function () {
            $('#success').html("<div class='alert alert-success'>");
            $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                    .append("</button>");
            $('#success > .alert-success')
                    .append("<strong>Your message has been sent. </strong>");
            $('#success > .alert-success')
                    .append('</div>');
            $('#contactForm').trigger("reset");
        },
        error: function () {
            $('#success').html("<div class='alert alert-danger'>");
            $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                    .append("</button>");
            $('#success > .alert-danger').append($("<strong>").text("Sorry " + name + ", it seems that our mail server is not responding. Please try again later!"));
            $('#success > .alert-danger').append('</div>');
            $('#contactForm').trigger("reset");
        },
        complete: function () {
            setTimeout(function () {
                $this.prop("disabled", false);
            }, 1000);
        }
    })
})