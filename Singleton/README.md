## What is the Singleton Pattern?

**The Singleton Pattern makes sure that a class has only one instance and provides a way to access that instance globally. It prevents creating multiple instances of the same class, ensuring there is only one.** 

* The pattern controls the creation of the class and provides a single access point to that instance. It is commonly used in cases where having multiple instances would cause issues or where shared resources need to be managed centrally.

* Common uses include logging, managing configurations, handling database connections, and caching.

### You should use the Singleton Pattern when:

* You need exactly one instance of a class across the entire application.
* You want to control global access to that single instance.
* You need centralized management for resources like database connections or configurations.

  **The example is a Counter class that has:**

* a `getInstance` method that returns the value of the instance
* a `getCount` method that returns the current value of the `counter` variable
* an `increment` method that increments the value of `counter` by one
* a `decrement` method that decrements the value of `counter` by one

