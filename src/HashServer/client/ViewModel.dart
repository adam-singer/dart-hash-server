interface ViewModel default _ViewModelImplementation {

  ViewModel();
  
  void genHash(String str);
}

class _ViewModelImplementation extends ViewModelBase implements ViewModel
{
  View view;
  GenerateHash generateHash;
  
  _ViewModelImplementation() {
    _initializeView();
  }
  
  void _initializeView() {
    view = new View(this);
    generateHash = new GenerateHash();
    //set the view
    LucaSystem.rootView = view;
  }
  
  void genHash(String str) {
    generateHash.handlePostMessage(str);
    print ("genHash implementation :" + str);
  }
}