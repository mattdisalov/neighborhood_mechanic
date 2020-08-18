$(document).ready(function () {
    $('.submit').click(function (event) {

        let email = $('.email').val()
        let name = $('.name').val()
        let subject = $('.subject').val()
        let message = $('.message').val()
        let statusEl = $('.status')
        statusEl.empty()

        if(email.length > 5 && email.includes('@') && email.includes('.')) {
            statusEl.append('<div style="color:green">E-mail <br> is <br> valid</div>')
        } else {
            event.preventDefault()
            statusEl.append('<div>E-mail <br> not <br> valid</div>')
        }

        if(name.length >= 1) {
            statusEl.append('<div style="color:green">Name <br> is <br> valid</div>')
        } else {
            event.preventDefault()
            statusEl.append('<div>Name <br> not <br> valid</div>')
        }

        if(subject.length >= 2) {
            statusEl.append('<div style="color:green">Subject <br> is <br> valid</div>')
        } else {
            event.preventDefault()
            statusEl.append('<div>Subject <br> not <br> valid</div>')
        }

        if(message.length >= 10) {
            statusEl.append('<div style="color:green">Message <br> is <br> valid</div>')
        } else {
            event.preventDefault()
            statusEl.append('<div>Message <br> not <br> valid</div>')
        }
    })   
})