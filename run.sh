export FROG=~/dart_bleeding/dart/frog/minfrog
export DART=~/dart_bleeding/dart/out/Debug_ia32/dart
cd src/HashClient/
./build.sh
mkdir ../HashServer/client/
cp * ../HashServer/client/
cd ../HashServer
./runserver.sh
