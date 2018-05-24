//common funtion
function newWin(url,nw,nh){ //새창열기
	cw=screen.availWidth;
	ch=screen.availHeight;
	ml=(cw-nw)/2;
	mt=(ch-nh)/2;
	optionT='width='+nw+',height='+nh+',top='+mt+',left='+mt+',toolbar=no,location=no,status=no,menubar=no,resizable=auto,scrollbars=yes';
	window.open(url,'TaginTag',optionT);
	return false;
}
function closeWin(){ //창닫기
	window.close();
	return false;
}
function objShow(obj){ //obj 보이기
	obj.css('display','block');
}
function objHide(obj){ //obj 숨기기
	obj.css('display','none');
}
/*
function currentTab(num){ //현재 tab 표시
	$('.tabBox li').eq(num).addClass('actOn');
}
*/
function scrollMove(obj){ //페이지 내 특정 obj 위치 스크롤이동
	var tempPosition=$(obj).offset().top;
	$('html, body').stop().animate({scrollTop:tempPosition},500,'linear');
	return false;
}
/*
function changeSubtitle(txt){ //페이지 subtitle 변경
	$('.subPage_title h2:first-child').append(txt);
}
*/
function changeTitle(txt){ //location에 현재 페이지 변경
	$('#hLocationText').html(txt);
}
function checkScreen() { //screen size 체크
	var win_w = $(window).width();
	var win_w=window.innerWidth;
	/*
	if (win_w <= 1024 && win_w >= 769) {
		$("meta[name=viewport]").attr("content", "width=device-width, initial-scale=0.6, maximum-scale=1.0, minimum-scale=0.6, user-scalable=yes, target-densitydpi=medium-dpi");
	} else if (win_w <= 768 && win_w >= 451) {
		$("meta[name=viewport]").attr("content", "width=device-width, initial-scale=0.5, maximum-scale=1.0, minimum-scale=0.5, user-scalable=yes, target-densitydpi=medium-dpi");
	} else if (win_w <= 450) {
		$("meta[name=viewport]").attr("content", "width=device-width, initial-scale=0.3, maximum-scale=1.0, minimum-scale=0.3, user-scalable=yes, target-densitydpi=medium-dpi");
	} else {
		$("meta[name=viewport]").attr("content", "width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, target-densitydpi=medium-dpi");
	}
	*/
	if($(window).width()<$(window).height()){ //세로
		//alert($(window).width()+"-----"+screen.availHeight);
		//$('.divPopupBox').css('height','initial')
		$('.tagMotionBox').css('height','100%')
	}else if($(window).width()>$(window).height()){ //가로
		//alert($(window).width()+"-----"+$(window).height());
		$('.tagMotionBox').css('height','initial')
		//$('.divPopupBox').css('height','100%')
	}
}
function currnetTab(n){ //현재 탭 활성화
	var stepObj=$('.pageTab2 > li').eq(n);
	stepObj.addClass('actOn');
}
function currnetTab_servie(n){ //현재 탭 활성화(택인택이란)
	var stepObj=$('.pageTab > li').eq(n);
	stepObj.addClass('actOn');
}
function setDivPopHeight(){ //divpopup 높이 셋팅
	var win_h = $(window).height();
	var temp_h =win_h-80;
	$('.divPopWrap2').css('max-height',temp_h+'px');
}
function divPopBg_show(){ //divpopup bg 보이기
	objShow($(".divPopupBg"));
}
function divPopBg_hide(){ //divpopup bg 숨기기
	objHide($(".divPopupBg"));
}
function divPopBg2_show(){ //divpopup bg2 보이기
	objShow($(".divPopupBg2"));
}
function divPopBg2_hide(){ //divpopup bg2 숨기기
	objHide($(".divPopupBg2"));
}
function positionPop(obj){ //divpopup 가운데 정렬 (margin)
	var tempW="-"+$(obj).width()/2+"px";
	var tempH="-"+$(obj).height()/2+"px";
	if($(obj).attr("class").match("tagMotionBox")){
		if(obj=="#tagOpenResultBox"){
			tempH="-"+(($(obj).height()/2)+200)+"px";
		}
	}else{
		if($(obj).attr("class").match("mainPagePop")){
			$(obj).css({"margin-top":tempH,"margin-left":tempW});
		}else{
			$(obj).css({"margin-top":tempH,"margin-left":tempW});
		}
	}
}
function positionPop2(obj){ //divpopup 가운데 정렬 (top,left)
	$(obj).css({"top":0,"left":0});
	var tempW=(window.innerWidth-$(obj).width())/2+"px";
	var tempH=(window.innerHeight-$(obj).height())/2+"px";
	if(obj=="#tagOpenResultBox"){
		tempH="-"+(($(obj).height()/2)+200)+"px";
	}
	$(obj).css({"top":tempH,"left":tempW});
}
function callPopup(obj){ //divpopup 보이기
	$('body').addClass('actPop');
	positionPop(obj);
	divPopBg_show();
	objShow($(obj));
	actFadeEff($(obj));
}
function callPopup2(obj){ //divpopup2 보이기
	$('body').addClass('actPop');
	positionPop(obj);
	divPopBg2_show();
	objShow($(obj));
	actFadeEff($(obj));
}
function hidePopup(obj){ //divpopup 숨기기
	$('body').removeClass('actPop');
	resetFadeEff(obj);
	divPopBg_hide();
	objHide($(obj));
}
function hidePopup2(obj){ //divpopup2 숨기기
	$('body').removeClass('actPop');
	resetFadeEff(obj);
	divPopBg2_hide();
	objHide($(obj));
}
function nextPopup(pObj,nObj){ //divpopup 보이기
	var closeObj=pObj.parents('.divPopupBox');
	resetFadeEff(closeObj);
	objHide($(closeObj));
	positionPop(nObj);
	objShow($(nObj));
	actFadeEff($(nObj));
}
function top_btn_act(qy){ //topBtn 활성화
	var topBtn=$('#contentsTopBtn');
	var topBtnParentPY=topBtn.parent().offset().top;
	var winPY=$(window).scrollTop();
	var screenH=$(window).height();
	var topBtnFinalPY=(winPY-topBtnParentPY)+screenH-topBtn.height();
	var topBtnParentMaxH=topBtn.parent().height()-topBtn.height();
	//console.log("===> topBtnFinalPY : "+topBtnFinalPY);
	//console.log("===> topBtnParentMaxH : "+topBtnParentMaxH);
	if(winPY>topBtnParentPY){
		if(topBtnFinalPY>topBtnParentMaxH){
			topBtn.css({'opacity':'1'});
			topBtn.stop().animate({'top':topBtnParentMaxH+'px'},500);
		}else{
			topBtn.css({'opacity':'1'});
			topBtn.stop().animate({'top':topBtnFinalPY+'px'},500);
		}
	}else{
		topBtn.stop().animate({'opacity':'0'},500);
	}
}
function top_btn_act2(){ //topBtn2 활성화
	var topBtn=$('#contentsTopBtn2');
	var topBtnParentPY=topBtn.parent().offset().top;
	var winPY=$(window).scrollTop();
	var screenH=$(window).height();
	var topBtnFinalPY=(winPY-topBtnParentPY)+screenH-topBtn.height();
	var topBtnParentMaxH=topBtn.parent().height()-topBtn.height();
	if(winPY>topBtnParentPY){
		if(topBtnFinalPY>topBtnParentMaxH){
			//topBtn.css({'opacity':'1'});
			topBtn.stop().animate({'right':0+'px'},200);
		}else{
			//topBtn.css({'opacity':'1'});
			topBtn.stop().animate({'right':20+'px'},200);
		}
	}else{
		topBtn.stop().animate({'right':'-50px'},200);
	}
}
function top_btn_click(){ //topBtn 클릭
	$(window).scrollTop(0);
}
//숫자 카운트-v1
var total_time=0;
var hour=total_time/3600;
var minute=(total_time/60)%60;
var second=total_time%60;
var timeCount=null;
function count_down(){
	total_time--;
	hour=total_time/3600;
	minute=(total_time/60)%60;
	second=total_time%60;
	$('.tagKeepBoxWrap .leftTime').html(parseInt(total_time));
	if(total_time===0){
		clearInterval(timeCount);
	}
}
function time_count(){
	total_time=60;
	clearInterval(timeCount);
	timeCount=setInterval(function(){count_down();},1000);
}
//숫자 카운트-v2
function count_down2(obj){
	total_time--;
	hour=total_time/3600;
	minute=(total_time/60)%60;
	second=total_time%60;
	obj.html(parseInt(total_time));
	if(total_time<=0){
		clearInterval(timeCount);
		obj.html(parseInt(0));
	}
}
function time_count2(obj){
	var sec=obj.html();
	if(sec==null){
		total_time=60;
	}
	total_time=sec;
	clearInterval(timeCount);
	timeCount=setInterval(function(){count_down2(obj);},1000);
}
//calender
function setDatePick(obj){ //calender 셋팅
	jQuery('.blt_calendar').click(function(){
		jQuery(this).parent().find('input').datepicker("show");
	});
	jQuery("#"+obj).datepicker({
		dateFormat:'yy-mm-dd',
		showAnimation:'slide',
		showOtherMonths:true,
		selectOtherMonths:true,
		changeYear:true,
		changeMonth:true,
		showButtonPanel:true
	});
}
//fade effect
function actFadeEff(obj){ //fade effect 활성화
	obj.addClass('in-view');
	obj.find('.fadeEff').addClass('in-view');
}
function resetFadeEff(obj){ //fade effect 초기화
	var fadeEff = obj.find('.fadeEff');
	obj.removeClass('in-view');
	$.each(fadeEff, function(){
		var elem = $(this);
		elem.removeClass('in-view');
	});
}
function actAnim(obj,act) { //acting Animation (animation.css 참조)
	obj.removeClass(act + ' animated').addClass(act + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
		$(this).removeClass(act + ' animated actBefore');
	});
};
$(document).bind("mobileinit", function () {
	$.mobile.pushStateEnabled = true;
});

