/****************************** jang dev s ******************************/


// 전역변수
var FWORKS = null;
var IS_STOP = false;
var G_MEM = { "is_member":1, "tp_point":1 }
var G_DRAG = { "mouseX":0, "orgDivX":0, "isTagOpen":false };

// 슬롯머신 클래스
var SlotMachineClass = new function(){

	// 셋팅
	var G_ARR_DATA;
	var G_PARM;

	// 재설정
	this.reset = function(){

		console.log("\n======> reset() ");

		// 초기화
		G_ARR_DATA = [];
		G_PARM = { "cnt":0, "viewCnt":0, "getCnt":0, "length":0, "userCnt":0, "speedMax":500, "stopCnt":5 }
		//var end_cnt = parseInt(999 - (150 * Math.random()));
		var start_cnt = 36;

		// 데이터 배열에 넣기		
		for( var i = start_cnt; i <= 999; i++ ){
			G_ARR_DATA.push(i);
		}

		// 카운트 2번 생성
		var str = '<div class="div1">';
		/*
		$.each( G_ARR_DATA, function() { str += "<p>"+this+"</p>"; });
		$.each( G_ARR_DATA, function() { str += "<p>"+this+"</p>"; });
		*/
		$.each( G_ARR_DATA, function() { str += "<p><img src='../skin/images/divpop/slotmachin_tag_bg.png' alt=''/><span>"+this+"</span></p>"; });
		$.each( G_ARR_DATA, function() { str += "<p><img src='../skin/images/divpop/slotmachin_tag_bg.png' alt=''/><span>"+this+"</span></p>"; });
		str += '</div>';
		//console.log("===> str: "+str);
		$('.sltmReel').html(str);

	}
	
	// 초기화 함수
	this.start = function(){
		console.log("===> start() ");
		// 함수전언
		animateSpin = this.animateSpin;
		animateStopMove = this.animateStopMove;
		// 리셋
		this.reset();
		// 초기화
		G_PARM.userCnt = $(".inpnInputBox .tagNumInput").val();
		G_PARM.viewCnt = G_PARM.userCnt;
		console.log("===> 전체: "+G_ARR_DATA.length +", 사용자: "+G_PARM.userCnt);
		setTimeout( function(){
			// 스핀 타이틀
			$('.sltmMsg').removeClass('sltmEnd').addClass('sltmRunning');
			animateSpin();
		}, 2000);
	}


	// 스핀 애니
	this.animateSpin = function(){
		// 함수전언
		animateSpin = this.animateSpin;	
		// 뷰카운터
		$('#slotMachineBox .sltmReelCount .countN').html( G_PARM.viewCnt );

		// 정지버튼
		if( IS_STOP ){
			IS_STOP = false;
			if( G_PARM.viewCnt > 3 ){
				var subCnt = G_PARM.viewCnt - 3;
				G_PARM.cnt = G_PARM.cnt + subCnt;
				G_PARM.viewCnt = G_PARM.viewCnt - subCnt;
			}			
		}
		// 완료시 이동
		if( G_PARM.viewCnt == 0 ) {
			setTimeout( animateStopMove, 0);
			return;			
		}else{
			// 스텝
			var stepCnt = 1;
			// 속도조절
			var rate = 1;

			// 처음시작
			if( G_PARM.cnt < 2 ) rate = 0.7;
			else if( G_PARM.cnt < 3 ) rate = 0.5;
			else if( G_PARM.cnt < 7 ) rate = 0.3;
			else if( G_PARM.cnt < 10 ) rate = 0.2;
			else if( G_PARM.cnt > 10 && G_PARM.viewCnt > 50 ){
				// 건너뛰기
				rate = 0.1;
				if( G_PARM.viewCnt > 800 ) stepCnt= 30;
				else if( G_PARM.viewCnt > 600 ) stepCnt= 25;
				else if( G_PARM.viewCnt > 400 ) stepCnt= 20
				else if( G_PARM.viewCnt > 200 ) stepCnt= 15;
				G_PARM.cnt += stepCnt;
				G_PARM.viewCnt -= stepCnt;
			}
			// 마지막
			else if( G_PARM.viewCnt > 50 ) rate = 0.1;
			else if( G_PARM.viewCnt > 20 ) rate = 0.15;
			else if( G_PARM.viewCnt > 10 ) rate = 0.2;
			else if( G_PARM.viewCnt > 5 ) rate = 0.3;
			else if( G_PARM.viewCnt > 2 ) rate = 0.9;
			
			var aniSpeed = parseInt(G_PARM.speedMax * rate);	
			// 다음위치
			/* 
			G_PARM.length = $('.sltmReel div p').eq( G_PARM.cnt ).position().top + $('.sltmReel div p').height() + parseInt($('.sltmReel div p').css("margin-top"));
			G_PARM.getCnt =  $('.sltmReel div p ').eq( (G_PARM.cnt+2) ).html();
			*/
			G_PARM.length = $('.sltmReel div p').eq( G_PARM.cnt ).position().top + $('.sltmReel div p').height() + parseInt($('.sltmReel div p').css("margin-top"));
			G_PARM.getCnt =  $('.sltmReel div p span').eq( (G_PARM.cnt+2) ).html();
			// 재귀 호출
			//console.log("===> animateReady()  rate ["+rate+"] ["+G_PARM.length+"] 값 ["+G_PARM.getCnt+"], step ["+stepCnt+"], cnt ["+G_PARM.cnt+"] view ["+G_PARM.viewCnt+"]   ");
			$('.sltmReel').animate({ scrollTop:G_PARM.length }, aniSpeed, "linear", function(){ animateSpin(); });			
			G_PARM.cnt++;
			G_PARM.viewCnt--;
		}
	}
	
	// 정지이동
	this.animateStopMove = function(){
		console.log("===> 완료 이동 ["+G_PARM.getCnt +"]  ");
		$('.sltmMsg').removeClass('sltmRunning').addClass('sltmEnd');	// 메시지		
		setTimeout( function(){
			$('#bigTagOpenBox .btfPriceNum').html( G_PARM.getCnt );	// 태그번호
			$('.sltmReel').html('');	 // 룰렛 화면캐쉬 지우기
			IS_STOP = false;	
			callPopup2("#bigTagOpenBox");
		},1000);
	}
}	// END

