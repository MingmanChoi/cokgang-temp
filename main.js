window.onload = ()=>{
    // banner link
    var enroll = document.querySelector('#enroll-banner');
    var signup = document.querySelector('#signup-banner');
    var ktalk = document.querySelector('#ktalk-banner');
    enroll.addEventListener('click',()=>{
        window.open('https://forms.gle/yxHpeoMf9EMwajJbA','_blank');
    })
    signup.addEventListener('click',()=>{
        location.href = 'http://cokgang.com/smart/Login/join';
    })
    ktalk.addEventListener('click',()=>{
        window.open('http://pf.kakao.com/_xlbuyxb/chat','_blank');
    })
    
     /* To the Top Button & Scroll */
     $( window ).scroll( function() {
    	if ( $( this ).scrollTop() > 200 ) {
             $( '#toTop' ).fadeIn();
             $('#fixed-banner').fadeIn();
    	} else {
		$( '#toTop' ).fadeOut();
		$( '#fixed-banner' ).fadeOut();
	}
    } );
    $( '#toTop' ).click( function() {
	$( 'html, body' ).animate( { scrollTop : 0 }, 400 );
	return false;
    } );

    // tutor mouseover effect
    var hy = document.querySelector('#hytutor');
    var jm = document.querySelector('#jmtutor');
    var detailTitle = document.querySelector('#detail0');
    var hy_detail = document.querySelector('#detail1');
    var jm_detail = document.querySelector('#detail2');
    $('#hytutor').on({
        'mouseover': function () {
            this.style.marginLeft = '-5%';
            detailTitle.style.display = 'none';
            jm.style.filter = 'brightness(50%)';
            timer = setTimeout(function () {
                hy_detail.style.display = 'inline';
            }, 1000);
        },
        'mouseout' : function () {
            this.style.marginLeft = '-40%';
            detailTitle.style.display = 'inline';
            jm.style.filter = 'brightness(100%)';
            clearTimeout(timer);
            hy_detail.style.display = 'none';
        }
    });
    $('#jmtutor').on({
        'mouseover': function () {
            this.style.marginLeft = '-30%';
            detailTitle.style.display = 'none';
            hy.style.filter = 'brightness(50%)';
            timer = setTimeout(function () {
                jm_detail.style.display = 'inline';
            }, 1000);
        },
        'mouseout' : function () {
            this.style.marginLeft = '0%';
            detailTitle.style.display = 'inline';
            hy.style.filter = 'brightness(100%)';
            clearTimeout(timer);
            jm_detail.style.display = 'none';
        }
    });
    $('#page3').on({
        'mouseover': function () {
            $('#detail-sub').css('animation','blink-animation .6s steps(3, start) infinite alternate');
            $('#detail-sub').css('-webkit-animation','blink-animation .6s steps(3, start) infinite alternate');
        },
        'mouseout' : function () {
            $('#detail-sub').css('animation','none');
            $('#detail-sub').css('-webkit-animation','none');
        }
    });
//     animation: blink-animation .6s steps(3, start) infinite alternate;
//    -webkit-animation: blink-animation .6s steps(3, start) infinite alternate;

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
      ['공지사항',`
      <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">

            <div class="panel panel-default">
                <div class="panel-heading" role="tab" id="headingOne">
                    <h4 class="panel-title">
                        <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <i class="more-less glyphicon glyphicon-plus"></i>
                            <span class="glyphicon glyphicon-ok"></span> 브랜드명 변경 및 웹사이트 업데이트 안내
                        </a>
                    </h4>
                </div>
                <div id="collapseOne" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne">
                    <div class="panel-body">
                      더 넓은 확장성을 위하여 <span class="red">“콕강”</span>에서 <span class="blue">“하자공”</span>으로 상호명을 업그레이드 중이에요. 이 뿐만이 아니라 더 나은 서비스 품질을 위해 <span class="blue">대규모 웹사이트 수정</span>도 예정되어 있으니, 기대해도 좋아요 :)
                    </div>
                </div>
            </div>
    
            <div class="panel panel-default">
                <div class="panel-heading" role="tab" id="headingTwo">
                    <h4 class="panel-title">
                        <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <i class="more-less glyphicon glyphicon-plus"></i>
                            <span class="glyphicon glyphicon-ok"></span> 베타 테스트 최종(2차) 런칭 완료 
                        </a>
                    </h4>
                </div>
                <div id="collapseTwo" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                    <div class="panel-body">
                      여러분의 성원에 힘입어 <span class="blue">콕강의 베타 테스트 최종(2차)</span> 런칭했습니다!<br>
                      추가된 강좌는 다음과 같아요.
                      <ul>
                        <li>고1: 원의 방정식, 도형의 이동</li>
                        <li>고2: 수학적 귀납법, 원순열 & 이항정리, 조건부확률 & 독립시행확률</li>
                      </ul>
                      이번 강의엔 어떤 꿀잼요소가 숨어있을지, 직접 확인해보세요!
                    </div>
                </div>
            </div>
    
            <div class="panel panel-default">
                <div class="panel-heading" role="tab" id="headingThree">
                    <h4 class="panel-title">
                        <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <i class="more-less glyphicon glyphicon-plus"></i>
                            <span class="glyphicon glyphicon-ok"></span> 베타 테스트 1차 런칭 완료
                        </a>
                    </h4>
                </div>
                <div id="collapseThree" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                    <div class="panel-body">
                      콕강의 <span class="blue">베타 테스트 1차 런칭</span>이 완료되었습니다! 수강신청 하신 강좌가 추가되었으니 함께 들으러 갈까요?
                      <ul>
                        <li>고1: 여러가지 방정식, 부등식, 좌표평면, 직선의 방정식</li>
                        <li>고2: 삼각함수와 그래프, 삼각함수의 활용, 등차 등비수열, 수열의합</li>
                      </ul>
                    </div>
                </div>
            </div>
          </div>`],
      ['신청하기',`
      <div class="faq-question">Q.수강신청을 하려면 어떻게 해야하나요?</div>
      <div class="faq-answer">A. 오른쪽 배너에 회원가입 버튼 클릭!<br>회원가입을 진행해주세요.<br>
      회원가입을 마친 후 수강신청을 진행해주시면 돼요 :)</div><br>
      <div class="faq-question">Q.결제는 어떻게 하나요?</div>
      <div class="faq-answer">A. 수강신청 마지막에 결제 방법을 선택!<br>
      <span class="blue">무통장입금</span>일 경우 안내된 계좌로 이체해주세요.<br><br>
      <span class="blue">카카오페이 결제</span>의 경우 영업시간 평일 11:00~20:00 내에 수강료 청구 메세지를 발송해드릴게요.</div>
      `],
      ['환불규정',`온라인 모의고사 패키지의 취소 및 환불은 <span class="blue">결제일로부터 7일 이내에 응시이력 및 시험지 출력 이력이 없는 경우</span>에 한해 신청 가능합니다.<br><br>
      결제일로부터 7일 이후 또는 모의고사 응시이력 및 시험지 출력 이력이 있는 경우에는 환불 규정에 따라 <span class="red">모의고사 응시료를 공제한 후 부분 환불</span>이 가능하며, <span class="red">할인 상품은 할인 전 회차별 금액을 차감</span>하고 환불됩니다.
      <br><br><br><br>
      * 취소 및 환불관련 내용은 <b>고객센터(02-3489-9500)</b>로 문의해주시기 바랍니다. `],
      ['강의 수강',`
      <div class="faq-question">Q.강의를 수강하려면 어떻게 해야하나요?</div>
      <div class="faq-answer">A. 결제가 완료된 강의는 로그인을 하신 후 [내강의]에서 수강할 수 있어요.</div>
      <div class="blue" style="font-size:1.8vw;font-weight:700;margin-top:2%;">권장 학습순서</div>
      <div class="faq-answer red" style="margin-top:0;">
      [콕강] → [기출유형 문제(우기뽀) 연습] → [우기뽀 해설강의]</div><br>
      <div class="faq-question">Q.기출유형문제는 언제 받나요?</div>
      <div class="faq-answer">A. 수강신청 후 수강배정 받은 다음날 구글폼에 제출하신 이메일로 연습문제 자료를 보내드릴게요!</div>
      `],
      ['1:1 상담',`
      1:1 상담을 희망하시는 경우, 우측 배너의 카카오톡 배너를 클릭하여 <span class="red">'콕강 카카오채널'</span>로 편하게 문의하세요. 여러분을 기다릴게요!<br><br>
      상담 가능시간 : 월~금 11:00 ~ 20:00(공휴일 휴무)
      `],
    ];
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
            faqtitle.textContent = tabtxt;
            faqtext.innerHTML = tablist[tabnum][1];
        })
    })
}