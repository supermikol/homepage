---
layout: post
title: Class is in session!
categories:
- blog
---

A class is an object, and an object is always part of a class. Confused yet?

Then let’s start over.

We should all know what an object is now. A string is an object, an array is an object, and so is a hash. Objects are entities that hold one or more values.

A class is also an object. It can also store information that can be called, except it stands out from your typical objects in two ways:

1. It’s a creator of objects. Think about when you create a new array using the explicit call:

   `my_array = Array.new`

   Array is an object, but through it, I have created a child of Array, or in programming terminology, it’s an ‘instance’ of Array.

2. It contains methods that are only accessible by each instance of Array—predefined methods that can manipulate the instance objects anyway I want to (within the scope of programming of course). For example, when I call the following:

   `my_array.flatten`

   I am calling the method `#flatten` on an instance of the class Array. Flatten can’t be called on a hash, nor a string, only on objects that I have created under the Array class, because the `#flatten` method was specifically defined within the Array class, and this is what makes classes so powerful.

Now, without further ado, let’s walk through a class!

{% highlight ruby %}
class CoolClass
 def initialize(student_count)
   @student_count = student_count
 end
end
{% endhighlight %}

So this is the most basic step of creating a class. I’ve created a class of objects called CoolClass, which takes in one argument that will define the size of the class. If I were to create an instance of this class, this is how I’d do it:

`my_class = CoolClass.new(30)`

The ’30’ is the argument I’ve set for the class to take in upon initializing, so that `my_class` is an object of the class `CoolClass` with a `student_count` of 30.

Notice the `@` symbol in front of `@student_count`. This signals that the variable is an instance variable, and what that means is that every object of class `CoolClass` I create from here on will have it’s own `@student_count` value. For instance, if I create another object using:

`my_second_class = CoolClass.new(15)`

This second class will have a `@student_count` variable set equal to 15, distinct from the `@student_count` of `my_class`. This `@student_count` will also follow this instance wherever it goes, and can be accessed by instance methods, which I’ll demonstrate. Let’s say I add this to my `CoolClass`:

{% highlight ruby %}
class CoolClass
 def initialize(student_count)
   @student_count = student_count
 end

 def add_student
   @student_count += 5
 end
end
{% endhighlight %}

Here I’ve created a new instance method, which means it can only be called on instances of `CoolClass`. Additionally, what this method will do is increate `@student_count` of that specific instance by 5.

{% highlight ruby %}
my_class.add_student #@student_count will increase to 35
my_second_class.add_student #@student_count will increase to 20
{% endhighlight %}

Follow the magic? Pretty cool isn’t it? This is only the beginning, as there are plenty more ways to play with and manipulate existing classes or new classes, to have objects you create do almost anything you want. Hopefully this blog post will have provided you with a good foundation to get started and experiment on your own. Happy coding (and Thanksgiving)!