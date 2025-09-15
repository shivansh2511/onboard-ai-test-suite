// main.go
package main

import "fmt"

func GetGreeting(name string) string {
	return "Hello from Go, " + name + "!"
}

func main() {
	message := GetGreeting("developer")
	fmt.Println(message)
}