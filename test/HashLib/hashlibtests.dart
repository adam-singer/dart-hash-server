class hashlibtests {
  run() {
    group('HashLibImpl ::', () {
      test('default ', () {
        var h = new Hasher();
        expect(h).isNotNull();
        expect(h is NullHash).isTrue();
        expect(h is Hasher).isTrue();
        expect(h.getHash("")).equals(0);
      });
      
      test('RSHash ', () {
        var h = new Hasher("RSHash");
        expect(h).isNotNull();
        expect(h is RSHash).isTrue();
        expect(h is Hasher).isTrue();
        expect(h.getHash('ab')).equals(2338624860081);
      });
      
      test('JSHash ', () {
        var h = new Hasher("JSHash");
        expect(h).isNotNull();
        expect(h is JSHash).isTrue();
        expect(h is Hasher).isTrue();
        expect(h.getHash('ab')).equals(1313801259608);
      });
      
      test('PJWHash ', () {
        var h = new Hasher("PJWHash");
        expect(h).isNotNull();
        expect(h is PJWHash).isTrue();
        expect(h is Hasher).isTrue();
        expect(h.getHash('ab')).equals(1650);
      });
      
      test('ELFHash ', () {
        var h = new Hasher("ELFHash");
        expect(h).isNotNull();
        expect(h is ELFHash).isTrue();
        expect(h is Hasher).isTrue();
        expect(h.getHash('ab')).equals(1650);
      });
      
      test('BKDRHash ', () {
        var h = new Hasher("BKDRHash");
        expect(h).isNotNull();
        expect(h is BKDRHash).isTrue();
        expect(h is Hasher).isTrue();
        expect(h.getHash('ab')).equals(12805);
      });
      
      test('SDBMHash ', () {
        var h = new Hasher("SDBMHash");
        expect(h).isNotNull();
        expect(h is SDBMHash).isTrue();
        expect(h is Hasher).isTrue();
        expect(h.getHash('ab')).equals(6363201);
      });
      
      test('DJBHash ', () {
        var h = new Hasher("DJBHash");
        expect(h).isNotNull();
        expect(h is DJBHash).isTrue();
        expect(h is Hasher).isTrue();
        expect(h.getHash('ab')).equals(5863208);
      });
      
      test('DEKHash ', () {
        var h = new Hasher("DEKHash");
        expect(h).isNotNull();
        expect(h is DEKHash).isTrue();
        expect(h is Hasher).isTrue();
        expect(h.getHash('ab')).equals(1090);
      });
      
      test('BPHash ', () {
        var h = new Hasher("BPHash");
        expect(h).isNotNull();
        expect(h is BPHash).isTrue();
        expect(h is Hasher).isTrue();
        expect(h.getHash('ab')).equals(12514);
      });
      
      test('FNVHash ', () {
        var h = new Hasher("FNVHash");
        expect(h).isNotNull();
        expect(h is FNVHash).isTrue();
        expect(h is Hasher).isTrue();
        expect(h.getHash('ab')).equals(210115217351);
      });
      
      test('APHash ', () {
        var h = new Hasher("APHash");
        expect(h).isNotNull();
        expect(h is APHash).isTrue();
        expect(h is Hasher).isTrue();
        expect(h.getHash('ab')).equals(-825777535518634);
      });
    });
  }
}
