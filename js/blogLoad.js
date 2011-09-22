//blog loader.js
var getPosts = function(request){
    $.ajax({
        url: 'http://localhost:8888/&' + request,
        dataType: "jsonp",
        jsonpCallback: "_testcb",
        cache: false,
        timeout: 1000,
        success: function(data) {
            ParsePost(data);
        },
        error: function(jqXHR, textStatus, errorThrown) {
            alert('error ' + textStatus + " " + errorThrown);
        }
    });
};

var ParsePost = function(resp)
{
	var obj = jQuery.parseJSON(resp);
	alert(obj.message);

};
	