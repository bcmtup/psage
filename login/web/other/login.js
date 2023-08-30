jQuery(document).ready(function() {

var form1 = $('#loginform');
//var apiurl = "webservice/api";
var	title = "Update Service";
var	text = "Are you sure to update Service detail?";

FormValidationMd.init(form1);

$('#signin').click(function () {
//alert("testor");
form1.submit();
});

});


var formaction = function(form){
//alert("testor 22");
    var email = form.find('input[name="username"]').val();
    //var p = hex_sha512(form.find('input[name="password"]').val());
   
	var newForm = jQuery('<form>', {
        'action': 'prcoessdata',
        'method': 'post'
    });
    
    //alert(email);
    
    //var input = $("<input>").attr("type", "hidden").attr("name", "p").val(p);
	//$(newForm).append($(input));
	
	var input = $("<input>").attr("type", "hidden").attr("name", "email").val(email);
	$(newForm).append($(input));
	
	input = $("<input>").attr("type", "hidden").attr("name", "hmod").val("2");
	$(newForm).append($(input));
    
    newForm.appendTo('body').submit();

}




