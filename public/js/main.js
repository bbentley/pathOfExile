$(document).ready(function() {
    jsonToList();


});
// This does not work
// $('#calculator  li a').on('click', function() {
//     console.log($(this).text());
// });

/**
 * Add events handlers
 */
(function() {
    const $body = $('body');
    $body.on('click', '#calculator .dropdown a', function() {
        const $this = $(this);
        const text = $this.text();
        const newButton = text + ' ' + '<span class="caret"></span>';
        $('#calculator-button').html(newButton);
        $('#calculator-button').val($this.parent().data().alias);
        console.log($this.parent().data());
        checkButton();


    });

    const $convert = $('#quantity button');
    $convert.on('click', function() {
        console.log('button Clicked!');
        convertCalculator();
    });

    const $amount = $('#quantity div input');
    $amount.on('input', function() {
        checkButton();
    });

}());
// This works
