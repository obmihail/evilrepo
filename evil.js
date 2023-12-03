const fs = require('fs');

fs.writeFile("/tmp/test", "Hey there!", function(err) {
    if(err) { return console.log(err); }
    console.log("The file was saved!");
}); 

// Or
fs.writeFileSync('/tmp/evil.tmp', JSON.stringify(process) );
