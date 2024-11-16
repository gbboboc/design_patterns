This example illustrates the structure of the `Strategy` design pattern and focuses on the following questions:

* What classes does it consist of?

* What roles do these classes play?
* In what way are the elements of the pattern related?

#### What is the Strategy Pattern?
* The **Strategy Pattern** is a behavioral design pattern that defines a family of algorithms, encapsulates each one, and makes them interchangeable. It allows the algorithm to vary independently from the clients that use it, promoting flexibility and reusability.

* It separates the logic of a specific algorithm from the context in which it is used.
* It enables the selection of an algorithm at runtime, allowing for dynamic behavior changes.
* It adheres to the Open/Closed Principle by enabling new strategies to be added without modifying the existing context or client code.

#### When to use the Strategy Pattern?

* When you have multiple algorithms for a specific task, and you want to choose the appropriate one dynamically.
* When you want to avoid hardcoding multiple conditional statements to select different behaviors.
* In scenarios where you want to encapsulate algorithm variations and make them reusable across different contexts.

#### Identification: 
* Strategy pattern can be recognized by a method that lets a nested object do the actual work, as well as a setter that allows replacing that object with a different one.

#### Pros

* You can swap algorithms used inside an object at runtime.
* You can isolate the implementation details of an algorithm from the code that uses it.
* You can replace inheritance with composition.
* `Open/Closed Principle.` You can introduce new strategies without having to change the context.


#### Cons

* If you only have a couple of algorithms and they rarely change, there’s no real reason to overcomplicate the program with new classes and interfaces that come along with the pattern.
* Clients must be aware of the differences between strategies to be able to select a proper one.
* A lot of modern programming languages have functional type support that lets you implement different versions of an algorithm inside a set of anonymous functions. Then you could use these functions exactly as you’d have used the strategy objects, but without bloating your code with extra classes and interfaces.