//jquery function s-----------------
$(function($){
	//scroll-Top-Bottom s-----------------
	var didScroll;
	$(window).scroll(function(){
		didScroll=true;
	});

	setInterval(function(){
		if(didScroll){
			hasScrolled();
			didScroll=false;
		}
	},250);

	var lastScrollTop=0;
	var delta=5;
	var hideObj=$('header').outerHeight();
	function hasScrolled(){
		//quick_menu_act(quickY);
		
		var st=$(this).scrollTop();
		if(Math.abs(lastScrollTop-st)<=delta){return;}
		if(st>lastScrollTop&& st>hideObj){
			$('header').removeClass('slideInDown').addClass('animated slideOutUp');
			$('#topNoticeBoxWrap').removeClass('slideOutDown').addClass('animated slideInUp');
			
		}else{
			if(st+$(window).height() < $(document).height()){
				$('header').removeClass('slideOutUp').addClass('animated slideInDown');
				$('#topNoticeBoxWrap').removeClass('slideInUp').addClass('animated slideOutDown');
			}
		}
		lastScrollTop=st;
	}
	//scroll-Top-Bottom e-----------------

	//slideMenu s-----------------
	var menuStatus;
	var show = function() {
		if(menuStatus) {
			return;
		}
		//$('#lnb').show();
		$('#lnb').stop().animate({'right': "0%"}, 300, function (){menuStatus=true;});
		$('body').addClass('actPop');
		
	};
	var hide = function() {
		if(!menuStatus) {
			return;
		}
		$('#lnb').stop().animate({'right': "-100%"}, 300, function (){menuStatus=false;});
		$('body').removeClass('actPop');
	};
	var toggle = function() {
		if (!menuStatus) {
			show();
		} else {
			hide();
		}
		return false;
	};
	// Show/hide the menu
	$("#menuBtn").click(toggle);
	$("#lnbCloseBtn").click(toggle);
	/*
	$('#wrap').live("swipeleft", hide);
	$('#wrap').live("swiperight", show);
	$('#wrap').live('pagebeforeshow', function (event, ui) {
		menuStatus = false;
		$("#wrap").css("margin-left", "0");
	});
	*/
	// Menu behaviour
	$("#lnb li a").on('click',function () {
		//var p = $(this).parent();
		//p.siblings().removeClass('active');
		//p.addClass('active');
	});
	//menu UI s-----------------
	$('#menuBtn').on('click',function(){
		//$('#lnb').slideToggle();
	});
	//menu UI e-----------------
	//slideMenu e-----------------

	//lnb UI s-----------------
	$('.lnb_1d > li > a').on('click',function(){
		var tempPosition=$('#lnb').scrollTop();
		$(this).parent().find('.lnb_2d').slideToggle("",function(){
			if($(this).parent().height()>60){
				$(this).parent().addClass('overOn');
				if(tempPosition>50){
					tempPosition=(tempPosition+50);
					$('#lnb').stop().animate({scrollTop:tempPosition},500,'linear');
				}
			}else if($(this).parent().height()<=60){
				$(this).parent().removeClass('overOn');
			}
		});
	});
	//lnb UI e-----------------

	//qna slideList UI s-----------------
	$('.qRegToggleBtn').on('click',function(){
		$('.questRegBox').slideToggle();
		$('.questRegBtnBox').slideToggle();
	});
	$('.qnaSlideListBox .titleLine a').on('click',function(){
		var totalIndex=$('.qnaSlideListBox .slideListBody > li').length;
		var tempIndex=$('.qnaSlideListBox .slideListBody > li').index($(this).parent().parent().parent());
		for(i=0;i<totalIndex;i++){
			if(i!=tempIndex){
				$('.qnaSlideListBox .slideListBody > li').eq(i).removeClass('openLine');
				$('.qnaSlideListBox .slideListBody > li').eq(i).find('.conLine').slideUp();
				$('.qnaSlideListBox .slideListBody > li').eq(i).find('.titleLine .qtCon').slideUp();
			}
		}
		$(this).find('.qtCon').slideToggle();
		$(this).parent().parent().next('.conLine').slideToggle("",function(){
			if($(this).parent().height()>50){
				$(this).parent().addClass('openLine');
			}else{
				$(this).parent().removeClass('openLine');
			}
		});
	});
	$('.qnaSlideListBox .titleLine').hover(function(){
		$(this).parent().addClass('actOn');
	},function(){
		$(this).parent().removeClass('actOn');
	});
	//qna slideList UI e-----------------

	//cs slideList UI s-----------------
	$('.csSlideListBox .titleLine a').on('click',function(){
		var totalIndex=$('.csSlideListBox .slideListBody > li').length;
		var tempIndex=$('.csSlideListBox .slideListBody > li').index($(this).parent().parent().parent());
		for(i=0;i<totalIndex;i++){
			if(i!=tempIndex){
				$('.csSlideListBox .slideListBody > li').eq(i).removeClass('openLine');
				$('.csSlideListBox .slideListBody > li').eq(i).find('.conLine').slideUp();
				$('.csSlideListBox .slideListBody > li').eq(i).find('.titleLine .qtCon').slideUp();
			}
		}
		$(this).find('.qtCon').slideToggle();
		$(this).parent().parent().next('.conLine').slideToggle("",function(){
			if($(this).parent().height()>50){
				$(this).parent().addClass('openLine');
			}else{
				$(this).parent().removeClass('openLine');
			}
		});
	});
	$('.csSlideListBox .titleLine').hover(function(){
		$(this).parent().addClass('actOn');
	},function(){
		$(this).parent().removeClass('actOn');
	});
	//cs slideList UI e-----------------

	//sectionSlide UI s-----------------
	$('.sectionSlideBox .sctsTitle').on('click',function(){
		var totalIndex=$('.sectionSlideBox').length;
		var tempIndex=$('.sectionSlideBox').index($(this).parent());
		for(i=0;i<totalIndex;i++){
			if(i!=tempIndex){
				//all hide
				//$('.sectionSlideBox').eq(i).removeClass('openScts');
				//$('.sectionSlideBox').eq(i).find('.sctsCon').slideUp();
			}
		}
		$(this).next('.sctsCon').slideToggle("",function(){
			if($(this).parent().height()>50){
				$(this).parent().addClass('openScts');
			}else{
				$(this).parent().removeClass('openScts');
			}
		});
	});
	$('.sectionSlideBox .sctsTitle').hover(function(){
		$(this).parent().addClass('actOn');
	},function(){
		$(this).parent().removeClass('actOn');
	});
	//sectionSlide UI e-----------------
	
	//slideList UI s-----------------
	$('.slideListBox .titleLine a').on('click', function(){
		var totalIndex=$('.slideListBody > li').length;
		var tempIndex=$('.slideListBody > li').index($(this).parents('li'));
		for(i=0;i<totalIndex;i++){
			if(i!=tempIndex){
				$('.slideListBody > li').eq(i).removeClass('openLine');
				$('.slideListBody > li').eq(i).find('.conLine').slideUp();
			}
		}
		$(this).parents('.titleLine').next('.conLine').slideToggle("",function(){
			if($(this).css('display')=="block"){
				$(this).parents('li').addClass('openLine');
			}else{
				$(this).parents('li').removeClass('openLine');
			}
		});
	});
	$('.slideListBox .titleLine').hover(function(){
		$(this).parent().addClass('actOn');
	},function(){
		$(this).parent().removeClass('actOn');
	});
	$('.slideListBox .slideCloseBtn').on('click',function(){
		$(this).parent().parent().parent().removeClass('openLine');
		$(this).parent().parent().parent().find('a.slideBtn').removeClass('slideUpBtn').addClass('slideDownBtn');
		$(this).parent().parent().parent().find('.conLine').slideUp();
	});
	//slideList UI e-----------------

	//bottomOpenTagBox UI s-----------------
	function toggleTagCnt (){ //상품상세페이지의 까보기 영역
		var tObj=$('#botToggleBtn a');
		tObj.parent().next('.tagCountInfoBox').slideToggle("",function(){
			if($(this).parent().parent().height()>62){
				$(this).parent().find('#botToggleBtn').addClass('actOn');
				$(this).parent().find('#botToggleBtn a').removeClass('botToggleUp').addClass('botToggleDown');
				$('.tagCountBoxBtn').html("Tag 구성 닫기");
			}else{
				$(this).parent().find('#botToggleBtn').removeClass('actOn');
				$(this).parent().find('#botToggleBtn a').removeClass('botToggleDown').addClass('botToggleUp');
				$('.tagCountBoxBtn').html("Tag 구성 열기");
			}
		});
	};
	$('#botToggleBtn a').on('click',function(){ //상품상세페이지의 까보기 영역
		toggleTagCnt();
	});
	$('.tagCountBoxBtn').on('click',function(){ //상품상세페이지의 까보기 영역
		toggleTagCnt();
	});
	//bottomOpenTagBox UI e-----------------

	//BtnAction  s-----------------	
	//subPage s---------------
	$('#findIdPwBox .pageTab li a').on('click',function(){ //아이디찾기
		var targetObj=$(this).attr("tab-href");
		$(this).parents('.pageTab').find('li').removeClass('actOn');
		$('.findKindInput').hide();
		$(this).parent().addClass('actOn');
		$(targetObj).show();
	});
	$("#chck_all").on('change',function(){ //전체체크박스
		if($(this).prop('checked')){
			$(this).parent().parent().find('.allCheckChild input[type="checkbox"]').prop("checked",true);
		}else{
			$(this).parent().parent().find('.allCheckChild input[type="checkbox"]').prop("checked",false);
		}
	});
	$(".deliveryListBox .radioBoxWrap input[type='radio']").on('change',function(){ //회원정보수정 배송지 리스트 기본배송
		var deli=$(".deliveryListBox li");
		var deliN=deli.index($(this).parents('li'));
		for(i=0;i<deli.length;i++){
			if(i!=deliN){
				deli.eq(i).find(".radioBoxWrap input[type='radio']").prop("checked",false);
			}
		}
		$('.basicAddress').removeClass("actOn");
		if($(this).prop('checked')){
			$(this).parent().find('.basicAddress').addClass("actOn");
		}
	});
	$(".mbPolicyBox .smBtn").on('click',function(){ //회원가입 > 이용약관 > 내용보기
		$(this).next('.smPolicyT').slideToggle("",function(){
			if($(this).parent().height()>50){
				$(this).prev('.smBtn').html("내용닫기");
			}else{
				$(this).prev('.smBtn').html("내용보기");
			}
		});
	});
	$(".infoPopBtn").on('click',function(){ //mypage 느낌표 아이콘
		$(this).next().slideToggle();
	});
	$(".paymentInputBox .payKindUlBox li").on("click",function(){ //충전하기 결제방법
		var li_index=$(".paymentInputBox .payKindUlBox li").index($(this))+1;
		$(".paymentInputBox .payKindUlBox li").removeClass('actOn');
		$(this).addClass('actOn');
		$(".payKindLi").hide();
		$(".payKindLi_"+li_index).show();
	});
	$(".payKindChoice input[type='radio']").on("change",function(){ //주문페이지 결제방식
		$('.payKindChoiceChild').slideUp();
		if($(this).prop('checked')){
			$(this).parent().next('.payKindChoiceChild').slideToggle();
		}
	});
	$('.takeoverListBox .toTit').on('click',function(){ //양도하기
		$(this).next('.toCon').slideToggle("",function(){
			if($(this).css('display')=="block"){
				$(this).parents('li').addClass('openLine');
			}else{
				$(this).parents('li').removeClass('openLine');
			}
		});
	});
	//subPage e---------------

	//popContents s---------------
	$(".closeWinBtn").on('click',function(){ //divPopupBox 닫기
		closeWin();
	});
	//popContents e---------------

	//divPop s---------------
	$(".divPopupBox .closePopBtn").on('click',function(){ //divPopupBox 닫기
		hidePopup($(this).parents('.divPopupBox'));
	});
	//divPop e---------------

	//BtnAction UI e-----------------
});
//jquery function e-----------------

