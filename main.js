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
                      콕강의 더 넓은 확장성을 위하여 “콕강”에서 “하자공”으로 상호명을 업그레이드 중에 있습니다. 또한, 더 나은 서비스 제공을 위한 대규모 웹사이트 업데이트가 예정되어 있으니, 많은 기대바랍니다.
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
                      여러분의 성원에 힘입어 콕강의 베타 테스트 최종(2차) 런칭하였습니다!<br>
                      추가된 강좌:
                      <ul>
                        <li>고1: 원의 방정식, 도형의 이동</li>
                        <li>고2: 수학적 귀납법, 원순열 & 이항정리, 조건부확률 & 독립시행확률</li>
                      </ul>
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
                      콕강의 베타 테스트 1차 런칭이 완료되었습니다! 수강신청 하신 강좌가 추가되었으니 함께 들으러 갈까요?
                      <ul>
                        <li>고1: 여러가지 방정식, 부등식, 좌표평면, 직선의 방정식</li>
                        <li>고2: 삼각함수와 그래프, 삼각함수의 활용, 등차 등비수열, 수열의합</li>
                      </ul>
                    </div>
                </div>
            </div>
          </div>`],
      ['신청하기',`
      신청방법 : [회원가입] - [수강신청] - [결제] - [강의배정] - [수강]<br><br>
      <ul>
        <li>우측 배너에 있는 회원가입 버튼을 통해 회원가입을 해주세요.</li>
        <li>우측 배너에 있는 수강신청 버튼을 통해 수강신청을 해주세요.</li>
        <li>수강신청 중에 선택하신 결제 방식으로 결제를 해주세요.<br>
        (카카오페이일 경우 영업시간 09:00~18:00 내에 확인 후 수강료 
        청구 메세지 보내드리면 납부 가능합니다)</li>
        <li>배정이 완료되었다는 문자와 함께 강의안이 발송되며, 본격적으로 수강이 가능합니다.</li>
      </ul>
      `],
      ['환불규정',`온라인 모의고사 패키지의 취소 및 환불은 결제일로부터 7일 이내에 응시이력 및 시험지 
      출력 이력이 없는 경우에 한해 신청 가능합니다.<br><br>
      7일 이후 또는 모의고사 응시이력 및 시험지 출력 이력이 있는 경우에는 환불 규정에 따라 모의고사 응시료를 공제한 후 부분 환불이 가능하며, 할인 상품은 할인 전 회차별 금액을 차감하고 환불됩니다.
      <br><br><br><br>
      * 취소 및 환불관련 내용은 고객센터(02-3489-9500)로 문의해주시기 바랍니다. `],
      ['강의 수강',`
      강의 진행은 로그인을 하신 후 “내 강의”에 신청하신 강의 수강이 가능합니다.<br><br>
      [콕강] → [우기뽀(기출 유형 문제) 풀이연습] → [우기뽀 해설강의]<br><br>
      수강신청 후 수강 배정 받으신 날 기준 다음날까지 기출유형 연습문제가 제공되며, 풀이 연습을 마치시면 우기뽀(기출유형 문제풀이) 강의를 이어서 수강하시면 됩니다.
      `],
      ['1:1 상담',`
      1:1 상담을 희망하시는 경우, 우측 배너의 카카오톡 배너를 클릭하여 '콕강 카카오채널'로 문의주시기 바랍니다.<br><br>
      상담 가능시간 : 월~금 11:00 ~ 20:00
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