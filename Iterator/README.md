This example illustrates the structure of the `Iterator` design pattern and focuses on the following questions:

* What classes does it consist of?

* What roles do these classes play?

* In what way the elements of the pattern are related?

### What is the Iterator Pattern?

The **Iterator Pattern** is a behavioral design pattern that provides a way to sequentially access elements of a collection without exposing its underlying structure. It decouples the iteration logic from the collection, allowing for consistent traversal regardless of the collection's implementation.

* It abstracts the process of iterating over a collection, enabling consistent traversal across different types of collections.

* It encapsulates the iteration logic, making the collection easier to use and maintain.

* It promotes the single responsibility principle by delegating the iteration logic to a separate object.

#### When to use the Iterator Pattern?
* When you need to traverse a collection without exposing its internal representation.

* When you want to support multiple traversal methods (e.g., forward, backward, or custom order).

* In scenarios where different types of collections should provide a uniform way to access their elements.

#### Identification: 
* Iterator is easy to recognize by the navigation methods (such as next, previous and others). Client code that uses iterators might not have direct access to the collection being traversed.

#### Pros

* `Single Responsibility Principle.` You can clean up the client code and the collections by extracting bulky traversal algorithms into separate classes.

* `Open/Closed Principle.` You can implement new types of collections and iterators and pass them to existing code without breaking anything.

* You can iterate over the same collection in parallel because each iterator object contains its own iteration state.

* For the same reason, you can delay an iteration and continue it when needed.

#### Cons

* Applying the pattern can be an overkill if your app only works with simple collections.

* Using an iterator may be less efficient than going through elements of some specialized collections directly.