class FNVHash implements Hasher {
  String _name;
  FNVHash([String name]) {
    _name = name;
  }
  int getHash(String str) { 
    int fnv_prime = 0x811C9DC5;
    int hash = 0;

    for(int i = 0; i < str.length; i++)
    {
    hash *= fnv_prime;
    hash ^= str.charCodeAt(i);
    }

    return hash;
  }
  String get name() {  return _name; }
}