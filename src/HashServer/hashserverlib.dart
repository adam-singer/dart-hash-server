#library("HashServerLib");

#import("../../third_party/HttpServer/http.dart");
#import("../../third_party/json/dart_json.dart");
#source('IsolatedServer.dart');
#source('ServerMain.dart');
#source('HashServerCommand.dart');
#source('HashServerStatus.dart');

typedef void RequestHandler(HTTPRequest request, HTTPResponse response);

class HashServer extends IsolatedServer { 
  HashServer() : super() {
    addHandler("/",
      (HTTPRequest request, HTTPResponse response) =>
          redirectPageHandler(
              request, response, "client/index.html"));
    
    addHandler("/client/index.html",
      (HTTPRequest request, HTTPResponse response) =>
          fileHandler(request, response));
    
    addHandler("/generateHash", _generateHashHandler);
    
    // If we are loading a dart js file, that needs to be
    // added to the request handler.
  }
}