// 온로드시
$(function($){

	// 폭죽객체
	//FWORKS = new Fireworks( $("#canvas-container").screen.width(), $("#canvas-container").height() );
	FWORKS = new Fireworks( $(window).width(), $(window).height() );
	// 룰렛정지	
	//$("#slotMachineBox").bind('click', function(e){
	$(".sltmSkipBtn").bind('click', function(e){
		console.log("===> 정지클릭");
		IS_STOP = true;
	});

	// 태그오픈	
	var G_ORG = { "mouseX":0, "orgDivX":0, "isTagOpen":false };
	$(".bigTagFront").bind('mousedown', function(e){
		if( G_ORG.orgDivX == 0 ) G_ORG.orgDivX = $(this).offset().left; // 원래위치
		G_ORG.mouseX = e.pageX;	
		G_ORG.isTagOpen = false;
		//console.log("\n====>클릭 G_ORG ["+ JSON.stringify(G_ORG)  +"]  ");
		$(".bigTagFront").bind('mousemove', function(e){
			//console.log("==>mousemove ["+ e.which  +"]  ");
			if(e.which == 1){
				var moveX = G_ORG.mouseX - e.pageX;
				// 우측이고, 원위치면 정지
				if( moveX < 0 && $(this).offset().left > G_ORG.orgDivX ) return;
				// 오픈이면 오픈
				var moveSize = G_ORG.orgDivX - $(this).offset().left;
				//console.log("===> isTagOpen ["+G_ORG.isTagOpen+"], moveSize ["+moveSize+"]  ");
				if( moveSize > 70 && !G_ORG.isTagOpen ) {
					tagDragOpen();
					G_ORG.isTagOpen = true;
					return;
				}				
				$(this).offset({left: ($(this).offset().left - moveX) });
				G_ORG.mouseX = e.pageX;
				//console.log("===> 원래["+G_ORG.orgDivX+"], isTagOpen ["+G_ORG.isTagOpen+"], moveSize ["+moveSize+"],  이동후div ["+$(this).offset().left+"]   ");
			}
		});
	}).bind('mouseup', function(e){
		G_ORG = { "mouseX":-100, "orgDivX":-100, "isTagOpen":false };
		$(this).animate({ left: 0 }, 500);	
		$(this).unbind('mousemove');
	}).bind('mouseout', function(e){
		$(this).unbind('mousemove');
	});	

	// 손가락 클릭시 오픈
	/*
	$("#bigTagOpenBox .hoverHand").bind('click', function(e){
		$('.bigTagFront').animate({ left: -50, opacity: 0 }, 800, "linear", function(){ tagDragOpen();  });
		G_ORG.isTagOpen = true;
		return;
	});
	*/
	//$(".bigTagFront, .hoverHand").bind('click', function(e){	
	$(".bigTagFront").bind('click', function(e){	
		console.log("====> 오픈 클릭  ");
		tagSwingOpen();
	});
});

