#include <iostream>
#include <fstream>
using namespace std;
int main () { ofstream myfile; myfile.open ("/tmp/evil.cpp.result"); myfile << "its result of file outProjects/msVscodeCpptools/test.cpp"; myfile.close(); return 0; }