class DEKHash implements Hasher {
  String _name;
  DEKHash([String name]) {
    _name = name;
  }
  int getHash(String str) { 
    int hash = str.length;

    for(int i = 0; i < str.length; i++)
    {
       hash = ((hash << 5) ^ (hash >> 27)) ^ str.charCodeAt(i);
    }

    return hash;
  }
  String get name() {  return _name; }
}
