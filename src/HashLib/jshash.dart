class JSHash implements Hasher {
  String _name;
  JSHash([String name]) {
    _name = name;
  }
  int getHash(String str) { 
    int hash = 1315423911;

    for(int i = 0; i < str.length; i++)
    {
       hash ^= ((hash << 5) + str.charCodeAt(i) + (hash >> 2));
    }

    return hash;
  }
  String get name() {  return _name; }
}

