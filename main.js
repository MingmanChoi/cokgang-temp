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


    // curriculum button
    var cir1 = document.querySelector('#cir1');
    var cir2 = document.querySelector('#cir2');
    var speechBubble3 = document.querySelector('#speech-bubble3');
    var speechBubble4 = document.querySelector('#speech-bubble4');

    cir1.addEventListener('click',()=>{
        var open3 = speechBubble3.style.display;
        if(open3 !== 'none'){
            speechBubble3.style.display = 'none';
        }else{
            speechBubble3.style.display = 'inline';
            speechBubble4.style.display = 'none';
        }
    });
    cir2.addEventListener('click',()=>{
        var open4 = speechBubble4.style.display;
        if(open4 === 'inline'){
            speechBubble4.style.display = 'none';
        }else{
            speechBubble4.style.display = 'inline';
            speechBubble3.style.display = 'none';
        }
    });
}