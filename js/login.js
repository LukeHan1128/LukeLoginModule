/**
 * Write : 20190412
 * Update : 20190416
 * Writer : LukeHan
 */

$(document).ready(function(){
	// login
	$('#loginBtn').on('click', function(){
		login_fnt();
	});
});


// id check
function validation_id_Fnt(){
	var $id = $('input[name=mid]');
	var $msg = $('#sign_msg_id');
	var res = true;

	$msg.text('');
	
	if(!validation.val_id.test($id.val())) {
		$msg.text(msg.not_valid_id);
		res = false;
	}
	return res;
}

// pw check
function validation_pw_Fnt(){
	var $pw = $('input[name=mpw]');
	var $msg = $('#sign_msg_pw');
	var res = true;

	$msg.text('');

	if(!validation.val_id.test($pw.val())) {
		$msg.text(msg.not_valid_pw);
		res = false;
	}
	return res;
}

// all check
function validationFnt() {
	var res = true;
	/*
	console.log(validation_id_Fnt() +' // '+ validation_pw_Fnt() +' // '+ validation_pwre_Fnt() +' // '+ validation_name_Fnt() 
						+' // '+ validation_phone2_Fnt() +' // '+ validation_phone3_Fnt() +' // '+ validation_mail_Fnt()); //*/
	if( !(validation_id_Fnt() && validation_pw_Fnt()) ) {
		res = false;
	}
	return res;
}

//login
function login_fnt(){
	if(!validation_id_Fnt()){
		alert(msg.not_valid_id);
		return;
	}
	
	$.ajax({
		type: 'POST',
		data: $('form[name=loginForm]').serialize(),
		success: function(result){
			alert(result);
			if(msg.login_success == result){
				location.href = "/member/main";
			}
		},
	     error:function(request, status, error){
			alert(msg.not_valid_used_id);
			console.log("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
		}
	});
}
