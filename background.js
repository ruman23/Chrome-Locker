
var count=1;
function handleTabCreated(tab) {
	
	chrome.storage.sync.get('key', function(data){
		var check = data.key;
		if (count<=2) {
			chrome.tabs.remove(tab.id);

			var newURL = "startup.html";
			chrome.tabs.create({ url: newURL });

			count+=1;
			//alert('conditon:'+count);
		}
		/*else if (check=='yes') {
			//alert('conditon two'+count);
			var newURL = "https://www.facebook.com";
			chrome.tabs.create({ url: newURL });
		}*/
		//else if (count>=100) {
		
			//chrome.tabs.remove(tab.id);
		

		//}


	});
}

function init() {
	chrome.tabs.onCreated.addListener(handleTabCreated);
}
init();

