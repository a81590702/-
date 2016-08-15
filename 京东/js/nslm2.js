	var loadFinish = 0;
	var winWidth = 0;
	var winHeight = 0;
	var fixHeight = 0;
	var finish_role = true;
	var gameBottom=0;
	var qqInvite=null;
	function nslm2log(ob){
		try{
			console.log(ob);
		}catch(e){
			
		}
	}
	
	 function getFlashSwf(movieName) {
		  if (navigator.appName.indexOf("Microsoft") != -1) {
		   
		   return window[movieName];
		  } else {
		   
		   return document[movieName];
		  }
	 }
	 
	 window.onbeforeunload = function(ev){
			var e = ev || window.event; 
			var res = getFlashSwf('Shell').getFunCount();
			if (e) {
				e.returnValue = res; 
			}
			return res;
		}
	 
	 function qq_toInvite(){
		 nslm2log("qq_toInvite");
		getFlashSwf("Shell").qq_toInvite();
	}
	function qqInvite_yellow(op_sid){
		nslm2log("qqInvite_yellow");
		fusion2.dialog.invite
		({
		  
		  msg  : "邀请你来玩女神联盟2",

		  img : "http://i.gtimg.cn/open/app_icon/04/91/33/33/1104913333_100.png",
			source : "op_sid="+op_sid,
		  onSuccess : qqInvite_success,
		  onCancel: qqInvite_cancel,
		  onClose: qqInvite_close
		});
	}
	function qqInvite_blue(){
		nslm2log("qqInvite_blue");
		var param = {'title':'邀请你来玩女神联盟2', 'intro': '邀请你来玩女神联盟2', 
            'tabid':0, 'gamepara':''};
    
        GameAPI.InviteBox.show(
		1104913333, 
		param,
		qqInvite_other_cb,
		qqInvite_success
		);
	}
	function qqInvite_success_test(){
		qqInvite_success({invitees:[1,2]});
	}
	function qqInvite_success(opt){
		nslm2log("邀请好友成功"+opt);
		var inviteesLen = 0;
		var inviteegroupsLen = 0;
		if(opt.invitees){
			inviteesLen = opt.invitees.length;
		}
		if(opt.invitegroups){
			inviteegroupsLen = opt.invitegroups.length;
		}
		getFlashSwf("Shell").qq_invite_success(inviteesLen,inviteegroupsLen);
	}
	function qqInvite_cancel(opt){
			nslm2log("邀请好友取消"+opt);
	}
	function qqInvite_close(opt){
			nslm2log("邀请好友关闭"+opt);
	}
	function qqInvite_other_cb(opt){
		//do nothing
	}
	function create_role_finish(){
		finish_role = true;
	}
	function fusion2_buy(arg){
	
		alert(arg.param);
	}
	function findDimensions() //函数：获取尺寸
	{
		//获取窗口宽度
		if(window.innerWidth){
			winWidth = window.innerWidth;
		}else if ((document.body) && (document.body.clientWidth)){
			winWidth = document.body.clientWidth;
		}

		if (document.documentElement && document.documentElement.clientHeight && document.documentElement.clientWidth)
		{
			winWidth = document.documentElement.clientWidth;
		}
		//获取窗口高度
		if(window.innerHeight){
			winHeight = window.innerHeight;
		}else if ((document.body) && (document.body.clientHeight)){
			winHeight = document.body.clientHeight;
		}

		//通过深入Document内部对body进行检测，获取窗口大小
		if (document.documentElement && document.documentElement.clientHeight && document.documentElement.clientWidth)
		{
			winHeight = document.documentElement.clientHeight;
		}
		winHeight = winHeight;
		var trueHeight = 0;
		//结果
		var gameflashId=document.getElementById("Shell");
		if(gameflashId){
			if(winWidth>=2048){
				 gameflashId.width = '2048px';
			}
			else if(winWidth>=1600 && winWidth<2048){
				 gameflashId.width = winWidth+'px';
			}else{
				if(winWidth<1000){
					gameflashId.width = '1000px';
				}else{
					gameflashId.width = winWidth+'px';
				}

			}
			var game_height = 0;
			if(winHeight>=1200){
				gameflashId.height = "1152px";
				game_height  = 1200;
			}
			else if(winHeight>(600+gameBottom)&&winHeight<1200){
				gameflashId.height = (winHeight-gameBottom)+"px";
				game_height  = winHeight;
			}else{
				gameflashId.height = "600px";
				game_height  = 600;
			}

			gameflashId.marginTop=trueHeight+"px";
		}


}

	//调用函数，获取数值
	window.onload = window.onresize = findDimensions;
	function set_browser_title(title) {
		if(title!='女神联盟II')
		window.document.title = title;
	}
	function load_finish(){
		loadFinish = 1;
		findDimensions;
	}
	load_finish();
	function getCookie(cName){
		var lCookie = document.cookie.split("; ");
		for(var i=0; i<lCookie.length; i++){
			var lArr = lCookie[i].split("=");
			if(cName == lArr[0]){
				return unescape(lArr[1]);
			}
		}
	}

	function setStageSize(width,height){

		if(width==0 && height == 0){
			findDimensions();
		}
		else{

			var gameflashId=document.getElementById("Shell");
			gameflashId.style.width = width+"px";
			gameflashId.style.height = height+"px";
			//获取窗口高度
			if(window.innerHeight){
				winHeight = window.innerHeight;
			}else if ((document.body) && (document.body.clientHeight)){
				winHeight = document.body.clientHeight;
			}
			if (document.documentElement && document.documentElement.clientHeight && document.documentElement.clientWidth)
			{
				winHeight = document.documentElement.clientHeight;

			}
			var gamemainId=document.getElementById("main");
			gamemainId.style.marginTop = (winHeight-height)/2 + 'px';
		}
	}

	function refWeb(){
		location.reload();
	}

	function getCookie(cName){
		var lCookie = document.cookie.split("; ");
		for(var i=0; i<lCookie.length; i++){
			var lArr = lCookie[i].split("=");
			if(cName == lArr[0]){
				return unescape(lArr[1]);
			}
		}
	}
	
	function AddFav(sURL, sTitle)
	{
		try
		{
			window.external.addFavorite(sURL, sTitle);
		}
		catch (e)
		{
			try
			{
				window.sidebar.addPanel(sTitle, sURL, "");
			}
			catch (e)
			{
				alert("加入收藏失败，请使用Ctrl+D进行添加");
			}
		}
	}
