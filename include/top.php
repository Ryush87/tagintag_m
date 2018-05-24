<!-- 절대경로 : 추후 삭제 필요-->
<? $root = "http://".$_SERVER['SERVER_NAME']."/task/trunk/tagintag_m"; ?>
<? $d_root = $_SERVER['DOCUMENT_ROOT']."/task/trunk/tagintag_m"; ?>
<!-- 절대경로 : 추후 삭제 필요-->

<!-- 웹인증 s -->
<?
/*
	$admin_user = 'tagintag';
	$admin_pw = '1234';

	if (!isset ($_SERVER["PHP_AUTH_USER"]) || !isset ($_SERVER["PHP_AUTH_PW"]) || 
		$_SERVER["PHP_AUTH_USER"] != $admin_user || $_SERVER["PHP_AUTH_PW"] != $admin_pw)
	{
		header ("WWW-Authenticate: Basic realm=\"TAGINTAG\"");
		header ("HTTP/1.0 401 Unauthorized");
		echo "<font size=3>".$msg."</font><br>";
		echo "<font size=3><a href='./coupon_list.php'>".$reload."</a></font>";
		exit;
	}
*/
?>
<!-- 웹인증 e -->

<!DOCTYPE HTML>
<!--[if lt IE 7]> <html lang="ko" class="no-js ie6"> <![endif]-->
<!--[if IE 7]>    <html lang="ko" class="no-js ie7"> <![endif]-->
<!--[if IE 8]>    <html lang="ko" class="no-js ie8"> <![endif]-->
<!--[if gt IE 8]><!-->
<html class="no-js" lang='ko'>
<!--<![endif]-->
<head>
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, target-densitydpi=medium-dpi" />
	<meta property="og:type" content="website">
	<meta property="og:title" content="TagInTag">
	<meta property="og:description" content="세상에 없던 가격">
	<meta property="og:image" content="<?=$root?>/skin/images/common/favicon_tagintag.ico">
	<meta property="og:url" content="<?=$root?>/">
	<title>TagInTag</title>
	<link rel="shortcut icon" href="<?=$root?>/skin/images/common/favicon_tagintag.ico">
	<link rel="stylesheet" href="<?=$root?>/skin/css/bootstrap.min.css">
	<link rel="stylesheet" href="<?=$root?>/skin/css/jquery-ui.css">
	<!--<link rel="stylesheet" href="<?=$root?>/skin/css/jquery.mobile.min.css">-->
	<link rel="stylesheet" href="<?=$root?>/skin/plugin/animation/animate.css">
	<link rel="stylesheet" href="<?=$root?>/skin/plugin/select_or_die/selectordie.css">
	<link rel="stylesheet" href="<?=$root?>/skin/css/wrap.css">
	<!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
	<!--[if lt IE 9]>
		<script src="<?=$root?>/skin/js/html5shiv.min.js"></script>
		<script src="<?=$root?>/skin/js/html5shiv-printshiv.min.js"></script>
		<script src="<?=$root?>/skin/js/respond.min.js"></script>
		<script src="<?=$root?>/skin/js/IE9.js"></script>
	<![endif]-->
	<script src="<?=$root?>/skin/js/jquery.min.js"></script>
	<script src="<?=$root?>/skin/js/jquery-ui.min.js"></script>
	<!--<script src="<?=$root?>/skin/js/jquery.mobile.min.js"></script>-->
	<script src="<?=$root?>/skin/js/bootstrap.min.js"></script>
	<!--[if lt IE 9]>
		<script src="<?=$root?>/skin/js/selectivizr.min.js"></script>
	<![endif]-->
	<script type="text/javascript" src="<?=$root?>/skin/plugin/select_or_die/selectordie.js"></script>
	<script type="text/javascript" src="<?=$root?>/skin/plugin/innerfade/jquery.innerfade.js"></script>
	<script type="text/javascript" src="<?=$root?>/skin/js/m_common.js"></script>

