This example illustrates the structure of the `Adapter` design pattern and focuses on the following questions:

* What classes does it consist of?

* What roles do these classes play?

* In what way the elements of the pattern are related?

### What is the Adapter?

The **Adapter Pattern** is a structural design pattern that acts as a bridge between two incompatible interfaces. It allows objects with incompatible interfaces to work together by converting the interface of one class into another that a client expects.

* It enables classes with incompatible interfaces to collaborate by wrapping one class's interface into another format.

* It promotes flexibility and reusability by separating the client's interface from the implementation of the service being adapted.

* The Adapter provides a level of abstraction, making it easier to replace or change the underlying implementation without affecting the client code.

#### When to use the Adapter Pattern?

* When you need to integrate a legacy component or third-party library that has an interface different from what your application expects.

* When you want to create reusable code by decoupling client code from specific implementations.

* In scenarios where converting data or requests from one format to another is necessary to ensure compatibility between systems.

#### Identification: 

* Adapter is recognizable by a constructor which takes an instance of a different abstract/interface type. When the adapter receives a call to any of its methods, it translates parameters to the appropriate format and then directs the call to one or several methods of the wrapped object.


#### Pros

* `Single Responsibility Principle.` You can separate the interface or data conversion code from the primary business logic of the program.

* `Open/Closed Principle.` You can introduce new types of adapters into the program without breaking the existing client code, as long as they work with the adapters through the client interface.

#### Cons

* The overall complexity of the code increases because you need to introduce a set of new interfaces and classes. Sometimes it’s simpler just to change the service class so that it matches the rest of your code.