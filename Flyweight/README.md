This example illustrates the structure of the `Flyweight` design pattern and focuses on the following questions:


* What classes does it consist of?
* What roles do these classes play?
* In what way the elements of the pattern are related?

### What is the Flyweight Pattern?

**Flyweight** is a structural design pattern that lets you fit more objects into the available amount of RAM by sharing common parts of state between multiple objects instead of keeping all of the data in each object.

* It reduces memory consumption by sharing common data between multiple similar objects.

* It differentiates between intrinsic (shared) and extrinsic (unique) states, storing intrinsic data in a shared location.

* The pattern is useful for scenarios where you need to manage a large number of similar objects efficiently.

#### When to use the Flyweight Pattern?

* When many similar objects are being created and memory usage becomes a concern.

* When objects share a lot of common data that can be extracted and reused across multiple instances.

* In scenarios where performance optimizations are required, such as graphical applications (e.g., rendering multiple shapes), text rendering, or managing large datasets with similar properties.

#### Identification: 
* Flyweight can be recognized by a creation method that returns cached objects instead of creating new.

#### Pros 

* You can save lots of RAM, assuming your program has tons of similar objects.


#### Cons 

* You might be trading RAM over CPU cycles when some of the context data needs to be recalculated each time somebody calls a flyweight method.

* The code becomes much more complicated. New team members will always be wondering why the state of an entity was separated in such a way.

