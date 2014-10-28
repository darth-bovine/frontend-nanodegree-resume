//$("#main").append("Richard Boyd\n");
//var thisIsAVar = "This is a test";
//console.log(thisIsAVar);
//var email = "foo@foobar.com";
//var funThoughts = thisIsAVar.replace("test","sprout");
//$("#main").append(funThoughts);
var name = "Richard Boyd";
var role = "HDL Engineer";
var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var var1 = "audacity";
var var2 = var1.slice(1,8);
$("#main").append(var2);
