## What is the Command Pattern?

**The Command Pattern turns a request or action into a separate object that contains all the details needed to execute that request. This allows you to pass, store, or execute the request at a later time. It also decouples the object sending the request from the one processing it, making the system more flexible.** 

* With this pattern, you can queue, log, or undo/redo operations easily by keeping track of the command objects.

### You should use the Command Pattern when:

* You want to assign operations to objects, such as UI elements (buttons, menus) that trigger actions.
* You need to queue, schedule, or log requests for later execution.
* You want to implement undo/redo functionality by storing commands and their states.

**The example is a `RemoteControl` class that:**

* holds a list of commands and can execute them.

* allows the addition of new commands, such as turning on/off a `Light` or a `Fan`, without changing the existing code.

