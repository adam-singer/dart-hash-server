An example client/server dart application that uses the LUCA framework and dart http server. The server is based on the components found in [dart/samples/chat/](https://code.google.com/p/dart/source/browse/#svn%2Fbranches%2Fbleeding_edge%2Fdart%2Fsamples%2Fchat). This application shows how one could create a client application that posts json data to a http server that then makes some calculations (in this example its hash values) and returns to the client. 

Build & Run this application:

git clone git://github.com/financeCoding/dart-hash-server.git
git submodule update --init
cd dart-hash-server
./run.sh

Before running you might need to adjust the location of the frog and dart locations in the run.sh. 

[LUCA](https://github.com/LUCA-Studios-LLC/LUCA-UI-Framework-for-Dart) 
[HTTP server](https://code.google.com/p/dart/source/browse/#svn%2Fbranches%2Fbleeding_edge%2Fdart%2Fsamples%2Fchat)


