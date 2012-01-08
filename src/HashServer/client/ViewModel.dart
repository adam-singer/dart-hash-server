interface ViewModel default _ViewModelImplementation {

  ViewModel();
  FrameworkProperty hashedValueProperty;
  FrameworkProperty hasherNameProperty;
  List<String> hashNames;
  void genHash(Object origin, HashSelectionEventArgs args);
}

class _ViewModelImplementation extends ViewModelBase implements ViewModel
{
  View view;
  GenerateHash generateHash;
  FrameworkProperty hashedValueProperty;
  FrameworkProperty hasherNameProperty;
  
  // NOTE (John)
  // you can generate this from your model later (server side...)
  List<String> hashNames = const ["APHash", "BKDRHash", "DEKHash", "DJBHash",
                                  "ELFHash","JSHash","PJWHash","RSHash",
                                  "SDBMHash","NullHash","BPHash","FNVHash"];
  String _hasherName;
  
  _ViewModelImplementation() {
    _initProperties();
    
    _initializeView();

  }
  
  void _initializeView() {
    view = new View(this);
    
    // Subscribe to the view's 'inputSubmitted' event
    view.inputSubmitted + genHash;
    
    generateHash = new GenerateHash();
    generateHash.f = (var s) {
      setValue(hashedValueProperty, s);
    };
    //set the view
    LucaSystem.rootView = view;
  }
  
  void _initProperties() {
  
    hashedValueProperty = new FrameworkProperty(this, "hashedValueProperty", (_){
      
    },"0");
    
    hasherNameProperty = new FrameworkProperty(this, "hasherNameProperty", (var s){
      _hasherName = s;
    },"DJBHash");
  }
  
  void setHasher(String str) {
    print("setHasher="+str);
    _hasherName = str;
  }
  
  // NOTE (John)
  // Now using FrameworkEvent signature with custom EventArgs...
  void genHash(Object origin, HashSelectionEventArgs args) {
    
    setHasher(args.selectedHashType);
    
    print ("genHash implementation :" + args.rawString + "\n" + "_hasherName = " + args.selectedHashType);
    generateHash.handlePostMessage(args.rawString, args.selectedHashType);
    print ("genHash implementation :" + args.selectedHashType);
  }
}