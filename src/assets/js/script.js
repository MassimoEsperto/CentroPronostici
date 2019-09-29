
function showRegisterForm(){
    $('.loginBox').fadeOut('fast',function(){
        $('.registerBox').fadeIn('fast');
        $('.login-footer').fadeOut('fast',function(){
            $('.register-footer').fadeIn('fast');
        });
        $('.modal-title').html('REGISTRATI');
    }); 
    $('.error').removeClass('alert alert-danger').html('');
       
}
function showLoginForm(){
    $('#loginModal .registerBox').fadeOut('fast',function(){
        $('.loginBox').fadeIn('fast');
        $('.register-footer').fadeOut('fast',function(){
            $('.login-footer').fadeIn('fast');    
        });
        
        $('.modal-title').html('LOGIN');
    });       
     $('.error').removeClass('alert alert-danger').html(''); 
}

function openLoginModal(){
    showLoginForm();
    setTimeout(function(){
        $('#loginModal').modal('show');    
    }, 230);
    
}
function openRegisterModal(){
    showRegisterForm();
    setTimeout(function(){
        $('#loginModal').modal('show');    
    }, 230);
    
}

function loginUser(){
   var pass=$('input[type="password"]').val();
   var user=$('input[type="text"]').val();
   
   alert('login');
}


function loginUserOld(){
   var query="select * from Users where id <3";

    $.ajax({
        type: "POST",
        url: 'json_example.php', 
        data: { query: "select * from Users where id <3", location: "Boston" },
        success: function (response) {
           
            var tmp=JSON.stringify(response);
               alert(response); 
                var object=JSON.parse(response);
              var iduser= object.select1[0].id;
               alert(iduser);
                
        },
        failure: function (response) {
            shakeModal();
        },
        async: true

    });

/*   Simulate error message from the server   */
alert($('input[type="password"]').val());
event.preventDefault();
//     shakeModal();
	 
}

function createUser(){
	shakeModal();
  event.preventDefault();

}

function shakeModal(){
    $('#loginModal .modal-dialog').addClass('shake');
             $('.error').addClass('alert alert-danger').html("MAIL O PASSWORD ERRATE!!");
             $('input[type="password"]').val('');
             setTimeout( function(){ 
                $('#loginModal .modal-dialog').removeClass('shake'); 
    }, 1000 ); 
}

function cripta(tmp){
	
	return "ajhe34"+tmp+"kk8934nhuj";
}

function decripta(tmp){	

	return tmp.replace('ajhe34','').replace('kk8934nhuj','').trim();
	
}