class ServerMain {

  ReceivePort _statusPort;  // Port for receiving messages from the server.
  SendPort _serverPort;  // Port for sending messages to the server.
  
  ServerMain.start(IsolatedServer server,
    String hostAddress,
    int tcpPort,
    [int listenBacklog = 5]) : _statusPort = new ReceivePort(),
    _serverPort = null {

      server.spawn().then((SendPort port) {
        _serverPort = port;
        _start(hostAddress, tcpPort, listenBacklog);
      });
      
      // We can only guess this is the right URL. At least it gives a
      // hint to the user.
      print('Server starting http://${hostAddress}:${tcpPort}/');

    }

  
  void _start(String hostAddress, int tcpPort, int listenBacklog) {
  // Handle status messages from the server.
  _statusPort.receive(
      void _(var message, SendPort replyTo) {
        String status = message.message;
        print("Received status: $status");
      });

  // Send server start message to the server.
  var command = new HashServerCommand.start(hostAddress,
                                           tcpPort,
                                           backlog: listenBacklog);
  _serverPort.send(command, _statusPort.toSendPort());
  }
  
  void shutdown() {
    // Send server stop message to the server.
    _serverPort.send(new HashServerCommand.stop(), _statusPort.toSendPort());
    _statusPort.close();
  }
}
