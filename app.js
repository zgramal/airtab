var Airtable = require('airtable');
var base = new Airtable({apiKey: 'keyRduIsZY4latCAb'}).base('appqxMXAOE8J87fjX');

base('Amal').select({
    view: 'Grid view'
}).firstPage(function(err, records) {
    if (err) { console.error(err); return; }
    records.forEach(function(record) {
        console.log('Retrieved', record.get('id'));
    });
});