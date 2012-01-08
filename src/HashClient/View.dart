class View extends Grid implements IView {

  ViewModel vm;
  
  FrameworkElement get rootVisual() => this;
 
  View(ViewModel this.vm)
  {
    
  }
}
