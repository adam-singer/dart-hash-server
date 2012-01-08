interface ViewModel default _ViewModelImplementation {

  ViewModel();
  FrameworkProperty hashedValueProperty;
  FrameworkProperty hasherNameProperty;
  void genHash(String str);
  void setHasher(String str);
}

class _ViewModelImplementation extends ViewModelBase implements ViewModel
{
  View view;
  GenerateHash generateHash;
  FrameworkProperty hashedValueProperty;
  FrameworkProperty hasherNameProperty;
  
  String _hasherName;
  
  _ViewModelImplementation() {
    _initProperties();
    
    _initializeView();

  }
  
  void _initializeView() {
    view = new View(this);
    generateHash = new GenerateHash();
    generateHash.f = (var s) {
      setValue(hashedValueProperty, s);
    };
    //set the view
    LucaSystem.rootView = view;
  }
  
  void _initProperties() {
  
    hashedValueProperty = new FrameworkProperty(this, "hashedValueProperty", (_){
      
    },"test");
    
    hasherNameProperty = new FrameworkProperty(this, "hasherNameProperty", (var s){
      _hasherName = s;
    },"DJBHash");
  }
  
  void setHasher(String str) {
    print("setHasher="+str);
    _hasherName = str;
  }
  
  void genHash(String str) {
    print ("genHash implementation :" + str + "\n" + "_hasherName = " + _hasherName);
    generateHash.handlePostMessage(str, _hasherName);
    print ("genHash implementation :" + str);
  }
}