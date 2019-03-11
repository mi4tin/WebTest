var $http = {};

$http.request = function (option, callback) {
    var url = option.url;
    var method = option.method;
    var data = option.data;
    var timeout = option.timeout || 10000;

    var xhr = new XMLHttpRequest();
    xhr.responseType = option.responseType||"json" ;
    (timeout > 0) && (xhr.timeout = timeout);
    xhr.onreadystatechange = function () {
       // console.log(xhr);
        if (xhr.readyState == 4) {
            if (xhr.status >= 200 && xhr.status < 400) {
                callback && callback(xhr.response);
            } else {
                callback && callback('status: ' + xhr.status);
            }
        }
    }.bind(this);
    xhr.open(method, url, true);
    if (typeof data === 'object') {
        try {
            data = JSON.stringify(data);
        } catch (e) { }
    }
    if(!!option.headers){
    	for(var i in option.headers){
    		 xhr.setRequestHeader(i,option.headers[i])
    	}
    }
       
    xhr.send(data);
    xhr.ontimeout = function () {
        callback && callback('timeout');
//      console.log('%c连%c接%c超%c时', 'color:red', 'color:orange', 'color:purple', 'color:green');
    	if(location.href.indexOf('gamedetail.html')>-1)
    	mask.showtishi("服务器异常")
    };
};

$http.get = function (url, callback) {
    var option = url.url ? url : { url: url };
    option.method = 'get';
    this.request(option, callback);
};

$http.postResByte = function (url, data, callback) {
    if (typeof url == 'object') {
        var optionObject = url
        //...
        return
    }
    option = {};
    option.responseType = "blob";
    option.url = url;
    option.method = 'post';
    option.data = data;
    this.request(option, callback);
};

//逐渐废弃
$http.postNew = function (url, data ,header , callback) {
    option = {};
    option.url = url;
    option.method = 'post';
    option.data = data;
    option.header = header;
    this.request(option, callback);
};

$http.postPlus = function (optionObject) {
    option = {};
    option.url = optionObject.url;
    option.method = 'post';
    option.data = optionObject.data;
    option.headers = optionObject.headers;
    option.responseType = optionObject.responseType;
    this.request(option,optionObject.callback);
};