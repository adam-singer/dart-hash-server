#import('../../src/HashLib/hashlib.dart');
#import('../../third_party/unittest/unittest_vm.dart');
#source('hashlibtests.dart');

class HashLibTest {

  HashLibTest() {
  }

  void run() {
    print("running unit tests");
    new hashlibtests().run();
  }
}

void main() {
  new HashLibTest().run();
}
