// Class to communicate with dart web server
class GenerateHash {
  Function f;
  void onMessagePost(Map response) {
    // Nothing to do. Messages posted will be delivered from the server.
    print("onMessagePost: " + response.toString());
    print("keys: " + response.getKeys().toString());
    print("response['response'] = ${response['response']}");
    print("response['hash'] = ${response['hash']}");
    print("response['hashName'] = ${response['hashName']}");
    if (f is Function) {
      f(response['hash']);
    }
  }
  
  void onMessagePostFailed() {
    print("Failed to post message. Please try again later.");
    //showStatus("Failed to post message. Please try again later.");
    //uiJoin();
  }
  
  void handlePostMessage(String e, String hasherName) {
    var messageText = e;
    var messageRequest = new Map();
    messageRequest["request"] = "generateHash";
    messageRequest["value"] = messageText;
    messageRequest["hasher"] = hasherName;
    sendRequest("/generateHash",
      messageRequest,
      (Map response) =>  onMessagePost(response) , 
      () => onMessagePostFailed());
  }
  
  XMLHttpRequest sendRequest(String url, Map json, var onSuccess, var onError) {
    XMLHttpRequest request = new XMLHttpRequest();
    request.on.readyStateChange.add((Event event) {
      if (request.readyState != 4) return;
      if (request.status == 200) {
        onSuccess(JSON.parse(request.responseText));
      } else {
        onError();
      }
    });
    
    request.open("POST", url, true);
    request.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
    print('sendRequest '+ url+ " " + JSON.stringify(json));
    request.send(JSON.stringify(json));
    
    return request;
  }
}
