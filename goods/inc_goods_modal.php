<!-- divPopup start -->
<div class="divPopupBg"></div>

<div id="inputNumBox" class="divPopupBox tagMotionBox fadeEff slide-up">
	<div class="divPopWrap">
		<a href="#none" onclick="history.back();return false;"><img src="<?=$root?>/skin/images/divpop/btn_close.png" alt="닫기" class="closeIcon"/></a>
		<div class="inpnTitle fadeEff slide-rt">
			<img src="<?=$root?>/skin/images/divpop/input_num_title.png" alt="원하는 숫자를 선택하세요" />
		</div>
		<div class="inpnInputBox fadeEff slide-rt e2">
			<label for="tagNumInput" onclick="callPopup('#trialBox'); return false;">직접입력<br />(1 ~ 9999)</label>
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
			<!-- <a href="#none" class="tagNumSubmit fadeEff slide-rt e9"><img src="<?=$root?>/skin/images/divpop/input_num_submit.png" alt="선택완료(-50p)"/></a> -->
			<a href="#none" class="tagNumSubmit fadeEff slide-rt e9">
				<img src="<?=$root?>/skin/images/divpop/input_num_submit.png" alt="선택완료(-50p)"/>
				<div class="tagNumSubmitTxt">선택완료 (-5000P)</div>
			</a>
		</div>
	</div>
</div>

<div id="trialBox" class="divPopupBox tagMotionBox fadeEff slide-up">
	<div class="divPopWrap">
		<a href="#none" class="closePopBtn" onClick="hidePopupAll();"><img src="<?=$root?>/skin/images/divpop/btn_close.png" alt="닫기" class="closeIcon"/></a>
		<div class="trialConBox">
			<div class="trialTitle fadeEff slide-rt">
				택(가격) 확인은<br>택인택 회원만 가능합니다.
			</div>
			<div class="gridL fadeEff slide-rt e2">
				<div class="trialBtn fadeEff slide-rt e3">
					<a href="<?=$root?>/member/join_step1_policy.html">회원가입</a>
				</div>
				<div class="trialDescBox fadeEff slide-rt e4">
					지금 회원 가입 하시면<br>
					특별한 혜택 3가지가 제공 됩니다.<br><br>
					- 감사 포인트 1,000P 제공<br>
					- 신규 회차 OPEN시 무료 알림(한시적 제공)<br>
					- 판매 자격 확보(수익, 돈 버는 쇼핑몰)<br>
					※ 회원가입 후 바로 택(가격)확인 가능
				</div>
			</div>
			<div class="gridR fadeEff slide-rt e5">
				<div class="trialBtn fadeEff slide-rt e6"">
					<a href="#none">체험하기</a>
				</div>
				<div class="trialDescBox fadeEff slide-rt e7">
					돈 버는 쇼핑몰 택인택!<br>
					체험하기 버튼을 클릭하시면<br>
					회원가입 없이도 체험이 가능 합니다.<br><br>
					<span class="pointC7">※ “체험하기”에서는 실제 구매가 불가 합니다.<br>
				</div>
			</div>
		</div>
	</div>
</div>