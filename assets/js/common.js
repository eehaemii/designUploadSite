$(function(){
    $(document).on('click', '.menu-btn', function(){
        if($(this).hasClass('active')){
            $(this).removeClass('active');
            $('.gnb-wrap').removeClass('on');
            $('.gnb-box').css({'left':'-100%'});
        }else{
            $(this).addClass('active');
            $('.gnb-wrap').addClass('on');
            $('.gnb-box').css({'left':'95px'});
        }
    });
});