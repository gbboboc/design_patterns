## What is the Flyweight Pattern?

**The Flyweight Pattern helps reduce memory usage by sharing common data between many similar objects. Instead of storing duplicate data in each object, it separates the object’s state into shared (intrinsic) and unique (extrinsic) parts. The shared data is reused, minimizing memory consumption.** 

* This pattern is especially useful when you have a large number of objects that share similar data.

### You should use the Flyweight Pattern when:

* You're creating many similar objects, and memory usage becomes an issue.
* The objects share a lot of common data that can be reused.
* You need to improve performance, such as in graphical applications (rendering many shapes) or managing large sets of similar data.


**The example is a `ShapeFactory` that:**

* manages the creation of different `Shape` objects, such as `Circle`, using a flyweight mechanism.

* stores and reuses existing objects (flyweights) to minimize memory usage when many similar objects need to be created.