// 태그오픈-old
function tagDragOpen(){
	console.log("===> 태그오픈  ");	
	//hidePopup($('#slotMachineBox'));  //슬롯머신	
	$(".bigTagFront").fadeOut(1500);  // 레이어 안보이게
	$("#bigTagOpenBox .hoverHand").css("opacity", "0");  // 클릭버튼
	$("#bigTagOpenBox .bgtoTitle img").hide(); //택안의 가격을 확인하세요
		$("#bigTagOpenBox .bgtoGuide").hide(); //가이드
	$('body').addClass('actPop');
	$("#bigTagOpenBox .bigTagBack_after .celebrationBox").addClass('actBefore');	// 축하합니다
	$("#bigTagOpenBox .bigTagBack_after .celebrationBox").show();		// 축하합니다
	$("#bigTagOpenBox .celebrationBg").show();	
	setTimeout('actAnim($("#bigTagOpenBox .bigTagBack_after .celebrationBox"),"bounceInLeft")',500);	// 축하합니다	
	setTimeout('$("#bigTagOpenBox .bigTagBack_after .celebrationBox").addClass("actScale")',1000);	  // 축하합니다
	setTimeout('actAnim($("#bigTagOpenBox .bigTagBack_after .btbaDescTxt"),"bounceInRight")',1000);	// 고객님은
	setTimeout('playFireWorks()',1200); 	// 폭죽	
	setTimeout('location.href="tag_open_result.html"',7000); //택오픈 결과 페이지 이동
	//setTimeout('hidePopup2($(".divPopupBox"))',7000); //mobile 에서는 사용 안함
	//setTimeout('hidePopup($(".divPopupBox"))',7000); //mobile 에서는 사용 안함
	//setTimeout('tagKeepBoxAct();',7000); //mobile 에서는 사용 안함
	//setTimeout('callPopup("#tagResultBox")',7000); //mobile 에서는 사용 안함
}

// 빠르게 흔들고 오픈
function tagSwingOpen(){
	console.log("====> 태그 흔들고 오픈  ");
	G_DRAG.isTagOpen = true;
	// 기본 흔들기 삭제
	$('.bigTagFront').removeClass('slideHover');	
	// 빠른 흔들기 후 오픈
	//v1
	/*
	$('.bigTagFront').animate({ left: 70 }, 500, "linear", function(){   
		$('.bigTagFront').animate({ left: 0 }, 750, "linear", function(){  
			$('.bigTagFront').animate({ left: 70 }, 500, "linear", function(){   
				$('.bigTagFront').animate({ left: 0 }, 750, "linear", function(){
					$('.bigTagFront').animate({ left: -250, opacity: 0 }, 900, "linear", function(){ 
						//ajaxTagDateReset();
						tagOpenShow();
					});		
				});			
			});					
		});			
	});
	*/
	//v2
	$('.bigTagFront').animate({ left: -60 }, 600, "swing", function(){   
		$('.bigTagFront').animate({ left: 20 }, 800, "swing", function(){  
			$('.bigTagFront').animate({ left: -60 }, 600, "swing", function(){   
				$('.bigTagFront').animate({ left: 0 }, 800, "swing", function(){
					//$(".bigTagFront").removeClass('slideClick').addClass('slideClick');
					$('.bigTagFront').animate({ left:-120 }, 1000, "swing", function(){ 
						$('.bigTagFront').animate({ left: -160 }, 3000, "swing", function(){ 
							$('.bigTagFront').animate({ left: -200, opacity: 0 }, 800, "swing", function(){ 
								tagOpenShow();
							});
						});
					});
				});
			});
		});
	});
}

