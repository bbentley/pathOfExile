'use strict';
const jsonToList = function() {
    // ID of the Google Spreadsheet
    //  const spreadsheetID = "SPREADSHEET KEY";
    const spreadsheetID = "1XG0Eg4JPN5DV8pfbwEzQp2gCVuKQmORZmtaBuh-R3XA";
    // https://docs.google.com/spreadsheets/d/1ypN0qvA2GFqTHwgXRXaYoxKHFd0MsDs3bFXUFQ1xHH0/pubhtml

    // https://docs.google.com/spreadsheets/d/1XG0Eg4JPN5DV8pfbwEzQp2gCVuKQmORZmtaBuh-R3XA/pubhtml
    // Make sure it is public or set to Anyone with link can view
    // Replaced od6/public with 1/public
    const url = 'https://spreadsheets.google.com/feeds/list/' + spreadsheetID + '/1/public/values?alt=json';
    console.log(url);
    $.getJSON(url, function(data) {

        const entry = data.feed.entry;

        $(entry).each(
            function(key, value) { // console.log(entry);
                //console.log();
                // Checks that rows contain content
                if (this.gsx$name.$t.trim()) {
                    $('#calculator ul').append('<li'
                      + ' data-alias="'
                      + this.gsx$alias.$t
                      + '" data-cost="'
                      + this.gsx$cost.$t
                      + '" data-type="'
                      + this.gsx$type.$t
                      + '">'
                      +'<a href="#">'
                      + this.gsx$name.$t
                      + '</a></li>'

                    );
                }
                // $('.results').prepend('<h2>' + this.gsx$name.$t + '</h2><p>' + this.gsx$alias.$t + '</p><p>' + this.gsx$cost.$t + '</p><p>' + this.gsx$type.$t + '</p>');
            });

    });
};

const convertCalculator = function() {
    // $('#calculator-button');
    const $button = $('#calculator-button');
    const $amount = $('#quantity div input');
    const currencyType = $button.text().trim();
    const currencyNum = $amount.val();
    let myString = currencyType + 'is worth ' + currencyNum;
    $('#update h1').after('<div>' + myString + '</div>');
};

const checkButton = function() {

    const $button = $('#calculator-button');
    const $amount = $('#quantity div input');
    const $convert = $('#quantity button');
    if ($button.val() !== 'default' && $amount.val() > 0) {
        $convert.attr('disabled', false);
    } else {
        $convert.attr('disabled', true);
    }
    console.log('hello');
};

//http://spreadsheets.google.com/feeds/list/o13394135408524254648.240766968415752635/od6/public/values
