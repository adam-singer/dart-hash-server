class HashServerCommand {
  static final START = 0;
  static final STOP = 1;

  HashServerCommand.start(String this._host,
                          int this._port,
                          [int backlog = 5,
                           bool logging = false])
      : _command = START, _backlog = backlog, _logging = logging;
  HashServerCommand.stop() : _command = STOP;

  bool get isStart() => _command == START;
  bool get isStop() => _command == STOP;

  String get host() => _host;
  int get port() => _port;
  bool get logging() => _logging;
  int get backlog() => _backlog;

  int _command;
  String _host;
  int _port;
  int _backlog;
  bool _logging;
}
