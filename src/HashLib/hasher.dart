// defined interface
interface Hasher default HasherImpl {
    Hasher([String name]);
    int getHash(String str);
    String get name;
}
