The example is a Counter class that has:

* a `getInstance` method that returns the value of the instance
* a `getCount` method that returns the current value of the `counter` variable
* an `increment` method that increments the value of `counter` by one
* a `decrement` method that decrements the value of `counter` by one

 ### What is the Singleton Pattern?
 
 The Singleton pattern ensures that a class has only one instance and provides a global point of access to that instance. This pattern is used to prevent multiple instances of the same class from being created, ensuring consistency throughout the application. 

* It restricts the instantiation of a class to only one object.

* A global access point is provided to get that instance.

* It is often used in other design patterns like Abstract Factory, Builder, and Prototype.

* Common use cases include logging, drivers, caching, and thread pools.

 #### When to use the Singleton Pattern?

* When you need exactly one instance of a class and want to control its global access.

* If the sole instance needs to be extensible by subclassing and clients should be able to use an extended instance without modifying the existing code.

* In scenarios where resource management, such as database connections or configuration settings, needs centralized handling.

