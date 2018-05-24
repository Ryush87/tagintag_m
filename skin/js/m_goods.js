//jquery function s-----------------
$(function($){
	//숫자입력-UI s-----------------
	var global_tag_num=0;
	$(".inpnInputBox .numResetBtn").click(function(){ // 숫자입력 초기화
		$(".inpnInputBox .tagNumInput").val("");
	});
	$(".inpnNumKey .inpnNum a").click(function(){ // 숫자입력
		var inputNum = $(".inpnInputBox .tagNumInput");
		var inputVal = inputNum.val();
		var clickNum = parseInt($(this).find('.blind').html());
		if(inputVal.length < 4){
			inputNum.val(inputVal+clickNum);
		}else{
			alert("4자리 수만 입력가능합니다.");
		}
	});
	$(".inpnDelKey a").click(function(){ // 숫자입력 삭제
		var inputNum = $(".inpnInputBox .tagNumInput");
		var inputVal = inputNum.val();
		if(  inputVal != "" ){
			var inputDelVal = inputVal.substr(0,(inputVal.length-1));
			inputNum.val(inputDelVal);
		}
	});
	$(".inpnAutoKey a").click(function(){ //숫자입력 자동선택
		var tempNum=Math.floor(Math.random()*9999)+1;
		$(".inpnInputBox .tagNumInput").val(tempNum);
	});
	$(".tagNumSubmit").click(function(){ //숫자입력 선택완료
		global_tag_num=$(".inpnInputBox .tagNumInput").val();
		if(global_tag_num!=""){
			if(global_tag_num>0){
				objHide($(this).parents('.divPopupBox'));
				$('#slotMachineBox .sltmReelCount .countN').html(global_tag_num);
				linkUrl="tag_open_scroll_motion.html";
				location.href = linkUrl+"?"+global_tag_num;
			}else{
				alert("0보다 큰 숫자를 입력해주세요");
			}
		}else{
			alert("행운의 숫자를 입력해주세요");
		}
	});
	//숫자입력-UI e-----------------
});
//jquery function e-----------------