This example illustrates the structure of the `Observer` design pattern and focuses on the following questions:

* What classes does it consist of?
* What roles do these classes play?
* In what way the elements of the pattern are related?

### What is the Observer Pattern?

The Observer Pattern defines a one-to-many relationship between objects, where one object (the subject) maintains a list of dependents (observers) and notifies them of state changes. This allows for a decoupling between the object that generates the data (the publisher/subject) and the objects that use the data (subscribers/observers). 

* It establishes a subscription model where observers can subscribe to or unsubscribe from updates.

* It allows multiple observers to react to changes in a subject without tightly coupling them to that subject’s implementation.

* The pattern is commonly used in event-driven systems, UI components, and frameworks where state changes need to be broadcast to multiple objects.

#### When to use the Observer Pattern?

* When you have an object that should notify other objects about changes to its state, without those objects being tightly coupled.

* When you need to dynamically manage a list of dependent objects that should be updated automatically whenever the subject’s state changes.

* In scenarios such as event systems, where many components need to react to the same event or change in data.

#### Identification:

* The pattern can be recognized by subscription methods, that store objects in a list and by calls to the update method issued to objects in that list.


#### Pros

* `Open/Closed Principle.` You can introduce new subscriber classes without having to change the publisher’s code (and vice versa if there’s a publisher interface).

* You can establish relations between objects at runtime.

#### Cons

 * Subscribers are notified in random order.