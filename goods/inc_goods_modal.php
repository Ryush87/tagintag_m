<!-- divPopup start -->
<div class="divPopupBg"></div>

<div id="inputNumBox" class="divPopupBox tagMotionBox fadeEff slide-up">
	<div class="divPopWrap">
		<a href="#none" onclick="history.back();return false;"><img src="<?=$root?>/skin/images/divpop/btn_close.png" alt="닫기" class="closeIcon"/></a>
		<div class="inpnTitle fadeEff slide-rt">
			<img src="<?=$root?>/skin/images/divpop/input_num_title.png" alt="원하는 숫자를 선택하세요" />
		</div>
		<div class="inpnInputBox fadeEff slide-rt e2">
			<label for="tagNumInput">직접입력<br />(1 ~ 999)</label>
			<input type="text" id="tagNumInput" class="tagNumInput" maxlength="3" readonly/>
			<div class="numResetBtn"><a href="#none"><span class="blind">초기화</span></a></div>
		</div>
		<div class="inpnKeyBox">
			<ul class="inpnNumKey">
				<li class="fadeEff slide-rt e3 inpnNum"><a href="#none"><span class="blind">1</span><img src="<?=$root?>/skin/images/divpop/input_number_1.png" alt="1"/></a></li>
				<li class="fadeEff slide-rt e4 inpnNum"><a href="#none"><span class="blind">2</span><img src="<?=$root?>/skin/images/divpop/input_number_2.png" alt="2"/></a></li>
				<li class="fadeEff slide-rt e5 inpnNum"><a href="#none"><span class="blind">3</span><img src="<?=$root?>/skin/images/divpop/input_number_3.png" alt="3"/></a></li>
				<li class="fadeEff slide-rt e6 inpnNum"><a href="#none"><span class="blind">4</span><img src="<?=$root?>/skin/images/divpop/input_number_4.png" alt="4"/></a></li>
				<li class="fadeEff slide-rt e7 inpnNum"><a href="#none"><span class="blind">5</span><img src="<?=$root?>/skin/images/divpop/input_number_5.png" alt="5"/></a></li>
				<li class="fadeEff slide-rt e3 inpnNum"><a href="#none"><span class="blind">6</span><img src="<?=$root?>/skin/images/divpop/input_number_6.png" alt="6"/></a></li>
				<li class="fadeEff slide-rt e4 inpnNum"><a href="#none"><span class="blind">7</span><img src="<?=$root?>/skin/images/divpop/input_number_7.png" alt="7"/></a></li>
				<li class="fadeEff slide-rt e5 inpnNum"><a href="#none"><span class="blind">8</span><img src="<?=$root?>/skin/images/divpop/input_number_8.png" alt="8"/></a></li>
				<li class="fadeEff slide-rt e6 inpnNum"><a href="#none"><span class="blind">9</span><img src="<?=$root?>/skin/images/divpop/input_number_9.png" alt="9"/></a></li>
				<li class="fadeEff slide-rt e7 inpnNum"><a href="#none"><span class="blind">0</span><img src="<?=$root?>/skin/images/divpop/input_number_0.png" alt="0"/></a></li>
				<li class="fadeEff slide-rt e8 inpnDelKey"><a href="#none"><span class="blind">삭제</span><img src="<?=$root?>/skin/images/divpop/input_number_del.png" alt="지우기"/></a></li>
				<li class="fadeEff slide-rt e9 inpnAutoKey"><a href="#none"><span class="blind">자동선택</span><img src="<?=$root?>/skin/images/divpop/input_number_auto.png" alt="자동선택"/></a></li>
			</ul>
		</div>
		<div class="pageBtnBox">
			<a href="#none" class="tagNumSubmit fadeEff slide-rt e9"><img src="<?=$root?>/skin/images/divpop/input_num_submit.png" alt="선택완료(-50p)"/></a>
		</div>
	</div>
</div>

