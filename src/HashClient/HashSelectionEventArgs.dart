/**
* Defines an event args structure for hash selections and submissions. */
class HashSelectionEventArgs extends EventArgs{
  final String rawString;
  final String selectedHashType;
  
  const HashSelectionEventArgs(this.rawString, this.selectedHashType);
}
