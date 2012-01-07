class APHash implements Hasher {
  String _name;
  APHash([String name]) {
    _name = name;
  }
  int getHash(String str) { 
    int hash = 0xAAAAAAAA;

    for(int i = 0; i < str.length; i++)
    {
       if ((i & 1) == 0)
       {
          hash ^= ((hash << 7) ^ str.charCodeAt(i) * (hash >> 3));
       }
       else
       {
          hash ^= (~((hash << 11) + str.charCodeAt(i) ^ (hash >> 5)));
       }
    }

    return hash;
  }
  String get name() {  return _name; }
}

