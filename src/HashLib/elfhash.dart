class ELFHash implements Hasher {
  String _name;
  ELFHash([String name]) {
    _name = name;
  }
  int getHash(String str) { 
    int hash = 0;
    int x    = 0;

    for(int i = 0; i < str.length; i++)
    {
       hash = (hash << 4) + str.charCodeAt(i);

       if((x = hash & 0xF0000000) != 0)
       {
          hash ^= (x >> 24);
       }
       hash &= ~x;
    }

    return hash;
  }
  String get name() {  return _name; }
}
