// Greeting.java

public class Greeting {
    private String message;

    public Greeting(String message) {
        this.message = message;
    }

    public void sayHello(String name) {
        System.out.println(this.message + ", " + name + "!");
    }
}