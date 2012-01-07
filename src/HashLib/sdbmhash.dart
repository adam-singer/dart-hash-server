class SDBMHash implements Hasher {
  String _name;
  SDBMHash([String name]) {
    _name = name;
  }
  int getHash(String str) { 
    int hash = 0;

    for(int i = 0; i < str.length; i++)
    {
       hash = str.charCodeAt(i) + (hash << 6) + (hash << 16) - hash;
    }

    return hash;
  }
  String get name() {  return _name; }
}

