/**
 * Write : 20190406
 * Update : 20190408
 * Writer : LukeHan
 */

var validation = {
	val_id : /^[a-zA-Z0-9]{4,30}$/,
	val_mail : /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
	val_name : /^[가-힣a-zA-Z]{2,20}$/,
	val_phone : /^01([0|1|6|7|8|9]?)-?([0-9]{3,4})-?([0-9]{4})$/,
	val_num : /^[0-9]+$/
}

var msg = {
	valid_id : "사용가능한 아이디 입니다.",
	not_valid_used_id : "사용중인 아이디 입니다.",
	not_valid_id : "아이디는 4~30자의 영문 대소문자와 숫자만 가능합니다.",
	not_valid_pw : "비밀번호는 4~30자의 영문 대소문자와 숫자만 가능합니다.",
	not_same_pw : "비밀번호가 일치하지 않습니다.",
	not_valid_name : "이름은 2~20자의 한글 영문만 가능합니다.",
	not_valid_phone : "연락처를 정확히 입력해 주세요.",
	not_valid_mail : "유효하지 않은 메일입니다.",
	signup_success : "가입이 완료되었습니다.",
	signup_fail : "가입에 실패하였습니다. 잠시후 다시 시도해 주시기 바랍니다",
	login_success : "환영합니다.",
	login_fail : "로그인에 실패하였습니다. 잠시후 다시 시도해 주시기 바랍니다"
}
