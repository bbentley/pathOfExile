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
                    $('#calculator ul').append('<li' +
                        ' data-alias="' +
                        this.gsx$alias.$t +
                        '" data-cost="' +
                        this.gsx$cost.$t +
                        '" data-type="' +
                        this.gsx$type.$t +
                        '">' +
                        '<a href="#">' +
                        this.gsx$name.$t +
                        '</a></li>'

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
    const currencyVal = currency(currencyType);
    const nextCurrencyName = getName(currencyVal.type);
    let myString = currencyType + ' is worth ' + currencyNum;
    let nextString = nextCurrencyName + ' is next.'
    console.log(currencyVal.type);
    $('#update h1').after('<div>' + myString + '</div>');
    $('#update h1').after('<div>' + nextString + '</div>');
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


const currency = function(buttonText) {
    let currencyData = {};
    let type;
    let alias;
    let cost;
    let name;
    $('#calculator ul li').each(function() {

        const $this = $(this);

        type = $this.data().type;
        alias = $this.data().alias;
        cost = $this.data().cost;
        name = $this.children().text();

        // currencyData = {
        //     name: {
        //         'alias': alias,
        //         'cost': cost,
        //         'type': type
        //     }
        // };
        currencyData[name] = {
            'alias': alias,
            'cost': cost,
            'type': type
        };
        //currencyData.name['alias'] = alias;

        //console.log(type + ' ' + alias + ' ' + cost + ' ' + name);
        //console.log(currencyData);
    });
    for (var prop in currencyData) {
        if (prop === buttonText) {
            // console.log('currencyData.' + prop, '=', currencyData[prop]);
            return currencyData[prop];
        }

    }
    return false;


};

const getName = function(nextType) {
const data = {};
    let name;
    let alias;

    $('#calculator ul li').each(function() {

        const $this = $(this);

        alias = $this.data().alias;
        name = $this.children().text();
        data[alias] = {
            'name': name
        };
    });
    //console.log(data);
    for (var prop in data) {
        if (prop === nextType) {
            return data[prop].name;
        }

    }
    return false;
};


//http://spreadsheets.google.com/feeds/list/o13394135408524254648.240766968415752635/od6/public/values
