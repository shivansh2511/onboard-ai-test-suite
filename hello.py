# hello.py

def greet_user(name):
    """A simple function to greet a user."""
    print(f"Hello, {name}!")

class Calculator:
    """A basic calculator class."""
    def __init__(self, initial_value=0):
        self.value = initial_value

    def add(self, x):
        self.value += x
        return self.value