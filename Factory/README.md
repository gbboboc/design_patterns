## What is the Factory Pattern?

**The Factory Pattern is a way to create objects in a flexible and organized way. Instead of directly using a constructor to create an object, you use a method that handles the creation. This makes the code more adaptable and easier to maintain.** 

* The pattern separates the process of creating an object from the code that uses the object. This means that the type of object being created can change without affecting the rest of the code.

* It follows the `Open-Closed Principle`: the code can be extended to create new types of objects without changing existing code.

### You should use the Factory Pattern when:

* You don't know the exact type of object to create until the program is running.
* The process of creating an object is complicated and you want to keep that complexity hidden from the rest of the code.
* You want a single place responsible for object creation, which also follows the `Single Responsibility Principle`.

**The example is a `VehicleFactory` that:**

* creates different types of vehicles (e.g., Car, Truck) based on a specified type.

* encapsulates the object creation process, allowing the client to request an object without knowing the specific class or how it is created.
