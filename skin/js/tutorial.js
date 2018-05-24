var currentStepNum;
var stepName=new Array();
stepName=['까보기 선택','행운의 숫자를 선택','택 번호 이동','택 선택 완료','택 선택 사용하기']

function setTutorialSlt(n){ //튜토리얼 스텝 셀렉트박스 셋팅
	var stepSlt=$('#ttrStepSelect');
	for(i=0;i<stepName.length;i++){
		stepSlt.append('<option value="tutorial_'+i+'.html">'+stepName[i]+'</option>');
	}
	stepSlt.find('option').eq(n).attr('selected',true);
}

function currentTutorialStep(n){ //현재 튜토리얼 스텝 
	currentStepNum=n;
	setTutorialSlt(n);
	var tHeadBox=$('.ttrHeadBox');
	$('.ttrContents').find('h2').html(stepName[n]);
	if(n==0){
		tHeadBox.find('.ttrPrevBtn a').css('display','none');
	}else{
		tHeadBox.find('.ttrPrevBtn span').html(stepName[n-1]);
	}
	if(n==stepName.length){
		tHeadBox.find('.ttrNextBtn a').css('display','none');
	}else{
		tHeadBox.find('.ttrNextBtn span').html(stepName[n+1]);
	}
}

//jquery function s-----------------
$(function($){
	//튜토리얼 셀렉트
	$('#ttrStepSelect').on('change',function(){
		var tempUrl=$(this).find('option:selected').attr('value');
		location.href=tempUrl;
	});
	//튜토리얼 버튼
	$('.ttrPrevBtn').on('click',function(){
		$(location).attr('href','tutorial_'+(currentStepNum-1)+'.html');
	});
	$('.ttrNextBtn').on('click',function(){
		$(location).attr('href','tutorial_'+(currentStepNum+1)+'.html');
	});
	$('.ttrHomeBtn').on('click',function(){
		$(location).attr('href','tutorial_0.html');
	});
});