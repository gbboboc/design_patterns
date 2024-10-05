## What is the Mediator/Middleware Pattern?

**The Mediator Pattern is used to control how different objects interact with each other by introducing a mediator that manages their communication. Instead of objects talking directly to each other, they send messages through the mediator, reducing dependencies between them.** 

* This centralizes communication, making the system easier to manage, especially when the interactions are complex or change often.

### You should use the Mediator Pattern when:

* Multiple objects need to communicate, but you want to reduce direct connections between them.
* The communication logic becomes complex and you want to simplify it by centralizing it in one place.
* You want to decouple many-to-many relationships between objects to improve maintainability and scalability.

**The example is a `ChatRoomMediator` that:**

* facilitates communication between different User objects in a chat room.

* decouples the communication logic between users, allowing them to send messages through the mediator instead of directly interacting with each other.
