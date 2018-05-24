<nav id="lnb">
	<h2 class="blind">주메뉴</h2>
	<!-- lnb s -->
	<ul class="lnbTop">
		<li><a href="<?=$root?>/" id="lnbHomeBtn"><img src="<?=$root?>/skin/images/common/icon_home.png" alt="home" /></a></li>
		<li>
			<a href="<?=$root?>/login/login.html" id="lnbLoginBtn">로그인</a>
			<!-- <div class="lgnInfo"><span class="fwB">유승현 우수회원</span>님</div> -->
		</li>
		<li><a href="<?=$root?>/member/join_step1_policy.html" id="lnbJoinBtn">회원가입</a></li>
		<li><a href="#none" id="lnbCloseBtn"><img src="<?=$root?>/skin/images/common/btn_close_gray.png" alt="메뉴닫기" /></a></li>
	</ul>
	<ul class="lnb_1d">
		<!--
		<li class="is2d overOn">
			<a href="#none"><div class="lnbIcon1">진행중인 회차</div></a>
			<div class="lnb_2d lnbGoodsWrap">
				<ul class="lnbGoodsBox">
					<li>
						<a href="<?=$root?>/goods/ing_goods_1.html">
							<div class="lnbGoodsItem">
								<div class="lgiImg"><img src="<?=$root?>/skin/images/temp/buger_480x330.jpg" alt="상품이미지" /></div>
								<ul class="lgiInfo">
									<li class="lgiName">버거킹 와퍼</li>
									<li class="lgiOrgPrice">4,100원</li>
									<li class="lgiTagPrice">50원~</li>
								</ul>
							</div>
						</a>
					</li>
					<li>
						<a href="<?=$root?>/goods/ing_goods_2.html">
							<div class="lnbGoodsItem">
								<div class="lgiImg"><img src="<?=$root?>/skin/images/temp/bug_160_110.jpg" alt="상품이미지" /></div>
								<ul class="lgiInfo">
									<li class="lgiName">스타벅스 아메리카노 Grande</li>
									<li class="lgiOrgPrice">4,100원</li>
									<li class="lgiTagPrice">50원~</li>
								</ul>
							</div>
						</a>
					</li>
				</ul>
				<div class="lnbGoodsBtnWrap">
					<div class="lnbGoodsBtnBox">
						<a href="<?=$root?>/goods/ing_goods.html" class="listMoreBtn">더보기</a>
					</div>
				</div>
			</div>
		</li>
		-->
		<li><a href="<?=$root?>/goods/ing_goods.html"><div class="lnbIcon1">진행중인 상품</div></a></li>
		<li><a href="<?=$root?>/goods/closing_goods.html"><div class="lnbIcon2">마감된 상품</div></a></li>
		<!-- <li><a href="<?=$root?>/goods/comming_goods.html"><div class="lnbIcon3">다가올 회차</div></a></li> -->
		<!-- <li><a href="<?=$root?>/board/bbs_list.html?review"><div class="lnbIcon8">체험후기</div></a></li> -->
		<li><a href="<?=$root?>/event/event_list.html"><div class="lnbIcon8">이벤트</div></a></li>
		<!-- <li class="is2d overOn"> -->
		<li class="is2d">
			<a href="#none"><div class="lnbIcon6">마이페이지<!--span class="countIcon actOn">4</span--></div></a>
			<div class="lnb_2d">
				<ul>
					<li><a href="<?=$root?>/mypage/mypage_home.html">마이페이지 홈</a></li>
					<li><a href="<?=$root?>/mypage/order_list.html">주문내역</a></li>
					<li><a href="<?=$root?>/mypage/open_history.html">택오픈내역</a></li>
					<li><a href="<?=$root?>/mypage/instant_list.html">즉시구매내역</a></li>
					<li><a href="<?=$root?>/mypage/transfer_list.html">양도내역</a></li>
					<!-- 
					<li><a href="<?=$root?>/mypage/open_history.html">택오픈이력<span class="countIcon actOn">4</span></a></li>
					<li><a href="<?=$root?>/mypage/sns_history.html">SNS공유이력</a></li>
					<li><a href="<?=$root?>/mypage/proud_history.html">자랑하기이력</a></li>
					<li><a href="<?=$root?>/mypage/sms_history.html">앵콜/문자알림</a></li>
					<li><a href="<?=$root?>/mypage/point_money_status.html">택포인트/택머니</a></li>
					<li><a href="<?=$root?>/mypage/goods_qna_list.html">상품문의</a></li>
					-->
					<li><a href="<?=$root?>/mypage/point_status_list.html">택포인트 현황</a></li>
					<li><a href="<?=$root?>/mypage/money_status_list.html">택머니 현황</a></li>
					<!-- <li><a href="<?=$root?>/mypage/charge_point.html">충전하기</a></li> -->
					<li><a href="<?=$root?>/mypage/charge_point.html">택포인트 충전하기</a></li>
					<li><a href="<?=$root?>/mypage/charge_money.html">택머니 충전하기</a></li>
					<li><a href="<?=$root?>/mypage/refund_point.html">환불요청</a></li>
					<li><a href="<?=$root?>/mypage/turnover_money.html">택머니 전환</a></li>
					<li><a href="<?=$root?>/mypage/cs_counsel_list.html">상담내역</a></li>
					<li><a href="<?=$root?>/mypage/member_info_pw.html">회원정보수정</a></li>
				</ul>
			</div>
		</li>
		<li class="is2d overOn">
			<a href="#none"><div class="lnbIcon5">고객센터</div></a>
			<div class="lnb_2d">
				<ul>
					<li><a href="<?=$root?>/customer/customer_home.html">고객센터 홈</a></li>
					<li><a href="<?=$root?>/customer/notice_list.html">공지사항</a></li>
					<li><a href="<?=$root?>/customer/faq_list.html">자주묻는 질문</a></li>
					<li><a href="<?=$root?>/customer/inquiry_write.html">1:1문의</a></li>
				</ul>
			</div>
		</li>
		<li class="is2d overOn">
			<a href="#none"><div class="lnbIcon4">택인택이란?</div></a>
			<div class="lnb_2d">
				<ul>
					<li><a href="<?=$root?>/tagintag/service_home.html">서비스 소개</a></li>
					<!-- <li><a href="<?=$root?>/tagintag/service_faq.html">자주묻는 질문</a></li> -->
					<li><a href="<?=$root?>/board/bbs_list.html?review">체험후기</a></li>
					<!-- <li><a href="<?=$root?>/tagintag/alliance.html">사업제휴</a></li> -->
					<!--<li><a href="<?=$root?>/tagintag/tutorial_0.html">튜토리얼</a></li>-->
				</ul>
			</div>
		</li>
		<!--
		<li>
			<a href="#none"><div class="lnbIcon7">설정</div></a>
		</li>
		-->
	</ul>
	<!-- lnb e -->
</nav>