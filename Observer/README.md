<<<<<<< HEAD
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
=======
## What is the Observer Pattern?

**The Observer Pattern creates a relationship where one object (the subject) notifies multiple other objects (observers) when its state changes. This allows different parts of a system to react to changes without being directly connected to the object making the change.** 

* The pattern works like a subscription model: observers can subscribe to or unsubscribe from updates. When the subject’s state changes, it automatically notifies all its observers.

### You should use the Observer Pattern when:

* One object needs to notify others about changes without being tightly connected to them.
* You need a dynamic list of objects that should automatically update when the subject’s state changes.
* It’s useful in event-driven systems, user interfaces, or applications where many components need to react to the same change.

**The example is a `NewsPublisher` class that:**

* manages a list of subscribers (observers) who are interested in receiving updates.

* notifies all subscribers when there is breaking news.
>>>>>>> d5609d4b30868e7a48d548b3213b0cec9c83e59b
