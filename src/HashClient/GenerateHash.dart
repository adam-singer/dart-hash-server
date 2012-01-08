// Class to communicate with dart web server
class GenerateHash {
  void onMessagePost(Map response) {
    // Nothing to do. Messages posted will be delivered from the server.
  }
  
  void onMessagePostFailed() {
    //showStatus("Failed to post message. Please try again later.");
    //uiJoin();
  }
  
  void handlePostMessage(Event e) {
    var messageText = "";
    var messageRequest = new Map();
    messageRequest["request"] = "generateHash";
    messageRequest["value"] = messageText;
    sendRequest("/generateHash",
      messageRequest,
      (Map response) => onMessagePost(response), 
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
    request.send(JSON.stringify(json));
    return request;
  }
}
