<<<<<<< HEAD
This example illustrates the structure of the `Proxy` design pattern and focuses on the following questions:

* What classes does it consist of?

* What roles do these classes play?

* In what way the elements of the pattern are related?
=======
## What is the Proxy Pattern?

**The Proxy Pattern provides an intermediary (proxy) object that controls access to another object. This allows you to add extra behavior, like validation, logging, or lazy initialization, without modifying the original object.** 
>>>>>>> d5609d4b30868e7a48d548b3213b0cec9c83e59b

* The proxy intercepts operations, like getting or setting properties, and can manage or modify how those operations are handled. In JavaScript, the `get` and `set` methods are often overridden for this purpose, and the `Reflect` object is used to delegate actions back to the original object.

### You should use the Proxy Pattern when:

* When you need to control or validate access to an object’s properties.

* When you want to transparently introduce additional behavior, such as logging or input validation, without modifying the original object.

* In scenarios where resource-heavy objects need to be initialized only when necessary (lazy initialization).

<<<<<<< HEAD
#### Identification: 

* Proxies delegate all of the real work to some other object. Each proxy method should, in the end, refer to a service object unless the proxy is a subclass of a service.

#### Pros

* You can control the service object without clients knowing about it.

* You can manage the lifecycle of the service object when clients don’t care about it.

* The proxy works even if the service object isn’t ready or is not available.

* `Open/Closed Principle.` You can introduce new proxies without changing the service or clients.

#### Cons

* The code may become more complicated since you need to introduce a lot of new classes.

* The response from the service might get delayed.
=======
**The example is a `User` object that:**

* has a `name` and age property.
* is accessed through a `UserProxy`, which adds validation to the `set` method (e.g., ensuring that the `age` is a valid number and name is a string).
>>>>>>> d5609d4b30868e7a48d548b3213b0cec9c83e59b
