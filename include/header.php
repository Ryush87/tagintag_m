<!-- OpenGraph s-->
<? $goods_detail_page = false ?>
<? if($goods_detail_page == "Y") { ?>
	<meta property="og:type" content="website">
	<meta property="og:title" content="택인택">
	<meta property="og:site_name" content="택인택">
	<meta property="og:description" content="<?=$goods[fld_name]?>(<?=$goods[fld_name_admin]?>회차) / 세상에 없던 가격 TagInTag">
	<meta property="og:image" content="http://www.tagintag.com/_WD/goods_image/<?=(strlen($arr_image[1])>=1)?$arr_image[0]:"noimg_1.jpg"?>">
	<meta property="og:url" content="http://www.tagintag.com/goods/goods_detail.html?uid=<?=$uid?>">
<? } else { ?>
	<meta property="og:type" content="website">
	<meta property="og:title" content="택인택">
	<meta property="og:site_name" content="택인택">
	<meta property="og:description" content="세상에 없던 가격 TagInTag">
	<meta property="og:image" content="http://www.tagintag.com/skin/images/common/or_image.jpg">
	<meta property="og:url" content="http://www.tagintag.com">
<? } ?>
<!-- OpenGraph e-->

<style type="text/css">
	body {padding-top:50px;}
</style>
<div class="pstR wWrap">
	<!-- skipBox s -->
	<dl id="skipBox">
		<dt><strong class="blind">바로가기 메뉴</strong></dt>
		<dd><a class="goDirect" href="#contents">본문 바로가기</a></dd>
		<dd><a class="goDirect" href="#lnb">메인메뉴 바로가기</a></dd>
	</dl>
	<!-- skipBox e -->
</div>

<header>
	<div class="wWrap">
		<div id="headBox">
			<h2 class="blind">상단메뉴</h2>
			<!-- <div id="backBtn"><a href="#none" onclick="history.back(); return false;"><img src="<?=$root?>/skin/images/common/btn_back.png" alt="뒤로가기" /></a></div> -->
			<div id="backBtn"><a href="<?=$root?>/" id="lnbHomeBtn" class="mt0"><img src="<?=$root?>/skin/images/common/icon_home.png" alt="home" class="mb5"/></a></div>
			<!-- gnb s -->
			<ul id="gnb">
				<li id="mypageBtn">
					<a href="<?=$root?>/mypage/mypage_home.html">
						<img src="<?=$root?>/skin/images/common/btn_mypage.png" alt="마이페이지" />
						<span class="newIcon actOn"></span>
					</a>
				</li>
				<li id="menuBtn"><a href="#none"><img src="<?=$root?>/skin/images/common/btn_menu.png" alt="메뉴" /></a></li>
			</ul>
			<!-- gnb e -->
			<div class="hLocationBox">
				<h1 id="topLogo"><a href="<?=$root?>/"><img src="<?=$root?>/skin/images/common/logo_top.png" alt="TagInTag 확률 앞에 평등하다!" /></a></h1>
				<h2 id="hLocationText"></h2>
			</div>
		</div>
	</div>
</header>