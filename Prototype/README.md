## What is the Prototype Pattern?

**The Prototype Pattern is a way to create new objects by copying an existing one, instead of making them from scratch. This allows you to clone an object and create multiple similar instances easily.** 

* In JavaScript, you can use the `clone` method or `Object.create` to implement this pattern. It is useful when creating new objects from scratch would take too much time or resources.

* JavaScript objects naturally have prototypes. Every object has an internal reference, called `[[Prototype]]`, that links it to another object.

### You should use the Prototype Pattern when:

* Creating an object from scratch is expensive, and you want to reuse a base object.
* You prefer cloning existing objects rather than using constructors to create new instances.
* You need to create multiple copies of complex objects that have already been set up once.

**The example is a `Car` class that:**

* has a `clone` method that allows creating new objects based on an existing instance.

* uses the `Object.create` method to clone an object, maintaining the original object's properties and methods.
