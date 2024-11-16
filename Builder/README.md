This example illustrates the structure of the `Builder` design pattern and focuses on the following questions:

* What classes does it consist of?

* What roles do these classes play?

* In what way the elements of the pattern are related?

#### What is Builder?

The *Builder* design pattern is a creational design pattern that provides a way to construct complex objects step-by-step. It separates the construction process of an object from its representation, allowing the same construction process to create different representations.

* It allows you to construct an object incrementally by calling methods in a specific sequence.

* It separates the construction logic from the representation, making the code easier to read and maintain.

* It is particularly useful when creating objects with many optional parameters or complex configurations.

 #### When to use Builder?
 
* When creating complex objects with numerous parameters, especially when some parameters are optional.

* When you want to ensure that the construction process is consistent and controlled.

* When the construction of an object requires multiple steps that need to be executed in a specific order.

#### Identification: 
 * The Builder pattern can be recognized in a class, which has a single creation method and several methods to configure the resulting object. Builder methods often support chaining (for example, `someBuilder.setValueA(1).setValueB(2).create()`).

#### Pros

* You can construct objects step-by-step, defer construction steps or run steps recursively.

* You can reuse the same construction code when building various representations of products.

* `Single Responsibility Principle.` You can isolate complex construction code from the business logic of the product.

#### Cons

* The overall complexity of the code increases since the pattern requires creating multiple new classes.