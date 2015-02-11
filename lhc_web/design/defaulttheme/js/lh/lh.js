//var chatWindow = require('./lh-modules/chat-window');

__webpack_public_path__ = window.WWW_DIR_LHC_WEBPACK;

var lhc = (function() { 
	  global.lhc = {
			previewChat : function(chat_id){	
				require.ensure([], function (require) {
					var revealModalName = require('./lh-modules/reveal-modal');				
					revealModalName.initializeModal();
					revealModalName.revealModal(WWW_DIR_JAVASCRIPT+'chat/previewchat/'+chat_id);	
				});		
			},
			/**
			 * This can be used on any singleton class
			 * */
			methodCall : function(module,functionName,params) {				
				require([], function() {
					require("./lh-modules/lazy/speak/"+module + ".js")[functionName](params);				
				});								
			} 
	  }
}());