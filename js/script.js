$(document).ready(function() {
    // Fonction de validation à la soumission du formulaire
    $("#bankForm").submit(function(event) {
        event.preventDefault();
        
        let isValid = true;

        // Validation du nom
        if ($("#name").val().length < 3) {
            $("#nameError").show();
            isValid = false;
        } else {
            $("#nameError").hide();
        }

        // Validation du prénom
        if ($("#firstName").val().length < 3) {
            $("#firstNameError").show();
            isValid = false;
        } else {
            $("#firstNameError").hide();
        }

        // Validation de la date de naissance
        let dob = $("#dob").val();
        let dobPattern = /^\d{2}\/\d{2}\/\d{4}$/;
        if (!dob.match(dobPattern)) {
            $("#dobError").show();
            isValid = false;
        } else {
            $("#dobError").hide();
        }

        // Validation de l'email
        let email = $("#email").val();
        let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!email.match(emailPattern)) {
            $("#emailError").show();
            isValid = false;
        } else {
            $("#emailError").hide();
        }

        // Validation du code confidentiel
        let code = $("#code").val();
        let codePattern = /^FR\d{5}[A-Z]{3}[.-_]*x$/;
        if (!code.match(codePattern)) {
            $("#codeError").show();
            isValid = false;
        } else {
            $("#codeError").hide();
        }

        if (isValid) {
            $("#modal").fadeIn();
        }
    });

    // Fonction de réinitialisation du formulaire
    $("#cancelBtn").click(function() {
        $("#bankForm")[0].reset();
        $(".error").hide();
    });

    // Fermeture de la modal
    $("#closeModal").click(function() {
        $("#modal").fadeOut();
    });

    // Transformation automatique des champs à la saisie
    $("#name").on("input", function() {
        $(this).val($(this).val().toUpperCase());
    });

    $("#firstName").on("input", function() {
        let value = $(this).val();
        $(this).val(value.charAt(0).toUpperCase() + value.slice(1).toLowerCase());
    });

    $("#dob").on("input", function() {
        let value = $(this).val();
        $(this).val(value.replace(/[.-]/g, '/'));
    });
});
