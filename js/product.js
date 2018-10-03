$(function () {

    var initMobileTab =function () {
        var $navtabs = $('.wjs_product .nav-tabs');
        var width =0;
        $navtabs.find('li').each(function (i,item) {
            var $currli=$(this);
            var liwidth=$currli.outerWidth(true);
            width+=liwidth;
        });
        /*width 内容的宽度*/
        /*innerWidth 内容和内边距的宽度*/
        /*outerWidth 内容和内边距和边框的宽度*/
        /*outerWidth(true) 内容和内边距和边框和外边距的宽度*/
        console.log(width);
        $navtabs.width(width);

    };
  initMobileTab()

    new IScroll ($('.nav-tabs-parent')[0],{
       screenX:true,
       screenY:false,
       click:true,
    });
});