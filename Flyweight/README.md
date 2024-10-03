The example is a `ShapeFactory` that:

* manages the creation of different `Shape` objects, such as `Circle`, using a flyweight mechanism.

* stores and reuses existing objects (flyweights) to minimize memory usage when many similar objects need to be created.

### What is the Flyweight Pattern?

The Flyweight Pattern is a structural design pattern that focuses on reducing memory consumption by sharing as much data as possible with similar objects. It is especially useful when many small objects are created that share common parts of their state. This pattern divides the object state into intrinsic (shared, immutable) and extrinsic (unique) parts, and reuses the shared intrinsic parts to minimize resource usage.


* It reduces memory consumption by sharing common data between multiple similar objects.

* It differentiates between intrinsic (shared) and extrinsic (unique) states, storing intrinsic data in a shared location.

* The pattern is useful for scenarios where you need to manage a large number of similar objects efficiently.

#### **When to use the Flyweight Pattern?**

* When many similar objects are being created and memory usage becomes a concern.

* When objects share a lot of common data that can be extracted and reused across multiple instances.

* In scenarios where performance optimizations are required, such as graphical applications (e.g., rendering multiple shapes), text rendering, or managing large datasets with similar properties.