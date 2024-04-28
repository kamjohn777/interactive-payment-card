$(document).ready(function() {
    $('#card-holder').keyup(function() {
        $('.card-holder').text($(this).val());
    });
    $('#card-number').keyup(function() {
        $('.card-number').text($(this).val());
    });
    $('#exp_Date').keyup(function(){
        var value = $(this).val();
        var leftNums = value.substring(0,2);
        var rightNums = value.substring(3,5);
        if (leftNums.length == 2) {
            $('.spn-l-nums').text(leftNums);
        }
        if (rightNums.length == 2) {
            $('.spn-r-nums').text(rightNums);
        }
    });
    $('#cvc-elms').keyup(function() {
        $('.cvc-elm').text($(this).val());
    });

    $('.ui.blue.submit.button').click(function(e) {
        e.preventDefault(); // prevent the form from submitting
        let cardNumber = $('#card-number').val();
        let cvc = $('#cvc-elms').val();
        if(cardNumber.length < 16 || cardNumber.length > 16) {
            alert('Card number is invalid');
        } else if (cardNumber.length == 16) {
            alert('Card number is valid');
        }

        if(cvc.length < 3 || cvc.length > 3) {
            alert('CVC is invalid');
        } else if (cvc.length == 3) {
            alert('CVC is valid');
        }
    });
});