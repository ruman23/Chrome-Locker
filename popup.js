$(document).keyup(function(){
	//var val2='no';
	//chrome.storage.sync.set({'key': val2},function(){
	//});
	$("#hello").text($('#pass').val() );
	if($('#pass').val()=='7223')
	{
			count=100;
		/*var val='yes';
		chrome.storage.sync.set({'key': val},function(){
		});
*/
		$('#hello').text('match');

	}
});

chrome.browserAction.onClicked.addListener(function (tab) {
	$('#check').text('check');
});

