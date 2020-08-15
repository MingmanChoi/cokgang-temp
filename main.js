window.onload = ()=>{
    // tutor mouseover effect
    var hy = document.querySelector('#hytutor');
    var jm = document.querySelector('#jmtutor');
    var detailTitle = document.querySelector('#detail0');
    var hy_detail = document.querySelector('#detail1');
    var jm_detail = document.querySelector('#detail2');

    hy.addEventListener('mouseover',()=>{
        detailTitle.style.display = 'none';
        jm.style.filter = 'brightness(50%)';
        hy_detail.style.display = 'inline';
    })
    hy.addEventListener('mouseout',()=>{
        hy_detail.style.display = 'none';
        detailTitle.style.display = 'inline';
        jm.style.filter = 'brightness(100%)';
    })
    jm.addEventListener('mouseover',()=>{
        jm_detail.style.display = 'inline';
        detailTitle.style.display = 'none';
        hy.style.filter = 'brightness(50%)';
    })
    jm.addEventListener('mouseout',()=>{
        jm_detail.style.display = 'none';
        detailTitle.style.display = 'inline';
        hy.style.filter = 'brightness(100%)';
    })

    // 기존 css에서 플로팅 배너 위치(top)값을 가져와 저장한다.
	var floatPosition = parseInt($("#fixed-banner").css('top'));

	$(window).scroll(function() {
		// 현재 스크롤 위치를 가져온다.
		var scrollTop = $(window).scrollTop();
		var newPosition = scrollTop + floatPosition + "px";


		$("#fixed-banner").stop().animate({
			"top" : newPosition
		}, 300);

    }).scroll();
    
    // accordion
    function toggleIcon(e) {
        $(e.target)
          .prev(".panel-heading")
          .find(".more-less")
          .toggleClass("glyphicon-plus glyphicon-minus");
      }
      $(".panel-group").on("hidden.bs.collapse", toggleIcon);
      $(".panel-group").on("shown.bs.collapse", toggleIcon);

    // tab(0~4개)
    var tabnum;
    var tablist = [
      ['공지사항',`공지사항입력 ㄱㄱ`],
      ['신청하기','신청 ㄱㄱ'],
      ['환불규정','환불은 ㄴㄴ'],
      ['강의 진행','강의 ㄱㄱ'],
      ['1:1 상담','상담 ㄱㄱ'],
    ];

    var faq1 = document.querySelector('#faq1');
    var faq2 = document.querySelector('#faq2');
    var faq3 = document.querySelector('#faq3');
    var faq4 = document.querySelector('#faq4');
    var faq5 = document.querySelector('#faq5');
    var faqtitle = document.querySelector('#faqtitle');
    var faqtext = document.querySelector('#faqtext');

    document.querySelectorAll('.faqtab').forEach(function(e){
        e.addEventListener('click', function(){
            var tabtxt = this.textContent;
            for(tabnum=0;tabnum<5;tabnum++){
                if(tabtxt === tablist[tabnum][0]){
                    break;
                }
            }
            console.log(`이번클릭은 ${tabnum}`);
            faqtitle.textContent = tabtxt;
            faqtext.innerHTML = tablist[tabnum][1];
            console.log(`title: ${faqtitle}`);
        })
    })
}