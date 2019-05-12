/**
 * Write : 20190406
 * Update : 20190408
 * Writer : LukeHan
 */

$(document).ready(function(){
	// sign up
	$('#signup_btn').on('click', function(){
		signup_fnt();
	});
	
	// id overlap check
	$('#id_ck').on('click', function() {
		id_overlap_ck_fnt();
	});
	
	// id chekc - input
	$('input[name=mid]').focusout(function() {
		validation_id_Fnt();
	});

	// pw check - input
	$('input[name=mpw]').focusout(function() {
		validation_pw_Fnt();
	});

	// pwre check - input
	$('input[name=mpwre]').focusout(function() {
		validation_pwre_Fnt();
	});

	// name check - input
	$('input[name=mname]').focusout(function() {
		validation_name_Fnt();
	});

	// phone2 check - input
	$('input[name=phone2]').focusout(function() {
		validation_phone2_Fnt();
	});
	
	// phone3 check - input
	$('input[name=phone3]').focusout(function() {
		validation_phone3_Fnt();
	});
	
	// mail check - input
	$('input[name=mmail]').focusout(function() {
		validation_mail_Fnt();
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

// pwre check
function validation_pwre_Fnt(){
	var $pw = $('input[name=mpw]');
	var $pwre = $('input[name=mpwre]');
	var $msg = $('#sign_msg_pw');
	var res = true;

	$msg.text('');

	if(!validation.val_id.test($pwre.val())) {
		$msg.text(msg.not_valid_pw);
		res = false;
	}
	
	if($pw.val() != $pwre.val()) {
		$msg.text(msg.not_same_pw);
		res = false;
	}
	return res;
}

// name check
function validation_name_Fnt(){
	var $name = $('input[name=mname]');
	var $msg = $('#sign_msg_name');
	var res = true;

	$msg.text('');

	if(!validation.val_name.test($name.val())) {
		$msg.text(msg.not_valid_name);
		res = false;
	}
	return res;
}

// phone2 check
function validation_phone2_Fnt(){
	var $phone2 = $('input[name=phone2]');
	var $msg = $('#sign_msg_phone');
	var res = true;

	$msg.text('');

	if(!validation.val_num.test($phone2.val()) || 3 > $phone2.val().length) {
		$msg.text(msg.not_valid_phone);
		res = false;
	}
	return res;
}

// phone3 check
function validation_phone3_Fnt(){
	var $phone3 = $('input[name=phone3]');
	var $msg = $('#sign_msg_phone');
	var res = true;

	$msg.text('');

	if(!validation.val_num.test($phone3.val()) || 4 > $phone3.val().length) {
		$msg.text(msg.not_valid_phone);
		res = false;
	}
	return res;
}

// mail check
function validation_mail_Fnt(){
	var $mail = $('input[name=memail]');
	var $msg = $('#sign_msg_email');
	var res = true;

	$msg.text('');

	if(!validation.val_mail.test($mail.val())) {
		$msg.text(msg.not_valid_mail);
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
	if( !(validation_id_Fnt() && validation_pw_Fnt() && validation_pwre_Fnt() && validation_name_Fnt() 
			&& validation_phone2_Fnt() && validation_phone3_Fnt() && validation_mail_Fnt()) ) {
		res = false;
	}
	return res;
}

// signup
function signup_fnt(){
	if(validationFnt()) {
		var $phone1 = $('select[name=phone1]');
		var $phone2 = $('input[name=phone2]');
		var $phone3 = $('input[name=phone3]');
		
		var phone = $phone1.val() + '-' + $phone2.val() + '-' + $phone3.val();
		
		$('input[name=mphone]').val(phone);
		
		$phone1.remove();
		$phone2.remove();
		$phone3.remove();
		
		$.ajax({
			type: 'POST',
			data: $('#signform').serialize(),
			success: function(result){
				alert(result);
				console.log(msg.signup_success);
				
				if(msg.signup_success == result){
					location.href="login";
				}
			},
		     error:function(request,status,error){
				alert(msg.signup_fail);
				console.log("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
			}
		});
	}
}


//check id
function id_overlap_ck_fnt(){
	if(!validation_id_Fnt()){
		alert(msg.not_valid_id);
		return;
	}
	
	$.ajax({
		url: '/member/idcheck',
		type: 'POST',
		data: { id : $('input[name=mid]').val() },
		success: function(result){
			alert(result);
		},
	     error:function(request, status, error){
			alert(msg.not_valid_used_id);
			console.log("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
		}
	});
}
