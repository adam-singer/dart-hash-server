// Copyright (c) 2011, the Dart project authors.  Please see the AUTHORS file
// for details. All rights reserved. Use of this source code is governed by a
// BSD-style license that can be found in the LICENSE file.


#library("HashServerLib");

#import("../../third_party/HttpServer/http.dart");
#import("../../third_party/json/dart_json.dart");
#import("../HashLib/hashlib.dart");
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
              request, response, "client/HashClient.html"));
    
    addHandler("/client/HashClient.html",
      (HTTPRequest request, HTTPResponse response) =>
          fileHandler(request, response));
    
    addHandler("/client/HashClient.dart.app.js",
      (HTTPRequest request, HTTPResponse response) =>
          fileHandler(request, response));
    
    //addHandler("/client/HashClient.dart",
    //  (HTTPRequest request, HTTPResponse response) =>
    //      fileHandler(request, response));
    
    addHandler("/generateHash", _generateHashHandler);
    
    // If we are loading a dart js file, that needs to be
    // added to the request handler.
  }
}