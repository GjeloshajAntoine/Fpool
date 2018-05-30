# Fpool
### an object fuss manager ,put all your object in the pool and let them have their smalltalk

The main idea behind Fpool is directly map method to event name , when you add an object to Fpool , its method name will match event name.
When you send an event , Fpool will look at all the object having the same method name and call it.
The plan is also to add web workers support in the futur.
