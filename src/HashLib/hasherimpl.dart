class HasherImpl { 
   //factory HasherImpl([String name]) {
   //  return new NullHash();
   //}
   
   factory Hasher([String name]) {
     // move this to the default on the swtich
     if (!(name is String) || name.isEmpty()) {
       return new NullHash();
     }
     
     switch(name) {
       case "RSHash":
         return new RSHash(name);
         break;
       
       case "JSHash":
         return new JSHash(name);
         break;
         
       case "APHash":
         return new APHash(name);
         break;
         
       case "BKDRHash":
         return new BKDRHash(name);
         break;
         
       case "BPHash":
         return new BPHash(name);
         break;
         
       case "DEKHash":
         return new DEKHash(name);
         break;
         
       case "DJBHash":
         return new DJBHash(name);
         break;
         
         
       case "ELFHash":
         return new ELFHash(name);
         break;
         
       case "FNVHash":
         return new FNVHash(name);
         break;
         
       case "PJWHash":
         return new PJWHash(name);
         break;
         
       case "SDBMHash":
         return new SDBMHash(name);
         break;
     };
   }
}
