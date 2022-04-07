/********************** RSVP **********************/
$('#rsvp-form').on('submit', function (e) {
    e.preventDefault();
    var data = $(this).serialize();

    // $('#alert-wrapper').html(alert_markup('info', '<strong>Just a sec!</strong> We are saving your details.'));

    $.post('https://script.google.com/macros/s/AKfycbwq_5rX44GFm4wgvJkHiiIfjCqoWiT4Sy69wjeEXhd8Q4LW8c8Yw4bVUCSa_c-uc3s/exec', data)
        .done(function (data) {
            console.log(data);
            if (data.result === "error") {
                $('#alert-wrapper').html(alert_markup('danger', data.message));
            } else {
                $('#alert-wrapper').html('');
                // $('#rsvp-modal').modal('show');
            }
        })
        .fail(function (data) {
            console.log(data);
            $('#alert-wrapper').html(alert_markup('danger', '<strong>Sorry!</strong> There is some issue with the server. '));
        });

    alert("Thank you for your Response");

    location.reload();
    return false;
});
