This example illustrates the structure of the `Facade` design pattern and focuses on the following questions:

* What classes does it consist of?

* What roles do these classes play?

* In what way the elements of the pattern are related?

### What is the Facade Pattern?

The **Facade Pattern** is a structural design pattern that provides a simplified interface to a larger and more complex subsystem. It acts as a "front door" to the subsystem, making it easier for clients to interact with the system without being exposed to its intricate details.

* It simplifies the interaction between the client and a complex subsystem by providing a unified, high-level interface.

* It promotes loose coupling between the client and the subsystem by reducing the number of direct dependencies.

* The Facade can wrap multiple subsystems and coordinate their interactions, presenting a cleaner and more manageable API.

#### When to use the Facade Pattern?

* When you want to provide a simplified interface to a complex subsystem to make it easier to use.

* When you want to decouple clients from subsystem implementation details to improve maintainability and flexibility.

* In scenarios where a system has multiple interdependent classes or modules, and you want to provide a single point of access for clients.

#### Identification: 

* Facade can be recognized in a class that has a simple interface, but delegates most of the work to other classes. Usually, facades manage the full life cycle of objects they use.

#### Pros

* You can isolate your code from the complexity of a subsystem.

#### Cons

* A facade can become a god object coupled to all classes of an app.