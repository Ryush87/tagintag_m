//jquery function s-----------------
$(function($){
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
	$('.slideListBox .titleLine a').on('click',function(){
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
});
//jquery function e-----------------