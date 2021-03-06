var cw; var ch;
var currentStep;
var totalStep;
var chkWinSize= new function(){ //윈도우사이즈 체크
	this.cw=function(){cw=$(window).width(); return cw;}
	this.ch=function(){ch=$(window).height(); return ch;}
}
function chkWinStepPosition(){ //각 스텝의 위치 체크
	var win = $(window);
	var win_w = win.width();
	var win_h = win.height();
	var win_top = win.scrollTop();
	var tmStepBox = $('.tmStepBox');
	var win_bottom = (win_top + win_h);
	totalStep=tmStepBox.length;
	//console.log("totalStep="+totalStep);
	tmStepBox.each(function(index){ //각 스텝의 위치 셋팅
		$(this).attr("data-index",win_h*index);
	});

	$.each(tmStepBox, function(){
		var elem = $(this);
		var elem_h = elem.outerHeight();
		var elem_top = elem.offset().top;
		var elem_bottom = (elem_top + elem_h);
		//if ((elem_bottom >= win_top) && (elem_top < win_bottom)){
		if((elem_bottom >= (win_top+(win_h/2))) && elem_top < (win_bottom-(win_h/2))){
			elem.addClass('in-view');
			currentStep=elem.index("#wrap section");
			//console.log(currentStep)
		}else{
			elem.removeClass('in-view');
		}
	});
}
function chkStepNav(){ //각 스텝의 위치 체크
	var stepNavli=$('.tmStepUlBox li');
	stepNavli.removeClass("actOn");
	if(totalStep>=5){
		if(currentStep<3){
			stepNavli.eq(currentStep).addClass("actOn");
		}else{
			stepNavli.eq(currentStep-1).addClass("actOn");
		}
	}else{
		stepNavli.eq(currentStep).addClass("actOn");
	}
}
function setTmStepBox(){// 각 스텝의 박스 사이즈 세팅
	$(".tmStepBox").css("height",chkWinSize.ch()+"px");
	var tmconbox=$(".tmConBox");
	$.each(tmconbox,function(e){
		var tempH=$(this).height();
		if(true){
			$(this).css('margin-top',"-"+((tempH/2)-20)+"px");
		}else{
			$(this).css('margin-top',"-"+tempH/2+"px");
		}
	});
	chkWinStepPosition();
	chkStepNav();
}

$(window).bind('resize', function(e){ //window resize
	setTmStepBox();
});

$(function($){
	//scroll s-----------------
	$(window).scroll(function(){ //스크롤 이벤트
		chkWinStepPosition();
		chkStepNav();
		top_btn_act2();
	});
	//scroll e-----------------

	//wheel s-----------------
	$(".tmStepBox").bind("mousewheel DOMMouseScroll",function(e){ //마우스휠 이벤트
		var win_h = $(window).height();
		var sectionPos=parseInt($(this).attr("data-index"));
		var E=e.originalEvent;
		delta=0;
		if(E.detail){ //firefox
			delta=E.detail*-40;
		}else{ //ie,chroom
			delta=E.wheelDelta;
		}
		if(delta<=0){//up
			//console.log("down_"+delta);
			$("html,body").stop().animate({scrollTop:sectionPos+win_h});
		}else{//down
			//console.log("up_"+delta);
			$("html,body").stop().animate({scrollTop:sectionPos-win_h});
		}
	});
	//wheel e-----------------

	$(".tmScrollBtn").bind("click",function(){ //화면 클릭 이벤트
		var win_h = $(window).height();
		var sectionPos=parseInt($(this).parent().attr("data-index"));
		$("html,body").stop().animate({scrollTop:sectionPos+win_h});
	});

	$(".tmStepBox").bind("click",function(){ //화면 클릭 이벤트
		var win_h = $(window).height();
		var sectionPos=parseInt($(this).attr("data-index"));
		$("html,body").stop().animate({scrollTop:sectionPos+win_h});
	});

	$(".tmStepUlBox li a").bind('click',function(){ //네비게이션 클릭
		var targetObj=$(this).attr('data-bar-value');
		scrollMove($(targetObj));
	});
	$(".tmChoiceBox li:last-child a").hover(function(){ //선택페이지 버튼 over
		$(this).parents('ul').next('.tmChoiceDesc').css("color","#eacb5f");
	},function(){
		$(this).parents('ul').next('.tmChoiceDesc').css("color","#fff");
	});
	//time_count2($('.leftTimeTag')); //시간 카운트
	setTmStepBox(); //페이지 레이아웃
});