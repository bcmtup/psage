//var apiurl = "http://maztechnosoft.com/tawatadkaframe/webservice/api";
//var apiurl = "http://localhost/Mazhar/tawatadkaframe/webservice/api";
var apiurl =  "";///"http://maztechnosoft.com/Ecommnew/webservice/api";
var baseurl = "";//"http://abc.justpaydeal.com/";

function setapiurl(){
apiurl = $('#apiurl').val();
}


function setbaseurl(){
baseurl = $('#baseurl').val();
}



 
            
var showconfirm = function(formtowork,title,text) {	
swal({
title: title,
text: text,
icon: 'warning',
showCancelButton: true,
confirmButtonColor: '#DD6B55',
dangerMode: true,
buttons: {
    catch: {
      text: "No!",
      value: false,
      className: "btn btn-danger btn-corner btn-lg",
    },
    catch2: {
      text: "Yes!",
      value: true,
      className: "btn btn-corner btn-lg",
    },
    
    
  },
  

 }).then(function(isConfirm) { if (isConfirm) { formtowork.submit();} else { } })
}

var FormValidationMd = function(form1) {

    var formcheck = function(form1) {
    
$.validator.addMethod('IP4Checker', function(value) {
          //  var ipformat = "^(?:(?:25[0-5]2[0-4][0-9][01]?[0-9][0-9]?)\.){3}" +
           //     "(?:25[0-5]2[0-4][0-9][01]?[0-9][0-9]?)$";
            var ipformat = /^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/; 
     ipformat = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/; 
  
                //alert(value);
                if(value.match(ipformat));
              //  alert(value.match(ipformat));
                return value.match(ipformat);
            }, 'Invalid IP address');
            
    form1.validate({
ignore: ".ignore",
errorClass: "text-danger",
    rules: {
    	username: {
        required: true
        },
        name: {
        required: true
        },
          ip: {
                        required: true,
                        IP4Checker: true
                    },
      
    email: {
    	required: true,
        email: true
        },
        
         mobile: {
         required: true,
         number: true,
         minlength: 10,
                    maxlength: 10,
      },
     oldpassword: {
         required: true,
         minlength: 3,
                    maxlength: 10,
      },
      wurl: {
         required: true,
         url:true,
      },
      newpassword: {
         required: true,
         minlength: 3,
                    maxlength: 10,
      },
      cpassword: {
                    equalTo: "#newpassword"
                },
      walletaddress: {
        required: true
       },
      withdrawamt: {
        required: true,
        number: true,
        max: parseFloat(form1.find('input[name="max"]').val())
      },
      hiddenRecaptcha: {
                required: function () {
                    if (grecaptcha.getResponse() == '') {
                        return true;
                    } else {
                        return false;
                    }
                }
            }

    },
    // Specify validation error messages
    messages: {
    	username: {
        required: "Please enter your name"
        },
          
        name: {
        required: "Please enter your name"
        },
        hiddenRecaptcha:  {
        required: "Please identify that your are human"
        },
       walletaddress: {
        required: "Please enter wallet address"
        },
      withdrawamt: {
        required: "Please enter amount to withdrawal",
        number: "Invalid amount  to withdraw",
        max: "maximum you can withdrawal " + parseFloat(form1.find('input[name="max"]').val()),
      },
      
       mobile: {
        required: "enter 10 digit mobile no",
        number: "enter 10 digit mobile no"
      },
      
      wurl: {
        required: "enter valid web url",
        url: "enter valid web url"
      },
      
      
      oldpassword: "password can not be left blank",
      newpassword: {
        required: "password can not be left blank",
      },
      
      cpassword: {
        equalTo: "password confirmation not match with new passwords",
      },
      email: "Please enter a valid email address"
    },
    highlight: function(element, errorClass) {
      //  $(element).removeClass(errorClass);
    },
    submitHandler: function(form) {
    formaction(form1);
   }
  });
  		
  		
} 

    return {
        //main function to initiate the module
        init: function(form1) {
            formcheck(form1);
           
        }
    };
}();

var updateredirect = function(obj,redirecttourl){
	$.ajax({
    	type: "POST",
        url: apiurl,
        data: JSON.stringify(obj),
    	success: function(response){
    		//alert(response);
     		response = $.parseJSON(response);
  
    		var status = response['status'];
    		var displayicon;
    		var title;

    		if(status == 1){
    			title = "Success";
    			displayicon = 'success';
   			}else{
    			title = "Error"
    			displayicon = 'error';
    		}
    
    swal({
         title: title,
         text: ''+response['message'],
         icon: displayicon
    }).then(function() {
            window.location = redirecttourl;
        });
    
       		 }
       		 
        });
}

var updateaction = function(obj){
	$.ajax({
    	type: "POST",
        url: apiurl,
        data: obj,
    	success: function(response){
    		//alert(response);
     		response = $.parseJSON(response);
  
    		var status = response['status'];
    		var displayicon;
    		var title;
    		if(status == 1){
    			title = "Update";
    			displayicon = 'success';
    			datareloading();
    			//dataloading();
    			//var table = $('#row-select').DataTable();
      			//table.ajax.reload();
   			}else{
    			title = "Error"
    			displayicon = 'error';
    		}
    
    swal({
         title: title,
         text: ''+response['message'],
         icon: displayicon
    })
    
       		 }
       		 
        });
}

