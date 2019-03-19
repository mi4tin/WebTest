function connectWebSocket(url,receiveMsgFunc){
    websocket = new WebSocket(url);
    websocket.onopen = function(evt) {
        console.log("CONNECTED");
        var sendObj = new Object();
        sendObj.ModuleName = "Player";
        sendObj.MethodName = "LoginForTest";
        sendObj.Parameters = new Array("11pjp700");
        websocket.send(JSON.stringify(sendObj));
    };

    websocket.onmessage = function(evt) {
        var reData = evt.data;
        console.log(reData);
        receiveMsgFunc(reData);
    };

    websocket.onclose = function(evt) {
        console.log("close");
    };
    websocket.onerror = function(event) {
        console.log("err");
    };

    return websocket;
}