class PJWHash implements Hasher {
  String _name;
  PJWHash([String name]) {
    _name = name;
  }
  int getHash(String str) { 
    int BitsInUnsignedInt = (4 * 8);
    int  ThreeQuarters     = ((BitsInUnsignedInt  * 3) / 4).toInt();
    int  OneEighth         = (BitsInUnsignedInt / 8).toInt();
    int  HighBits          = (0xFFFFFFFF) << (BitsInUnsignedInt - OneEighth);
    int  hash              = 0;
    int  test              = 0;

    for(int i = 0; i < str.length; i++)
    {
       hash = (hash << OneEighth) + str.charCodeAt(i);

       if((test = hash & HighBits)  != 0)
       {
          hash = (( hash ^ (test >> ThreeQuarters)) & (~HighBits));
       }
    }

    return hash;
  }
  String get name() {  return _name; }
}

