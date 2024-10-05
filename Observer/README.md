## What is the Observer Pattern?

**The Observer Pattern creates a relationship where one object (the subject) notifies multiple other objects (observers) when its state changes. This allows different parts of a system to react to changes without being directly connected to the object making the change.** 

* The pattern works like a subscription model: observers can subscribe to or unsubscribe from updates. When the subject’s state changes, it automatically notifies all its observers.

### You should use the Observer Pattern when:

* One object needs to notify others about changes without being tightly connected to them.
* You need a dynamic list of objects that should automatically update when the subject’s state changes.
* It’s useful in event-driven systems, user interfaces, or applications where many components need to react to the same change.

**The example is a `NewsPublisher` class that:**

* manages a list of subscribers (observers) who are interested in receiving updates.

* notifies all subscribers when there is breaking news.
