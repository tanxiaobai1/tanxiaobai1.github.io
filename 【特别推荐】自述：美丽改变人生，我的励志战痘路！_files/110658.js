
















if(typeof doyoo=='undefined' || !doyoo){
var d_genId=function(){
    var id ='',ids='0123456789abcdef';
    for(var i=0;i<34;i++){ id+=ids.charAt(Math.floor(Math.random()*16));  }  return id;
};
var doyoo={
env:{
secure:false,
mon:'http://m2157.looyu.com/monitor',
chat:'http://ali218.looyu.com/chat',
file:'http://static.doyoo.net/110402',
compId:50944,
confId:110658,
vId:d_genId(),
lang:'',
fixFlash:1,
subComp:9321
}

, monParam:{
index:-1,

style:{mbg:'',mh:0,mw:0,
elepos:'0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0',
mbabg:'',
mbdbg:''},

title:'\u8299\u67ef\u5b98\u65b9\u5546\u57ce\u5ba2\u670d\u5df2\u7ecf\u606d\u5019\u60a8\u591a\u65f6\uff01',
text:'<p>\u8299\u67ef\u795b\u6591\u662f\u5f53\u524d\u56fd\u5185\u795b\u6591\u4ea7\u54c1\u552f\u4e00\u4e00\u6b3e\u6dfb\u52a0\u9ad8\u7aef\u690d\u7269\u795b\u6591\u6210\u5206\u201c\u725b\u84a1\u7d20\u201d\u7684\u9ad8\u6548\u795b\u6591\u4ea7\u54c1\uff0c\u4fee\u590d\u578b\u4e09\u5c42\u795b\u6591\uff0c\u4e0d\u4ec5\u795b\u6591\u5f7b\u5e95\u800c\u4e14\u505a\u5230\u6c38\u4e0d\u53cd\u5f39\uff01</p>',
auto:-1,
group:'72513',
start:'00:00',
end:'24:00',
mask:false,
status:true,
fx:0,
mini:1,
pos:0,
offShow:1,
loop:0,
autoHide:0,
hidePanel:0,
miniStyle:1,
monHideStatus:[0,0,0],
monShowOnly:''
}



};



document.write('<div id="doyoo_monitor"></div>');

document.write('<div id="doyoo_share" style="display:none;"></div>');
document.write('<lin'+'k rel="stylesheet" type="text/css" href="http://static.doyoo.net/110402/looyu.css?140702"></li'+'nk>');
document.write('<scr'+'ipt type="text/javascript" src="http://static.doyoo.net/110402/looyu.js?141104"></scr'+'ipt>');

}

