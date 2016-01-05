
var Converter = require("csvtojson").Converter;
var con_result = new Converter({});
con_result.on("end_parsed", function (jsonArray) {
   console.log(jsonArray); 
});
 
//read from file 
require("fs").createReadStream("./log.csv").pipe(con_result);