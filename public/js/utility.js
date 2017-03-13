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
        //console.log(entry);

        //         <div class="dropdown">
        //   <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
        //     Dropdown
        //     <span class="caret"></span>
        //   </button>
        //   <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
        //     <li><a href="#">Action</a></li>
        //     <li><a href="#">Another action</a></li>
        //     <li><a href="#">Something else here</a></li>
        //     <li role="separator" class="divider"></li>
        //     <li><a href="#">Separated link</a></li>
        //   </ul>
        // </div>

        $(entry).each(
            function(key, value) { // console.log(entry);
                //console.log();
                // Checks that rows contain content
                if (this.gsx$name.$t.trim()) {
                    $('#calculator ul').prepend('<li data-alias="' + this.gsx$alias.$t + '"><a href="#">' + this.gsx$name.$t + '</a></li>');
                }
                // $('.results').prepend('<h2>' + this.gsx$name.$t + '</h2><p>' + this.gsx$alias.$t + '</p><p>' + this.gsx$cost.$t + '</p><p>' + this.gsx$type.$t + '</p>');
            });

    });
};

const convertCalculator = function() {
    // $('#calculator-button');
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
