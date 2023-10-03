jQuery(document).ready(function ($) {
    // Name Split
    $("#student_name").change(function () {
        var nameVal = $(this).val();
        var nameSplit = nameVal.split(" ");
        var firstName = nameSplit[0];
        var lastName = nameSplit.slice(1).join(" ");
        $(".full-name").fadeOut(0);
        $('#first_name').val(firstName);
        $('#last_name').val(lastName);
        $('.name-split').fadeIn(100);
    });

    // Email Split
    $("#email_address").change(function () {
        var emailVal = $(this).val();
        var emailSplit = emailVal.split("@");
        $(".full-email").fadeOut(0);
        $('#email').val(emailVal);
        $('#username').val(emailSplit[0]);
        $('.email-split').fadeIn(100);
    });

    // Password Split
    $("#full_password").change(function () {
        var passwordVal = $(this).val();
        $(".full-password").fadeOut(0);
        $('#password').val(passwordVal);
        $('.password-split').fadeIn(100);
        $('#password_confirm').focus();
    });
});
