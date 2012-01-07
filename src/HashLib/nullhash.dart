class NullHash implements Hasher {
  String _name;
  NullHash([String name]) {
    _name = name;
  }
  int getHash(String str) { return 0; }
  String get name() {  return _name; }
}
