class View implements IView {
  StackPanel rootElement;
  
  final FrameworkEvent<HashSelectionEventArgs> inputSubmitted;
  
  ViewModel vm;
  
  FrameworkElement get rootVisual() => rootElement;
 
  View(ViewModel this.vm):
    inputSubmitted = new FrameworkEvent<HashSelectionEventArgs>()
  {
    // Build up the UI elements.
     rootElement = _buildUI();
     
     _initEventsAndBindings();
  }
  
  StackPanel _buildUI() {

    //we'll make the visual root container bound to the window's size. stretchy...
    new Binding(LucaSystem.windowWidthProperty, LucaSystem.visualRoot.widthProperty);
    new Binding(LucaSystem.windowHeightProperty, LucaSystem.visualRoot.heightProperty);
    
    //Some properties for the root container
    LinearGradientBrush lgb = new LinearGradientBrush();
    lgb.direction = LinearGradientDirection.topToBottom;
    lgb.stops.add(new GradientStop(new Color(Colors.WhiteSmoke)));
    lgb.stops.add(new GradientStop(new Color.hex("#AAAAAA")));
    LucaSystem.visualRoot.background = lgb;
    
    // Define our UI as xml (easier to work with and test 
    // at www.lucastudios.com/trylucaui)

    String uiXml = 
'''
<!-- main ui container -->
<stackpanel 
  horizontalalignment="center" verticalalignment="center">

  <!-- title -->
  <border width="300">
    <textblock horizontalalignment="center" verticalalignment="center"
      text="Hash Server Example" fontsize="25"></textblock>
  </border>
  
  <!-- main ui layout -->
  <border borderthickness="1" background="WhiteSmoke" bordercolor="Black"
  padding="5" margin="5,0,0,0">
    <stackpanel>
      <stackpanel>
        <textblock text="String To Be Hashed"></textblock>
        <textbox name="tbRawString"></textbox>
      </stackpanel>
      <stackpanel margin="10,0,0,0">
        <textblock text="Hashed Result:"></textblock>
        <textblock name="lblHashedString"></textblock>
      </stackpanel>
      <button name="btnGenHash" margin="5,0,0,0" width="110" content="Generate Hash"></button>
      
      <border margin="0,10" padding="5" width="300" borderthickness="1" cornerradius="5px" bordercolor="Gray">
        <stackpanel>
      <textblock text="Select Hash Algorithm"></textblock>
    ''';

    // NOTE (John)
    // at this point, drop back into code and generate the xml for
    // the hash pick list dynamically
    // LUCA UI will have a dropdown list soon...
    for (int i = 0; i < vm.hashNames.length; i++){
    uiXml = uiXml + '''
    <stackpanel margin="5,0,0,0" orientation="horizontal">
    <radiobutton groupname="hashRadioButtons" name="${vm.hashNames[i]}" value="${i}"></radiobutton>
    <textblock margin="0,0,0,5" text="${vm.hashNames[i]}"></textblock>
    </stackpanel>
    ''';
    }

    // append the tag endings
    uiXml = uiXml + "</stackpanel></border>";
    
    // Now turn the xml into LUCA UI object tree
    var p = new LucaxmlPresentationProvider();
    return p.deserialize(uiXml);
  }
  
  void _initEventsAndBindings(){
    if (rootVisual == null) throw const Exception("root visual not initialized.");
    
    // get object references that we need
    // LUCA UI will do this automatically in the future...
    TextBox tbRawString = LucaSystem.findByName("tbRawString", rootVisual);
    Button btnGenHash = LucaSystem.findByName("btnGenHash", rootVisual);
    TextBlock lblHashedString = LucaSystem.findByName("lblHashedString", rootVisual);
    
    RadioButtonGroup bg = _groupRadiosByGroupName("hashRadioButtons");
    
    // NOTE (John)
    // Instead of calling the view model method directly, our view can just
    // publish an event that the vm subscribes to (or any other class)
    // this makes the view more independent in a MVVM context
    btnGenHash.click + (_,__) => 
        inputSubmitted.invoke(btnGenHash, new HashSelectionEventArgs(tbRawString.text, 
          vm.hashNames[Math.parseInt(bg.currentSelectedButton.value.toString())]));
    
    new Binding(vm.hashedValueProperty, lblHashedString.textProperty);
  }

  RadioButtonGroup _groupRadiosByGroupName(String groupName){
    //throw const NotImplementedException();
    RadioButtonGroup bg = new RadioButtonGroup();
    
    for (int i = 0; i < vm.hashNames.length; i++){
      var r = LucaSystem.findByName(vm.hashNames[i], rootElement);
      //print('r = ' + r);
      bg.addRadioButton(r); 
    }
    
    return bg;
    
  }
  
  // NOTE (John)
  // this utility function should and will be part of the core framework
  
  List<FrameworkElement> findByType(String elementType, FrameworkElement startingWith){
    throw const NotImplementedException();
  }
  
  void _findByTypeInternal(String elementType, List<FrameworkElement> results, FrameworkElement startingWith){
    throw const NotImplementedException();
  }
}
