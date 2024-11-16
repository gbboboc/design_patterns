<<<<<<< HEAD
This example illustrates the structure of the `Singleton` design pattern and focuses on the following questions:

* What classes does it consist of?

* What roles do these classes play?

* In what way the elements of the pattern are related?
=======
## What is the Singleton Pattern?

**The Singleton Pattern makes sure that a class has only one instance and provides a way to access that instance globally. It prevents creating multiple instances of the same class, ensuring there is only one.** 
>>>>>>> d5609d4b30868e7a48d548b3213b0cec9c83e59b

* The pattern controls the creation of the class and provides a single access point to that instance. It is commonly used in cases where having multiple instances would cause issues or where shared resources need to be managed centrally.

* Common uses include logging, managing configurations, handling database connections, and caching.

### You should use the Singleton Pattern when:

* You need exactly one instance of a class across the entire application.
* You want to control global access to that single instance.
* You need centralized management for resources like database connections or configurations.

  **The example is a Counter class that has:**

1. a `getInstance` method that returns the value of the instance
2. a `getCount` method that returns the current value of the `counter` variable
3. an `increment` method that increments the value of `counter` by one
4. a `decrement` method that decrements the value of `counter` by one

#### Identification: 

* Singleton can be recognized by a static creation method, which returns the same cached object.

 #### Pros

* You can be sure that a class has only a single instance.

* You gain a global access point to that instance.

* The singleton object is initialized only when it’s requested for the first time.

 #### Cons

 * Violates the `Single Responsibility Principle.` The pattern solves two problems at the time.

 * The Singleton pattern can mask bad design, for instance, when the components of the program know too much about each other.

 * The pattern requires special treatment in a multithreaded environment so that multiple threads won’t create a singleton object several times.

 * It may be difficult to unit test the client code of the Singleton because many test frameworks rely on inheritance when producing mock objects. Since the constructor of the singleton class is private and overriding static methods is impossible in most languages, you will need to think of a creative way to mock the singleton. Or just don’t write the tests. Or don’t use the Singleton pattern.