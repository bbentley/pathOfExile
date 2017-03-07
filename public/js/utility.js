const sheetToJSON = function()  {
// ID of the Google Spreadsheet
//  const spreadsheetID = "SPREADSHEET KEY";
const spreadsheetID = "1XG0Eg4JPN5DV8pfbwEzQp2gCVuKQmORZmtaBuh-R3XA";
// https://docs.google.com/spreadsheets/d/1ypN0qvA2GFqTHwgXRXaYoxKHFd0MsDs3bFXUFQ1xHH0/pubhtml

// https://docs.google.com/spreadsheets/d/1XG0Eg4JPN5DV8pfbwEzQp2gCVuKQmORZmtaBuh-R3XA/pubhtml
// Make sure it is public or set to Anyone with link can view
// Replaced od6/public with 1/public
const url = 'https://spreadsheets.google.com/feeds/list/' + spreadsheetID + '/1/public/values?alt=json';
console.log(url);
$.getJSON(url, function(data)  {

const entry = data.feed.entry;
console.log(entry);

$(entry).each(
function (key, value)  {
  console.log(key + ' ' + value);
$('.results').prepend('<h2>'+this.gsx$name.$t+'</h2><p>'+this.gsx$alias.$t+'</p><p>'+this.gsx$cost.$t+'</p><p>'+this.gsx$type.$t+'</p>');
});

});
};

//http://spreadsheets.google.com/feeds/list/o13394135408524254648.240766968415752635/od6/public/values