var updateclose = function(obj){
	$.ajax({
    	type: "POST",
        url: apiurl,
        data: JSON.stringify(obj),
    	success: function(response){
    		//alert(response);
     		response = $.parseJSON(response);
  
    		var status = response['status'];
    		var displayicon;
    		var title;
    		if(status == 1){
    			title = "Update";
    			displayicon = 'success';
    			///datareloading();
    			//dataloading();
    			//var table = $('#row-select').DataTable();
      			//table.ajax.reload();
   			}else{
    			title = "Error"
    			displayicon = 'error';
    		}
    
    swal({
         title: title,
         text: ''+response['message'],
         icon: displayicon
    })
    
       		 }
       		 
        });
}

var updatereload = function(obj){
	$.ajax({
    	type: "POST",
        url: apiurl,
        data: JSON.stringify(obj),
    	success: function(response){
    		//alert(response);
     		response = $.parseJSON(response);
  
    		var status = response['status'];
    		var displayicon;
    		var title;
    		if(status == 1){
    			title = "Update";
    			displayicon = 'success';
    			///datareloading();
    			//dataloading();
    			//var table = $('#row-select').DataTable();
      			//table.ajax.reload();
   			}else{
    			title = "Error"
    			displayicon = 'error';
    		}
    
   swal({
         title: title,
         text: ''+response['message'],
         icon: displayicon
    }).then(function() {
            location.reload();
        });
    
    
       		 }
       		 
        });
}

var confirmupdate = function(title,text,obj) {	
swal({
title: title,
text: text,
icon: 'warning',
showCancelButton: true,
confirmButtonColor: '#DD6B55',
dangerMode: true,
buttons: {
    catch: {
      text: "No!",
      value: false,
      className: "btn btn-danger btn-corner btn-lg",
    },
    catch2: {
      text: "Yes!",
      value: true,
      className: "btn btn-corner btn-lg",
    },
    
    
  },
  

 }).then(function(isConfirm) { if (isConfirm) { updateaction(obj); } else { } })
}

var dataloading = function(obj){
	$.ajax({
    	type: "POST",
        url: apiurl,
        data: obj,
    	success: function(response){
         	datadisplay(response);		
       	}       		 
    });
}

var confirmresponse = function(title,text,obj) {	
swal({
title: title,
text: text,
icon: 'warning',
showCancelButton: true,
confirmButtonColor: '#DD6B55',
dangerMode: true,
buttons: {
    catch: {
      text: "No!",
      value: false,
      className: "btn btn-danger btn-corner btn-lg",
    },
    catch2: {
      text: "Yes!",
      value: true,
      className: "btn btn-corner btn-lg",
    },
    
    
  },
  

 }).then(function(isConfirm) { if (isConfirm) { dataresponse(obj);
 } else { return null} })
}

var dataresponse = function(obj){
	$.ajax({
    	type: "POST",
        url: apiurl,
        data: obj,
    	success: function(response){
    		//alert(response);
    		responsereceive(response);		
       	}       		 
    });
}

var dataimageloading = function(obj){
	 $.ajax({
        url: apiurl,
        type:"POST",
        processData:false,
        contentType: false,
        data: obj,
        success: function(response){
    	datadisplay(response);		
  		}
	});
}

var dataimageredirect = function(obj,redirecttourl){
	 $.ajax({
        url: apiurl,
        type:"POST",
        processData:false,
        contentType: false,
        data: obj,
        success: function(response){
        	//alert(response);
     		response = $.parseJSON(response);
  
    		var status = response['status'];
    		var displayicon;
    		var title;

    		if(status == 1){
    			title = "Success";
    			displayicon = 'success';
   			}else{
    			title = "Error"
    			displayicon = 'error';
    		}
    
    swal({
         title: title,
         text: ''+response['message'],
         icon: displayicon
    }).then(function() {
            window.location = redirecttourl;
        });
    
       		 }
	});
}
//********** working fine

var showconfirmdialog = function(title,text) {	
swal({
title: title,
text: text,
icon: 'warning',
showCancelButton: true,
confirmButtonColor: '#DD6B55',
dangerMode: true,
buttons: {
    catch: {
      text: "No!",
      value: false,
      className: "btn btn-danger btn-corner btn-lg",
    },
    catch2: {
      text: "Yes!",
      value: true,
      className: "btn btn-corner btn-lg",
    },
    
    
  },
  

 }).then(function(isConfirm) { if (isConfirm) { confirmdialog();
 } else { } })
}



var formsubmit = function(formurl,mode,id){
	var form = $(document.createElement('form'));
	var input;
	$(form).attr("action", formurl);
	$(form).attr("method", "POST");

	input = $("<input>").attr("type", "hidden").attr("name", "mode").val(mode);
	$(form).append($(input));
	
	input = $("<input>").attr("type", "hidden").attr("name", "id").val(id);
	$(form).append($(input));
	
	form.appendTo( document.body )
	$(form).submit();
}

var formredirect = function(formurl){
	var form = $(document.createElement('form'));
	var input;
	$(form).attr("action", formurl);
	$(form).attr("method", "POST");

	form.appendTo( document.body )
	$(form).submit();
}
