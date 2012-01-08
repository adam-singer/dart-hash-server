rm -rf out
mkdir out
mkdir out/client

cd src/HashClient/
./build.sh
cp * ../../out/client/
cd ../HashServer
cp * ../../out/
