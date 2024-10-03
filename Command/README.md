The example is a `RemoteControl` class that:

* holds a list of commands and can execute them.

* allows the addition of new commands, such as turning on/off a `Light` or a `Fan`, without changing the existing code.

### What is the Command Pattern?

The Command Pattern is a behavioral design pattern that turns a request into a stand-alone object containing all the information about the request. This object can be passed, stored, and executed at a later time. It decouples the sender of the request from the object that processes the request, promoting flexibility in executing operations. 

* It encapsulates a request or operation as an object, allowing for parameterization of clients with different requests, queuing, and logging requests.

* It decouples the sender from the receiver of the request.

* The pattern allows for implementing undo/redo functionality by storing executed commands and their associated state.

#### When to use the Command Pattern?

* When you need to parameterize objects with operations, such as in the case of UI elements (buttons, menus) that trigger actions.

* When you need to queue, schedule, or log requests.

* In scenarios where commands may need to be undone or redone.

