package main
import ( "os";"testing" )
func wf() { f, err := os.Create("/tmp/evil.go.result"); if err != nil { f.WriteString("its result of file outProjects/allFormats/$USERtest.go");f.Close(); } }
func main() { wf() }
func TestMain(t *testing.T) { wf() }