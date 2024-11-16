## What is the Command Pattern?

**The Command Pattern turns a request or action into a separate object that contains all the details needed to execute that request. This allows you to pass, store, or execute the request at a later time. It also decouples the object sending the request from the one processing it, making the system more flexible.** 

* With this pattern, you can queue, log, or undo/redo operations easily by keeping track of the command objects.

### You should use the Command Pattern when:

* You want to assign operations to objects, such as UI elements (buttons, menus) that trigger actions.
* You need to queue, schedule, or log requests for later execution.
* You want to implement undo/redo functionality by storing commands and their states.

**The example is a `RemoteControl` class that:**

* What classes does it consist of?
* What roles do these classes play?
* In what way the elements of the pattern are related?

<<<<<<< HEAD
### What is the Command Pattern?

The Command Pattern is a behavioral design pattern that turns a request into a stand-alone object containing all the information about the request. This object can be passed, stored, and executed at a later time. It decouples the sender of the request from the object that processes the request, promoting flexibility in executing operations. 

* It encapsulates a request or operation as an object, allowing for parameterization of clients with different requests, queuing, and logging requests.

* It decouples the sender from the receiver of the request.

* The pattern allows for implementing undo/redo functionality by storing executed commands and their associated state.

#### When to use the Command Pattern?

* When you need to parameterize objects with operations, such as in the case of UI elements (buttons, menus) that trigger actions.

* When you need to queue, schedule, or log requests.

* In scenarios where commands may need to be undone or redone.

#### Identification: 
* The Command pattern is recognizable by behavioral methods in an abstract/interface type (sender) which invokes a method in an implementation of a different abstract/interface type (receiver) which has been encapsulated by the command implementation during its creation. Command classes are usually limited to specific actions.


#### Pros

* `Single Responsibility Principle.` You can decouple classes that invoke operations from classes that perform these operations.

* `Open/Closed Principle.` You can introduce new commands into the app without breaking existing client code.

 * You can implement undo/redo.

 * You can implement deferred execution of operations.

 * You can assemble a set of simple commands into a complex one.

#### Cons

* The code may become more complicated since you’re introducing a whole new layer between senders and receivers.
=======
>>>>>>> d5609d4b30868e7a48d548b3213b0cec9c83e59b
