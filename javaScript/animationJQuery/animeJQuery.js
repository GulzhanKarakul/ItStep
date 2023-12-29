$(document).ready(function() {
    $('input').on('input', function() {
        let totalInputs = $('input:required').length;
        let filledInputs = $('input:required').filter(function() {
            return $(this).val() !== '';
        }).length;

        let progress = (filledInputs / totalInputs) * 100;

        if (progress === 0) {
            $('.progress-container').hide();
        } else {
            $('.progress-container').show();
            $('.progress-bar').css('width', progress + '%');
        }
    });
});
