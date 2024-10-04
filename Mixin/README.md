## What is the Mixin Pattern?

**The Mixin Pattern allows you to add reusable functionality to classes without relying on inheritance. Instead of inheriting from a single parent class, a class can "mix in" methods or properties from other sources, enabling flexible code sharing across multiple classes.** 

* This pattern promotes composition over inheritance, allowing classes to share functionality without creating deep inheritance hierarchies.

### You should use the Mixin Pattern when:

* You want to share functionality between classes without using complex inheritance.
* You prefer composition over inheritance to avoid the downsides of deep inheritance chains.
* You need to share behavior between objects or classes that don’t have a parent-child relationship.

**The example is a `Person` class that:**

* represents a basic person with a name and age.
* uses a mixin to add the functionality of a `CanDrive` ability, allowing objects to gain this ability without inheriting directly.
