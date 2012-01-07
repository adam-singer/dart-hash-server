class BPHash implements Hasher {
  String _name;
  BPHash([String name]) {
    _name = name;
  }
  int getHash(String str) {  
    int hash = 0;

    for(int i = 0; i < str.length; i++)
    {
       hash = hash << 7 ^ str.charCodeAt(i);
    }

    return hash; 
  }
  String get name() {  return _name; }
}
