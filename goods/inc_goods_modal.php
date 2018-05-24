<!-- divPopup start -->
<div class="divPopupBg"></div>

<div id="inputNumBox" class="divPopupBox tagMotionBox fadeEff slide-up">
	<div class="divPopWrap">
		<a href="#none" onclick="history.back();return false;"><img src="<?=$root?>/skin/images/divpop/btn_close.png" alt="닫기" class="closeIcon"/></a>
		<div class="inpnTitle fadeEff slide-rt">
			<img src="<?=$root?>/skin/images/divpop/input_num_title.png" alt="원하는 숫자를 선택하세요" />
		</div>
		<div class="inpnInputBox fadeEff slide-rt e2">
			<label for="tagNumInput">직접입력<br />(1 ~ 9999)</label>
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