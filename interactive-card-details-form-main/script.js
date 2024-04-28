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
        // Clear previous error messages
        $('.error-message').text('');
    
        let cardHolder = $('#card-holder').val();
        let cardNumber = $('#card-number').val();
        let cvc = $('#cvc-elms').val();
        let expDate = $('#exp_Date').val();
    
        if(cardHolder === '') {
            e.preventDefault(); // prevent the form from submitting
            $('#card-holder-error').text('Card holder name is required');
            return; // exit the function
        }

        if(cardNumber === '') {
            e.preventDefault(); // prevent the form from submitting
            $('#card-number-error').text('Card number is required');
            return; // exit the function
        } else if(cardNumber.length != 16) {
            e.preventDefault(); // prevent the form from submitting
            $('#card-number-error').text('Card number is invalid');
            return; // exit the function
        }
    
        if(cvc === '') {
            e.preventDefault(); // prevent the form from submitting
            $('#cvc-elms-error').text('CVC is required');
            return; // exit the function
        } else if(cvc.length != 3) {
            e.preventDefault(); // prevent the form from submitting
            $('#cvc-elms-error').text('CVC is invalid');
            return; // exit the function
        }
    
        if(expDate === '') {
            e.preventDefault(); // prevent the form from submitting
            $('#exp_Date-error').text('Expiration date is required');
            return; // exit the function
        } else if (!expDate.includes('/')) {
            e.preventDefault(); // prevent the form from submitting
            $('#exp_Date-error').text('Please include a forward slash (/) in the expiration date.');
            return; // exit the function
        }
    });
});