## What is Static Import?

**Static Import in JavaScript allows you to import specific functions, classes, or constants from other modules using the import statement. This method helps keep the code organized and modular. Static imports are evaluated at compile time, making them predictable and suitable for optimization.** 

* They make module dependencies explicit by importing only what is needed, helping in keeping the codebase clean.

* Static imports are resolved at the top of the module, ensuring that all dependencies are available when the script is executed.

* It allows for partial imports, meaning you can import only specific functions or objects from a module, helping with performance and reducing unnecessary code in the bundle.

 ### When to use Static Import?
 
* When you want to use functionality from other modules in a clean, maintainable, and optimized way.

* When you need a modular structure where each module exposes only what is needed, and consumers of the module only import the parts they need.

* In scenarios where you want to ensure that all dependencies are loaded upfront and can be statically analyzed for performance optimization.

**The example is a `greetings` module that:**

* exports `sayMorning`, `sayAfternoon`, and `sayEvening` functions to provide different greetings.

* is statically imported into another module using the import statement.
