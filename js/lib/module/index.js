/**
 * Created by lirui on 2014/10/21.
 */
require(["domReady!","main","dialog"],function(domReady,main,dialog){

        $('#slider').slider( { imgZoom: true });
        $('#dialog1').dialog({
            autoOpen: false,
            closeBtn: true,
            scrollMove: false,
            buttons: {
                '取消': function(){
                    this.close();
                },
                '确定': function(){
                    this.close();
                }
            }
        });
        $('#d1').click(function(){
            $('#dialog1').dialog("open");
        });


});