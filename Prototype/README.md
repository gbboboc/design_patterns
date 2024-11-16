<<<<<<< HEAD
This example illustrates the structure of the `Prototype` design pattern and focuses on the following questions:

* What classes does it consist of?
* What roles do these classes play?
* In what way the elements of the pattern are related?

### What is the Prototype Pattern?

The Prototype pattern is a creational design pattern that allows an object to be cloned, creating new instances based on an existing object. Instead of instantiating objects from scratch, it enables copying or cloning an existing object, which serves as a prototype. 

* It allows for creating new objects by copying an existing instance, rather than creating a new instance through the constructor.

* The `clone` method or `Object.create` is commonly used in JavaScript to implement this pattern.

This pattern can be used to avoid the overhead of creating objects from scratch or when an object creation is expensive in terms of time or resources.

Prototypes in JavaScript are an intrinsic feature of the language, with each object having an internal `[[Prototype]]` reference to another object.

#### When to use the Prototype Pattern?

* When object creation is costly in terms of time or resources, and you need to create multiple instances that share some configuration or state.

* When you want to avoid creating instances using constructors and prefer cloning an existing object.

* In scenarios where you need to clone complex objects that are initialized once but need to be used multiple times.

#### Identification: 

* The prototype can be easily recognized by a clone or copy methods. 


#### Pros
* You can clone objects without coupling to their concrete classes.

* You can get rid of repeated initialization code in favor of cloning pre-built prototypes.

* You can produce complex objects more conveniently.

* You get an alternative to inheritance when dealing with configuration presets for complex objects.

#### Cons

* Cloning complex objects that have circular references might be very tricky.
=======
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
>>>>>>> d5609d4b30868e7a48d548b3213b0cec9c83e59b
