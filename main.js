window.onload = ()=>{
    // tutor mouseover effect
    var hy = document.querySelector('#hytutor');
    var jm = document.querySelector('#jmtutor');
    var detailTitle = document.querySelector('#detail0');
    var hy_detail = document.querySelector('#detail1');
    var jm_detail = document.querySelector('#detail2');

    hy.addEventListener('mouseover',()=>{
        hy_detail.style.display = 'inline';
        detailTitle.style.display = 'none';
        jm.style.filter = 'brightness(50%)';
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
}