<div id="slotMachineBox" class="divPopupBox tagMotionBox fadeEff slide-up">
	<div class="divPopWrap">
		<div class="sltmTitle fadeEff slide-rt">
			<div class="sltmMsg"></div>
		</div>
		<div id="slotM">
			<div class="sltmReelCount">
				<img src="<?=$root?>/skin/images/divpop/slotmachin_box_bg2.png" alt="카운트배경"/>
				<p class="countN">999</p>
			</div>
			<div class="sltmReelWrap">
				<img src="<?=$root?>/skin/images/divpop/slotmachin_box_bg1.png" alt="슬롯머신배경"/>
				<div class="sltmReel"></div>
			</div>
			<div class="sltmReelShadow"></div>
			<a href="#none" class="sltmSkipBtn"><img src="<?=$root?>/skin/images/divpop/slotmachin_skip_btn.png" alt="Skip"/></a>
		</div>
		<div class="sltmGuide">
			<img src="<?=$root?>/skin/images/divpop/slotmachin_text_tit.png" alt="밑줄"/>
			<ul>
				<li>※ Start : 가장 최근에 오픈된 Tag을 시작지점으로 합니다.</li>
				<li>※ 고객님께서 선택한  숫자 만큼 이동하여  Tag을 오픈 합니다.</li>
				<li>※ 이미 오픈된 Tag은 건너 뜁니다.</li>
			</ul>
		</div>
	</div>
</div>

<div class="divPopupBg2"></div>

<div id="bigTagOpenBox" class="divPopupBox tagMotionBox fadeEff slide-rt">
	<div class="divPopWrap">
		<div class="bgtoTitle fadeEff slide-rt">
			<img src="<?=$root?>/skin/images/divpop/big_tag_title.png" alt="택안의 가격을 확인하세요" />
		</div>
		<div id="bigTagWrap">
			<!-- v1 s -->
			<!--
			<div class="bigTagFront slideHover">
				<img src="<?=$root?>/skin/images/divpop/big_tag_front_bg.png" alt="택앞면배경" />
				<div class="bgtoText">
					<div class="btfPrice"><span class="btfPriceNum">298</span>번 <br />Tag을 받으셨습니다.</div>
					<div class="hoverHand hoverEff2"><img src="<?=$root?>/skin/images/divpop/big_tag_front_hand.png" alt="클릭" /></div>
				</div>
			</div>
			<div class="bigTagBack">
				<img src="<?=$root?>/skin/images/divpop/big_tag_back_bg_1.png" alt="택뒷면배경" />
				<div class="bgtoText">
					<div class="btbSale">97%↓SALE</div>
					<div class="btbPrice"><span class="btbPriceNum">150</span> 원</div>
				</div>
			</div>
			<div class="bigTagBack_after">
				<div class="celebrationBox actBefore"><span>축하</span>합니다!</div>
				<div class="btbaDescTxt actBefore">고객님은 본 상품의 <span>97% 할인</span> Tag를 받았습니다.</div>
			</div>
			<div class="celebrationBg"></div>
			-->
			<!-- v1 e -->

			<!-- v2 s -->
			<div class="bigTagFront slideHover" style="user-select:none;">
				<img src="<?=$root?>/skin/images/divpop/big_tag_front_bg.png" alt="택앞면배경" />
				<div class="bgtoText">
					<div class="btfPrice"><span class="btfPriceNum">298</span>번 <br />Tag을 받으셨습니다.</div>
					<div class="hoverHand hoverEff2"><img src="<?=$root?>/skin/images/divpop/big_tag_front_hand.png" style="user-select:none; user-drag: none;" alt="클릭" /></div>
				</div>
			</div>
			<div class="bigTagBack">
				<img src="<?=$root?>/skin/images/divpop/big_tag_back_bg_1.png" alt="택뒷면배경" />
				<div class="bgtoText">
					<div class="btbSale">97%↓SALE</div>
					<div class="btbPrice"><span class="btbPriceNum">999,950</span> 원</div>
				</div>
			</div>
			<div class="bigTagBack_after">
				<div class="celebrationBox actBefore"><span>축하</span>합니다!</div>
				<div class="btbaDescTxt actBefore">고객님은 본 상품의 <span>97% 할인</span> Tag를 받았습니다.</div>
			</div>
			<!-- 폭죽 -->
			<div class="celebrationBg" style="z-index:1;">
				<div class="celebrationBg2">
					<!-- by jang  -->
					<div id="canvas-container"></div>
				</div>
			</div>
			<!-- v2 e -->
		</div>
		<div class="bgtoGuide">
			<img src="<?=$root?>/skin/images/divpop/big_tag_text_tit.png" alt="밑줄"/>
			<ul>
				<li>※ Start : 가장 최근에 오픈된 Tag을 시작지점으로 합니다.</li>
				<li>※ 고객님께서 선택한  숫자 만큼 이동하여  Tag을 오픈 합니다.</li>
				<li>※ 이미 오픈된 Tag은 건너 뜁니다.</li>
			</ul>
		</div>
	</div>
</div>