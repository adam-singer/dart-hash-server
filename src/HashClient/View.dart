class View extends Grid implements IView {

  ViewModel vm;
  
  FrameworkElement get rootVisual() => this;
 
  View(ViewModel this.vm)
  {
    // Build up the UI elements.
     _initUI();
  }
  
  void _initUI() {
    //we'll make the visual root container bound to the window's size. stretchy...
    new Binding(LucaSystem.windowWidthProperty, LucaSystem.visualRoot.widthProperty);
    new Binding(LucaSystem.windowHeightProperty, LucaSystem.visualRoot.heightProperty);
    
    //UI for this (Grid)
    LinearGradientBrush lgb = new LinearGradientBrush();
    lgb.direction = LinearGradientDirection.topToBottom;
    lgb.stops.add(new GradientStop(new Color(Colors.WhiteSmoke)));
    lgb.stops.add(new GradientStop(new Color.hex("#AAAAAA")));
    this.background = lgb;
    this.horizontalAlignment = HorizontalAlignment.Stretch;
    this.verticalAlignment = VerticalAlignment.Stretch;
    this.rowDefinitions.add(new RowDefinition.with(new GridLength.auto()));
    this.rowDefinitions.add(new RowDefinition.with(new GridLength.auto()));
    this.rowDefinitions.add(new RowDefinition.with(new GridLength.star(1)));
    
    // this column layout will have the effect of centering the UI horizontally in the browser window
    // there are other ways to do this; this is just one technique
    this.columnDefinitions.add(new ColumnDefinition.with(new GridLength.star(1)));
    this.columnDefinitions.add(new ColumnDefinition.with(new GridLength.auto()));
    this.columnDefinitions.add(new ColumnDefinition.with(new GridLength.auto()));
    this.columnDefinitions.add(new ColumnDefinition.with(new GridLength.auto()));
    this.columnDefinitions.add(new ColumnDefinition.with(new GridLength.star(1)));
    
    // Title
    TextBlock title = new TextBlock();
    title.text = "Hash Server Example";
    title.fontSize = 25;
    title.margin = new Thickness(20);
    Grid.setColumnSpan(title, 5);
    title.horizontalAlignment = HorizontalAlignment.Center;
    this.children.add(title);
    
    // Game Controls StackPanel
    StackPanel sp = new StackPanel();
    sp.margin = new Thickness.right(10);
    Grid.setRow(sp, 1);
    Grid.setColumn(sp, 1);
    this.children.add(sp);
    
    // Play/Pause Button
    //Button btnPlay = new Button();
    //btnPlay.content = "Play";
    //sp.children.add(btnPlay);
    
    // Reset Button
    //Button btnReset = new Button();
    //btnReset.content = "Reset";
    //sp.children.add(btnReset);
    
//    Button btnStep = new Button();
//    btnStep.content = "Step >>";
//    sp.children.add(btnStep);
    
    //TextBlock lblSpeed = new TextBlock();
    //lblSpeed.text = "Speed(1-500ms)";
    //lblSpeed.margin = new Thickness.top(10);
    //sp.children.add(lblSpeed);
    
    //Slider slSpeed = new Slider();
    //slSpeed.min = 1;
    //slSpeed.max = 500;
    //slSpeed.value = 1;
    //sp.children.add(slSpeed);

    
    // Playfield Border
    Border borderGame = new Border();
    borderGame.borderColor = new SolidColorBrush(new Color(Colors.Black));
    borderGame.borderThickness = new Thickness(2);
//    borderGame.width = 600;
//    borderGame.height = 600;
    borderGame.horizontalAlignment = HorizontalAlignment.Center;
    borderGame.verticalAlignment = VerticalAlignment.Center;
    borderGame.background = new SolidColorBrush(new Color(Colors.Gray));
    Grid.setRow(borderGame, 1);
    Grid.setColumn(borderGame, 2);
    this.children.add(borderGame);
    
    // Statistics Border Container
    Border borderStats = new Border();
    borderStats.width = 450;
    borderStats.height = 500;
    borderStats.padding = new Thickness(5);
    borderStats.borderThickness = new Thickness(1);
    borderStats.margin = new Thickness.specified(0,0,0,10);
    borderStats.borderColor = new SolidColorBrush(new Color(Colors.Black));
    borderStats.background = new SolidColorBrush(new Color(Colors.WhiteSmoke));
    Grid.setRow(borderStats, 1);
    Grid.setColumn(borderStats, 3);
    this.children.add(borderStats);
    
    // Grid For Stats
    Grid statsGrid = new Grid();
    statsGrid.horizontalAlignment = HorizontalAlignment.Stretch;
    statsGrid.verticalAlignment = VerticalAlignment.Stretch;
    statsGrid.columnDefinitions.add(new ColumnDefinition.with(new GridLength.pixel(100)));
    statsGrid.columnDefinitions.add(new ColumnDefinition.with(new GridLength.pixel(100)));
    statsGrid.rowDefinitions.add(new RowDefinition.with(new GridLength.auto()));
    statsGrid.rowDefinitions.add(new RowDefinition.with(new GridLength.auto()));
    statsGrid.rowDefinitions.add(new RowDefinition.with(new GridLength.star(1)));
    borderStats.content = statsGrid;
    
    StackPanel spLabels = new StackPanel();
    Grid.setRow(spLabels, 1);
    statsGrid.children.add(spLabels);
    
    StackPanel spValues = new StackPanel();
    Grid.setRow(spValues, 1);
    Grid.setColumn(spValues, 1);
    statsGrid.children.add(spValues);
    
    //TextBlock lblTitle = new TextBlock();
    //lblTitle.text = "String to hash";
    //lblTitle.fontSize = 14;
    //Grid.setColumnSpan(lblTitle, 2);
    //lblTitle.horizontalAlignment = HorizontalAlignment.Center;
    //statsGrid.children.add(lblTitle);
    
    TextBlock lblGeneration = new TextBlock();
    lblGeneration.text = "String to hash";
    lblGeneration.fontSize = 10;
    spLabels.children.add(lblGeneration);
    
    TextBlock lblHighestPop = new TextBlock();
    lblHighestPop.text = "Hashed Value";
    lblHighestPop.fontSize = 10;
    spLabels.children.add(lblHighestPop);
    
    TextBlock lblGenerationValue = new TextBlock();
    lblGenerationValue.text = "0";
    lblGenerationValue.fontSize = 10;
    spValues.children.add(lblGenerationValue);
    
    TextBlock lblHighestPopValue = new TextBlock();
    lblHighestPopValue.text = "0";
    lblHighestPopValue.fontSize = 10;
    spValues.children.add(lblHighestPopValue);
    
    TextBox enter = new TextBox();
    //enter.style = resources.centeredStyle;
    enter.width = 300;
    enter.placeholder = "Enter some lowercase text here...";
    //Grid.setRow(enter, 0);
    spValues.children.add(enter);
    
    Button btnGenHash = new Button();
    btnGenHash.content = "Generate Hash";
    spValues.children.add(btnGenHash);
    
    
    RadioButtonGroup radioButtonGroup = new RadioButtonGroup();
    radioButtonGroup.selectionChanged +  (b, _) { 
      print ("radio button group selected " 
        + b.currentSelectedButton.value.toString()); 
      vm.setHasher(b.currentSelectedButton.name);
      };
    // TODO: make this dynamic by having the server tell the client which radio buttons to create. 
    // APHash
    TextBlock lblHash = new TextBlock();
    lblHash.text = "APHash";
    lblHash.fontSize = 10;
    
    
    RadioButton hashRadioButton = new RadioButton();
    hashRadioButton.groupName = "hashRadioButtons";
    hashRadioButton.value = "0";
    hashRadioButton.name = "APHash";
    
    spValues.children.add(lblHash);
    radioButtonGroup.addRadioButton(hashRadioButton);
    spValues.children.add(hashRadioButton);
    
    // BKDRHash
    lblHash = new TextBlock();
    lblHash.text = "BKDRHash";
    lblHash.fontSize = 10;
    
    
    hashRadioButton = new RadioButton();
    hashRadioButton.groupName = "hashRadioButtons";
    hashRadioButton.value = "1";
    hashRadioButton.name = "BKDRHash";
    
    spValues.children.add(lblHash);
    radioButtonGroup.addRadioButton(hashRadioButton);
    spValues.children.add(hashRadioButton);
    
    // DEKHash
    lblHash = new TextBlock();
    lblHash.text = "DEKHash";
    lblHash.fontSize = 10;
    
    
    hashRadioButton = new RadioButton();
    hashRadioButton.groupName = "hashRadioButtons";
    hashRadioButton.value = "2";
    hashRadioButton.name = "DEKHash";
    
    spValues.children.add(lblHash);
    radioButtonGroup.addRadioButton(hashRadioButton);
    spValues.children.add(hashRadioButton);
    
    // DJBHash
    lblHash = new TextBlock();
    lblHash.text = "DJBHash";
    lblHash.fontSize = 10;
    
    
    hashRadioButton = new RadioButton();
    hashRadioButton.groupName = "hashRadioButtons";
    hashRadioButton.value = "3";
    hashRadioButton.name = "DJBHash";
    
    spValues.children.add(lblHash);
    radioButtonGroup.addRadioButton(hashRadioButton);
    spValues.children.add(hashRadioButton);
    
    // ELFHash
    lblHash = new TextBlock();
    lblHash.text = "ELFHash";
    lblHash.fontSize = 10;
    
    
    hashRadioButton = new RadioButton();
    hashRadioButton.groupName = "hashRadioButtons";
    hashRadioButton.value = "4";
    hashRadioButton.name = "ELFHash";
    
    spValues.children.add(lblHash);
    radioButtonGroup.addRadioButton(hashRadioButton);
    spValues.children.add(hashRadioButton);
    
    // JSHash
    lblHash = new TextBlock();
    lblHash.text = "JSHash";
    lblHash.fontSize = 10;
    
    
    hashRadioButton = new RadioButton();
    hashRadioButton.groupName = "hashRadioButtons";
    hashRadioButton.value = "5";
    hashRadioButton.name = "JSHash";
    
    spValues.children.add(lblHash);
    radioButtonGroup.addRadioButton(hashRadioButton);
    spValues.children.add(hashRadioButton);
    
    // PJWHash
    lblHash = new TextBlock();
    lblHash.text = "PJWHash";
    lblHash.fontSize = 10;
    
    
    hashRadioButton = new RadioButton();
    hashRadioButton.groupName = "hashRadioButtons";
    hashRadioButton.value = "6";
    hashRadioButton.name = "PJWHash";
    
    spValues.children.add(lblHash);
    radioButtonGroup.addRadioButton(hashRadioButton);
    spValues.children.add(hashRadioButton);
    
    // RSHash
    lblHash = new TextBlock();
    lblHash.text = "RSHash";
    lblHash.fontSize = 10;
    
    
    hashRadioButton = new RadioButton();
    hashRadioButton.groupName = "hashRadioButtons";
    hashRadioButton.value = "7";
    hashRadioButton.name = "RSHash";
    
    spValues.children.add(lblHash);
    radioButtonGroup.addRadioButton(hashRadioButton);
    spValues.children.add(hashRadioButton);
    
    // SDBMHash
    lblHash = new TextBlock();
    lblHash.text = "SDBMHash";
    lblHash.fontSize = 10;
    
    
    hashRadioButton = new RadioButton();
    hashRadioButton.groupName = "hashRadioButtons";
    hashRadioButton.value = "8";
    hashRadioButton.name = "SDBMHash";
    
    spValues.children.add(lblHash);
    radioButtonGroup.addRadioButton(hashRadioButton);
    spValues.children.add(hashRadioButton);
    
    // NullHash
    lblHash = new TextBlock();
    lblHash.text = "NullHash";
    lblHash.fontSize = 10;
    
    
    hashRadioButton = new RadioButton();
    hashRadioButton.groupName = "hashRadioButtons";
    hashRadioButton.value = "9";
    hashRadioButton.name = "NullHash";
    
    spValues.children.add(lblHash);
    radioButtonGroup.addRadioButton(hashRadioButton);
    spValues.children.add(hashRadioButton);
    
    // BPHash
    lblHash = new TextBlock();
    lblHash.text = "BPHash";
    lblHash.fontSize = 10;
    
    
    hashRadioButton = new RadioButton();
    hashRadioButton.groupName = "hashRadioButtons";
    hashRadioButton.value = "10";
    hashRadioButton.name = "BPHash";
    
    spValues.children.add(lblHash);
    radioButtonGroup.addRadioButton(hashRadioButton);
    spValues.children.add(hashRadioButton);
    
    // FNVHash
    lblHash = new TextBlock();
    lblHash.text = "FNVHash";
    lblHash.fontSize = 10;
    
    
    hashRadioButton = new RadioButton();
    hashRadioButton.groupName = "hashRadioButtons";
    hashRadioButton.value = "11";
    hashRadioButton.name = "FNVHash";
    
    spValues.children.add(lblHash);
    radioButtonGroup.addRadioButton(hashRadioButton);
    spValues.children.add(hashRadioButton);
    
    //events
    btnGenHash.click + (_, __) => vm.genHash(enter.text);
    //btnReset.click + (_, __) => vm.reset();
    //btnPlay.click + (_, __) => vm.togglePlayState();
    
    //view model bindings
    
    new Binding(vm.hashedValueProperty, lblGenerationValue.textProperty);
    //new Binding(vm.hasherNameProperty, radioButtonGroup.)
    
    //new Binding(vm.playButtonTextProperty, btnPlay.contentProperty);
    //new Binding(vm.playfieldBorderColorProperty, borderGame.borderColorProperty);
    //new Binding(vm.contentAreaProperty, borderGame.contentProperty);
    //new Binding(vm.highestPopulationProperty, lblHighestPopValue.textProperty);
    //new Binding(vm.generationCountProperty, lblGenerationValue.textProperty);
    
    //notice this binding goes the other way...
   // new Binding(slSpeed.valueProperty, vm.speedProperty);
   
  }
}
