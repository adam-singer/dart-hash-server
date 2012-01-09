#import('hashserverlib.dart');

final DEFAULT_PORT = 8123;
final DEFAULT_HOST = "192.168.1.186";

void main() {


  ServerMain serverMain =
      new ServerMain.start(new HashServer(), DEFAULT_HOST, DEFAULT_PORT);

}
