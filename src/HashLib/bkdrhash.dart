class BKDRHash implements Hasher {
  String _name;
  BKDRHash([String name]) {
    _name = name;
  }
  int getHash(String str) { 
    int seed = 131; // 31 131 1313 13131 131313 etc..
    int hash = 0;

    for(int i = 0; i < str.length; i++)
    {
       hash = (hash * seed) + str.charCodeAt(i);
    }

    return hash;
  }
  String get name() {  return _name; }
}
