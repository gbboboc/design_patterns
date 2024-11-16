This example illustrates the structure of the `Factory Method` design pattern and focuses on the following questions:

 * What classes does it consist of?
* What roles do these classes play?
* In what way the elements of the pattern are related?

### What is the Factory Pattern?

The Factory Pattern is a creational design pattern that provides an interface for creating objects in a super class but allows subclasses to alter the type of objects that will be created. Instead of creating objects directly using a constructor, the Factory Pattern defines a method that is used to create objects, promoting loose coupling and making the code more flexible and scalable. 

* It encapsulates object creation, separating it from the client, so the exact class of the object can change without affecting the client code.

* It promotes loose coupling by adhering to the Open-Closed Principle (the class is open for extension but closed for modification).

* It is commonly used in scenarios where the exact type of the object to be created is determined dynamically at runtime.

#### When to use the Factory Pattern?

* When the exact class of the object to be created is determined at runtime.

* When the object creation logic is complex and needs to be abstracted from the client.

* In scenarios where you want to delegate the responsibility of object creation to a central place, following the Single Responsibility Principle.


#### Identification: 

Factory methods can be recognized by creation methods that construct objects from concrete classes. While concrete classes are used during the object creation, the return type of the factory methods is usually declared as either an abstract class or an interface.


#### Pros

* You avoid tight coupling between the creator and the concrete products.

* `Single Responsibility Principle.` You can move the product creation code into one place in the program, making the code easier to support.

* `Open/Closed Principle.` You can introduce new types of products into the program without breaking existing client code.

#### Cons

* The code may become more complicated since you need to introduce a lot of new subclasses to implement the pattern. The best case scenario is when you’re introducing the pattern into an existing hierarchy of creator classes.
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
