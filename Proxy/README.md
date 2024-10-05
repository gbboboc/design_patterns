## What is the Proxy Pattern?

**The Proxy Pattern provides an intermediary (proxy) object that controls access to another object. This allows you to add extra behavior, like validation, logging, or lazy initialization, without modifying the original object.** 

* The proxy intercepts operations, like getting or setting properties, and can manage or modify how those operations are handled. In JavaScript, the `get` and `set` methods are often overridden for this purpose, and the `Reflect` object is used to delegate actions back to the original object.

### You should use the Proxy Pattern when:

* When you need to control or validate access to an object’s properties.

* When you want to transparently introduce additional behavior, such as logging or input validation, without modifying the original object.

* In scenarios where resource-heavy objects need to be initialized only when necessary (lazy initialization).

**The example is a `User` object that:**

* has a `name` and age property.
* is accessed through a `UserProxy`, which adds validation to the `set` method (e.g., ensuring that the `age` is a valid number and name is a string).
