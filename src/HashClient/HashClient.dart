#import('dart:html');
#import("dart:json");
#import('../../third_party/LUCA/core/LUCA_UI_Framework.dart');
//#import('../../third_party/LUCA/demos/DemoStyles/DemoStyles.dart');
#source('View.dart');
#source('ViewModel.dart');
#source('GenerateHash.dart');

// To compile:
// minfrog --out=ValueConversion.dart.app.js --compile-only ValueConversion.dart

class HashClient {
  final ViewModel vm;
  
  
  HashClient(): vm = new ViewModel() {
  }
}

void main() {
  //initialize the framework
  new LucaSystem();
  
  new HashClient();
}
