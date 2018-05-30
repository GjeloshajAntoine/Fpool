# Fpool
##### An object fuss manager , put all your object in the pool and let them have their smalltalk

The main idea behind Fpool is directly map method to event name , when you add an object to Fpool , its method name will match event name.
When you send an event , Fpool will look at all the object having the same method name and call it.
The plan is also to add web workers support in the futur.
I don't know if such a framework as this one would be any usefull as you can't target a specific object.This is just a first shot.

## About inheritance
Fpool doesnt watch for higher level of method definition currently.
Neither does it use proxies to watch prototypes change for now.
An alternative pattern would be to send message like "addMethod" and passing un method/message name and a function as data.This way you can trac dynamic change between your objects.
