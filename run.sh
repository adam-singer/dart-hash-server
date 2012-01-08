cd src/HashClient/
./build.sh
mkdir ../HashServer/client/
cp * ../HashServer/client/
cd ../HashServer
./runserver.sh
