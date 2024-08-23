/**
 * 2. Complete the following javascript function that accepts the url and the
parameter name and returns the value of that parameter.
function getUrlParameterValue(url, parameter) {
Todo: complete this code
}
Example: If
var url =
“https://www.kommunicate.io/poweredby?utm_source=https://www.kommunicate.io/
&u tm_medium=webplugin&utm_campaign=poweredby”;
Then calling getUrlParameterValue(url, “utm_medium”) should return
“webplugin” And calling getUrlParameterValue(url, “utm_campaign”) should
return “poweredby”

 * 
 */

function getUrlParameterValue(url, parameter) {

    let urlObject = new URL(url);
    
    let params = new URLSearchParams(urlObject.search);
    
    return params.get(parameter);
}

var url = "https://www.kommunicate.io/poweredby?utm_source=https://www.kommunicate.io/&utm_medium=webplugin&utm_campaign=poweredby";

console.log(getUrlParameterValue(url, "utm_medium"));   // Output: "webplugin"
console.log(getUrlParameterValue(url, "utm_campaign")); // Output: "poweredby"
