console.log('client.js is loaded');

$(document).ready(onReady);

function onReady() {
    console.log('jQuery is loaded');
    $('#makeQuoteButton').on('click', function () {
        $.ajax({
            type: 'GET',
            url: '/quote'
        })
            .then(function (response) {
                console.log(response);
                $('#quote').empty();
                $('#quote').append('<p>' + response.quote + ' - ' + response.author + '</p');
            });
    });
    $.ajax({
        type: 'GET',
        url: '/all-quotes'
    })
        .then(function (response) {
            for (let i = 0; i < response.length; i++) {
                $('#allQuotes').append('<ul><li>' + response[i].quote + ' - ' + response[i].author + '</li></ul>');
            }
        });
}