<ul class="episodeListTabBox pageTab mt0">
	<li class="actOn"><a href="#none">전체</a></li>
	<li><a href="#none">SALE</a></li>
	<li><a href="#none">FREE</a></li>
</ul>
<script>
$(function($){
	$('.episodeListTabBox li').click(function(){
		$('.episodeListTabBox li').removeClass('actOn');
		$(this).addClass('actOn');
	});
});
</script>