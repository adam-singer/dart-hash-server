class DJBHash implements Hasher {
  String _name;
  DJBHash([String name]) {
    _name = name;
  }
  int getHash(String str) { 
    int hash = 5381;

    for(int i = 0; i < str.length; i++)
    {
       hash = ((hash << 5) + hash) + str.charCodeAt(i);
    }

    return hash;
  }
  String get name() {  return _name; }
}

