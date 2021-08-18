// header / footer 분리 
window.addEventListener('load', function() {
    var allElements = document.getElementsByTagName('*');
    Array.prototype.forEach.call(allElements, function(el) {
        var includePath = el.dataset.includePath;
        if (includePath) {
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    el.outerHTML = this.responseText;
                }
            };
            xhttp.open('GET', includePath, true);
            xhttp.send();
        }
    });
});

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