$(window).bind('resize', function(e){ //window resize
	setDivPopHeight(); //divpopup 높이 셋팅
	$('.divPopupBox').each(function(){
		if($(this).css('display')=="block"){
			var objId=$(this).attr('id');
			positionPop($('#'+objId));
		}
	});
	window.resizeEvt;
	$(window).resize(function(){
		clearTimeout(window.resizeEvt);
		window.resizeEvt = setTimeout(function(){
			checkScreen();
			//code to do after window is resized
			//alert($(window).width()+"____"+screen.availWidth)
			//alert($('html').width());
		}, 150);
	});
});

$(window).on("orientationchange",function(){ //화면 회전 이벤트
	checkScreen();
	/*
	if(window.orientation == 0){ // Portrait
		alert(window.orientation);
	}else{ // Landscape
		alert(window.orientation);
	}
	*/
});

//window load
$(document).ready(function(){
	checkScreen();
	setDivPopHeight(); //divpopup 높이 셋팅
	//$('select').selectOrDie();
	$('.balloonTip').popover({ 
		html : true,
		trigger : "hover"
	});
	//quick_menu_act(quickY);
});

/******************************** 택관련 함수 ************************************/
function actTagKeepBtn(){ // 택보관버튼 호출
	time_count2($('.leftTimeTag')); //시간 카운트
	$('.tkTimeBtn').fadeIn();
	$('.tkTimeBtn').animate({'right':'0'},1000);
}
$(function(){ // 온로드시
	$('.tkTimeBtn').on('click',function(){ //택보관 박스 보이기
		$('.tagKeepBoxWrap').fadeIn(function(){
			$('.tkTimeBtn').fadeOut();
		});
	});
	$(".tagKeepBoxWrap .tagKeepBoxClose").on('click',function(){ //택보관 박스 숨기기
		$('.tagKeepBoxWrap').fadeOut(function(){
			$('.tkTimeBtn').fadeIn();
		});
	});
});
/******************************** 택관련 함수 ************************************/