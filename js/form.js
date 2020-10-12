// VALIDATION
  
$(document).ready(function () {

    const $successAlert = $('<div class="col-md-9 offset-md-3 alert alert-success alert-dismissible fade show mt-4" role="alert">'
       + '<strong>Congratulations!</strong> Message was sent successfully.'
       + '<button type="button" class="close" data-dismiss="alert" aria-label="Close">'
       + '<span aria-hidden="true">&times;</span>'
       + '</button>'
    + '</div>')

    const $dangerAlert = $('<div class="col-md-9 offset-md-3 alert alert-danger alert-dismissible fade show mt-4" role="alert">'
        + '<strong>Warning!</strong> Message was not sent. Try again'
        + '<button type="button" class="close" data-dismiss="alert" aria-label="Close">'
        + '<span aria-hidden="true">&times;</span>'
        + '</button>'
    + '</div>')

    const showAlert = function (el, form){                   
        form.append(el)
        const element = el.first()
        element.addClass("show")

        //alert off after 2000ms
        setTimeout(() => {
           element.remove()
        }, 2000)
    };

    validateEmail = function(element) {
        if (element.type === 'email') {
            if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(element.value)) {
                return true
            } else {
                $("#invalid-email").text("Email is invalid")
                $("#inputEmail1").addClass("is-invalid")
                return false
            }
        }
        return true
    }

    /* single item validation */
    checkThis = function (t) {
        var isValid = true
        $(t).removeClass("is-valid").removeClass("is-invalid")
        if ($(t).val() != "") {
            return true
        } else {
            $(t).addClass("is-invalid")
            if (t.type === 'email') {
                $("#invalid-email").text("This field is required")
            }
            isValid = false
        }
        return isValid
    }
  
    /* form validation */
    checkForm = function (f) {
        var isValid = true
        $(f).find(".required").each(function () {
            if (!checkThis(this) || !validateEmail(this)) {
                isValid = false
            }
        })
        return isValid
    }
  
    /* bind onChange event to required items */
    $("#emailForm")
        .find(".required")
        .on("change", function () {
            const firstCheck = checkThis(this)
            if (firstCheck) {
                validateEmail(this)
            }
        });
  
    /* submit processing */
    $("#emailForm").submit(function (e) {
        var form = $(this)
        if (!checkForm(form)) {
            return false
        }

        // Proper JSON object with form values
        formData = {
            name: $('input[name=Name]').val(),
            email: $('input[name=Email]').val(),
            subject: $('input[name=Subject]').val(),
            message: $('textarea[name=Message]').val()
        };

        $.ajax({
            url : "mail.php",
            type: "POST",
            data : formData,
            success: function(data, textStatus, jqXHR)
            {
                showAlert($successAlert, form)  

                //reset form
                $('#emailForm').closest('form').find(":input").val("")
            },
            error: function (jqXHR, textStatus, errorThrown)
            {
                showAlert($dangerAlert, form)
            }
       })

        return false
    });

});