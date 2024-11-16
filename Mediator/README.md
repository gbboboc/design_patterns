This example illustrates the structure of the `Mediator` design pattern and focuses on the following questions:

* What classes does it consist of?
* What roles do these classes play?
* In what way the elements of the pattern are related?

### What is the Mediator Pattern?
The Mediator Pattern is a behavioral design pattern that defines an object (the mediator) to encapsulate how a set of objects interact with each other. Instead of objects communicating directly, they interact through a mediator, reducing the dependencies between them. This allows for decoupled communication and improved control over interactions. 

* It centralizes communication between objects, reducing the number of direct connections and dependencies between them.

* The mediator controls the flow of communication, enabling more flexible and maintainable interaction logic.

* It simplifies communication between multiple objects, especially when their interactions are complex or change frequently.

#### When to use the Mediator Pattern?
* When you have multiple objects that need to communicate with each other, but you want to reduce dependencies and direct connections between them.

* When the communication logic between objects becomes too complex and needs to be centralized in one place.

* In scenarios where objects are tightly coupled through many-to-many relationships, and you need to promote loose coupling for easier maintenance and scalability.

#### Pros

* `Single Responsibility Principle.` You can extract the communications between various components into a single place, making it easier to comprehend and maintain.

* `Open/Closed Principle.` You can introduce new mediators without having to change the actual components.

 * You can reduce coupling between various components of a program.

 * You can reuse individual components more easily.

#### Cons

* Over time a mediator can evolve into a God Object( a god object is an object that references a large number of distinct types, has too many unrelated or uncategorized methods, or some combination of both. The god object is an example of an anti-pattern and a code smell).
