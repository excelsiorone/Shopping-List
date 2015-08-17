$(function() {

    $('form').on('submit', function(e) {

        e.preventDefault();

        var $addItems = $('.add-items').val();
        $('ul').append('<li>' + $addItems + '</li>')


    })

})

$(document).on('click', '#reset', function(e) {
	$('ul').empty();
})