## What is the Module Pattern?

**The Module Pattern helps organize code by encapsulating private data and functions within a closure, exposing only the parts that need to be accessed publicly. This prevents cluttering the global scope and allows controlled access to certain variables or methods.** 

* It enables the creation of private variables and methods that can’t be accessed from outside the module, while exposing an interface for the necessary public functionality.

### You should use the Module Pattern when:

* You want to keep data or functions private and only allow controlled access to them.
* You want to avoid global scope pollution, especially in large codebases with many variables and functions.
* Different parts of the code need access to certain functionality but shouldn’t interact with internal implementation details.


**The example is a `ShoppingCartModule` that:**

* maintains a list of items in the cart (in private scope).
* exposes public methods to add items, remove items, and view the cart’s contents.