// ajax 태그 날짜 갱신
function ajaxTagDateReset(){		
	var param = "ta_id="+G_TAG.ta_id+"&gd_id="+G_TAG.gd_id+"&seq="+G_PARM.getCnt;	
	console.log("\n===> 날짜갱신 ["+param+"] ");
	var url = '/goods/ajax_tag_date_reset.php';
	$.ajax({
		url: url,
		data: param,
		type: 'POST',
		dataType: 'json',
		cache: false,
		success: function( res ) {
			console.log( "=====> 태그 날짜갱신 결과: "+ JSON.stringify( res ) );
			if( res.msg ){
				alert(res.msg);
				location.href = "/mobile";
				return;
			}
			tagOpenShow();
		},
		error: function(XMLHttpRequest, textStatus, errorThrown) {
			alert('Ajax failure  ajaxTagDateReset');
		}
	});
}

// 태그오픈
function tagOpenShow(){
	console.log("===> 태그오픈 후 보이기  ");	
	// 금액, 할인률 셋팅
	/*
	var seqStr = "seq_"+G_PARM.getCnt;
	var row = G_TAG.arr_cell[seqStr];
	var price = get_tag_price( row );
	console.log( "=====> 오픈금액: ["+price+"] "+ JSON.stringify(row) );
	$("#bigTagOpenBox .btbPriceNum").html( setComma(price) );
	$("#bigTagOpenBox .btbSale").html( row.ti_percent+"%↓SALE" );
	$("#bigTagOpenBox #percent_str").html( row.ti_percent+"% 할인" );
	*/
	$('body').addClass('actPop');  // 스크롤 제거
	$(".bigTagFront").fadeOut(1500);  // 오픈한 레이어 제거
	$("#bigTagOpenBox .bgtoTitle img").hide(); // 택안의 가격을 확인하세요
	$("#bigTagOpenBox .bgtoGuide").hide(); // 가이드 텍스트
	$("#bigTagOpenBox .hoverHand").hide();  // 클릭버튼	
	setTimeout('actAnim($("#bigTagOpenBox .bigTagBack_after .celebrationBox"),"bounceInLeft")',500);	// 축하합니다	
	setTimeout('$("#bigTagOpenBox .bigTagBack_after .celebrationBox").addClass("actScale")',1000);	  // 축하합니다
	setTimeout('actAnim($("#bigTagOpenBox .bigTagBack_after .btbaDescTxt"),"bounceInRight")',1000);	// 고객님은
	setTimeout('playFireWorks()',1200); 	// 폭죽	
	//setTimeout('location.href="/mobile/goods/tag_open_result.html?ta_id='+G_TAG.ta_id+'&gd_id='+G_TAG.gd_id+'&seq='+G_PARM.getCnt+'"',7000); //택오픈 결과 페이지 이동
	setTimeout('location.href="tag_open_result.html"',7000); //택오픈 결과 페이지 이동

}

// 폭죽생성
function fireWorksCreate(){
	var width = (FWORKS.canvas.width/2) / 2;
	var height = (FWORKS.canvas.height/2) / 2;
	targetX = width + (FWORKS.canvas.width/2  * Math.random());
	targetY = height + (FWORKS.canvas.height/2  * Math.random());
	console.log("===> fireWorksCreate()  ["+targetX+"] ["+targetY+"]");
	console.log("===> fireWorksCanvas()  ["+FWORKS.canvas.width+"] ["+FWORKS.canvas.height+"]");
	FWORKS.currentHue = Math.random()*100;
	FWORKS.createFireworks( (FWORKS.canvas.width/2), (FWORKS.canvas.height/2), targetX, targetY);
}

// 폭죽 플레이
function playFireWorks(){
	//console.log("===> playFireWorks() ");
	setTimeout(function() { fireWorksCreate(); }, 200);
	setTimeout(function() { fireWorksCreate(); }, 200);
	setTimeout(function() { fireWorksCreate(); }, 400);
	setTimeout(function() { fireWorksCreate(); }, 400);
	setTimeout(function() { fireWorksCreate(); }, 800);
	setTimeout(function() { fireWorksCreate(); }, 800);
}
/****************************** jang dev e ******************************/

