#FROGC=~/dart_bleeding/dart/frog/frogc 
#PATH=$PATH:~/dart_bleeding/dart/out/Debug_ia32/
# $FROGC HashClient.dart
#~/dart_bleeding/dart/out/Debug_ia32/dart-sdk/bin/frogc HashClient.dart
MINFROG=~/dart_bleeding/dart/frog/minfrog
$MINFROG --out=HashClient.dart.app.js --compile-only HashClient.dart
