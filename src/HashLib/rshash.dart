class RSHash implements Hasher {
  String _name;
  RSHash([String name]) {
    _name = name;
  }
  int getHash(String str) { 
    int b     = 378551;
    int a     = 63689;
    num hash = 0;

    for(int i = 0; i < str.length; i++)
    {
       hash = hash * a + str.charCodeAt(i);
       a    = a * b;
    }

    return hash;
  }
  String get name() {  return _name; }
}
