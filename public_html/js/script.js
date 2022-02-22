$(document).ready(function(){
    $('#contact').validate({
        debug: true,
        errorClass: 'alert alert-danger',
        ErrorLabelContainer: '#output-area',
        errorElement: 'div',
        // rules here define what is good or bad input
        //each rule starts with the form input element's NAME attribute
        rules: {
            name: {
                required: true
            },
            email: {
                email: true,
                required: true
            },
            message:{
                required: true,
                maxlength: 2000
            }
        },
        messages:{
            name: {
                required: 'Name is required.'
            },
            email: {
                email: 'Please provide a valid email.',
                required: 'Email is required.'
            },
            message: {
                required: 'A Message is required.',
                maxlength: 'Message is too long.'
            }
        },
        submitHandler: (form) => {
            console.log('is this thing on?')
            $('#contact').ajaxSubmit({
                type: 'POST',
                url: $('#contact').attr('action'),
                success: (ajaxOutput) => {
                    $('#output-area').css('display','')
                    $('#output-area').html(ajaxOutput)

                    if($('.alert-success').length >= 1){
                        $('#contact')[0].reset()
                    }

                }
            })


        }
    })
})