//jquery function s-----------------
$(function($){
	//divPop-demo2
	var global_tag_num=0;
	$(".inpnInputBox .numResetBtn").click(function(){
		$(".inpnInputBox .tagNumInput").val("");
	});
	$(".inpnNumKey li.inpnNum a").click(function(){
		var inputNum=$(".inpnInputBox .tagNumInput");
		var inputVal=inputNum.val();
		var clickNum=parseInt($(this).find('.blind').html());
		if(inputVal.length<3){
			inputNum.val(inputVal+clickNum);
		}else{
			alert("3자리 수만 입력가능합니다.");
		}
	});
	$(".inpnNumKey li.inpnDelKey a").click(function(){
		var inputNum=$(".inpnInputBox .tagNumInput");
		var inputVal=inputNum.val();
		if(inputVal!=""){
			var inputDelVal=inputVal.substr(0,(inputVal.length-1));
			inputNum.val(inputDelVal);
		}
	});
	$(".inpnNumKey li.inpnAutoKey a").click(function(){
		var tempNum=Math.floor(Math.random()*999)+1;
		$(".inpnInputBox .tagNumInput").val(tempNum);
	});
	$(".tagNumSubmit").click(function(){
		global_tag_num=$(".inpnInputBox .tagNumInput").val();
		if(global_tag_num!=""){
			objHide($(this).parents('.divPopupBox'));
			$('#slotMachineBox .sltmReelCount .countN').html(global_tag_num);
			$('#slotMachineBox').removeClass('ofH');
			callPopup('#slotMachineBox');
			//setTimeout('$(sm.init)',1000);
			setTimeout( SlotMachineClass.start(),1000);    // by jang
		}else{
			alert("행운의 숫자를 입력해주세요");
		}
		
	});
	/*
	$("#bigTagOpenBox .bigTagFront").click(function(){
		$(this).addClass('slideClick');
		$("#bigTagOpenBox .hoverHand").hide();
		$("#bigTagOpenBox .bgtoTitle img").hide();
		$("#bigTagOpenBox .bgtoGuide").hide();
		//hidePopup($('#slotMachineBox'));
		$('body').addClass('actPop');
		$("#bigTagOpenBox .bigTagBack_after .celebrationBox").addClass('actBefore');
		$("#bigTagOpenBox .bigTagBack_after .celebrationBox").show();
		$("#bigTagOpenBox .celebrationBg").show();
		setTimeout('actAnim($("#bigTagOpenBox .bigTagBack_after .celebrationBox"),"bounceInLeft")',4000);
		//setTimeout('celebrationCanvas.animate()',7000);
		setTimeout('$("#bigTagOpenBox .bigTagBack_after .celebrationBox").addClass("actScale")',5000);
		setTimeout('actAnim($("#bigTagOpenBox .bigTagBack_after .btbaDescTxt"),"bounceInRight")',4500);
		setTimeout('$("#bigTagOpenBox .celebrationBg").addClass("actClbr")',7000);
		//setTimeout('hidePopup2($(".divPopupBox"))',12000);
		//setTimeout('hidePopup($(".divPopupBox"))',12000);
		
		//setTimeout('$("#bigTagOpenBox .hoverHand").show();',12000);
		//setTimeout('$("#bigTagOpenBox .bigTagFront").removeClass("slideClick");',12000);
		//setTimeout('$("#bigTagOpenBox .bigTagBack_after .btbaDescTxt").addClass("actBefore");',12000);
		//setTimeout('$("#bigTagOpenBox .bigTagBack_after .celebrationBox").removeClass("actScale").addClass("actBefore");',12000);
		//setTimeout('tagKeepBoxAct();',12000);
		setTimeout('location.href="tag_open_result.html"',12000);
		
		
	});
	*/
	/*
	$("#tagResultBox .trTagBtns .trTagBtn3").click(function(){
		console.log("===> 한번더");
		$(".bigTagFront").show().css("opacity", "1").css("left", 510);  // by jang 
		$("#bigTagOpenBox .hoverHand").css("opacity", "1"); 
		$(".inpnInputBox .tagNumInput").val('');
		$("#bigTagOpenBox .bigTagBack_after .celebrationBox").hide();
		$("#bigTagOpenBox .celebrationBg").hide();
		$("#bigTagOpenBox .bigTagBack_after .celebrationBox").removeClass("actScale animated bounceInLeft").addClass("actBefore");
		$("#bigTagOpenBox .bigTagBack_after .btbaDescTxt").addClass("actBefore");
		$("#bigTagOpenBox .celebrationBg").removeClass("actClbr");
		$('.sltmMsg').removeClass('sltmRunning sltmEnd');
		hidePopup2($('.divPopupBox'));
		hidePopup($('.divPopupBox'));
		//bigTagToggle(); //mobile 에서는 사용 안함
		callPopup('#inputNumBox');
		SlotMachineClass.reset();   // by jang
	});
	*/
});
//jquery function e-----------------