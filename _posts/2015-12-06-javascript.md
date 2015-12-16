---
layout: post
title: JavaScript Constructors vs. Ruby Classes
categories:
- blog
---

My blog post this week is about Javascript’s constructor function vs Ruby’s classes, and I want to begin by reviewing Ruby classes first. Classes are in charge of accomplishing two things:

1. Creating new objects that have predefined values (as defined by the coder), and
2. Predefining methods that work specifically with instances belonging to this class

You may be thinking, “Well, methods are technically a type of ‘predefined’ values, so there’s really no point of breaking it up into a separate step”, and you’re right! However, Javascript isn’t as friendly as our beloved Ruby, and does draw a distinction between the two stages, including how they’re created.

I’m going to start off with a Ruby class, ToDo, which takes in a string with today’s date, and an array with a list of today’s tasks. Furthermore, there is a method to list all the items in the array.

{% highlight ruby %}
 class ToDo
   def initialize(date,tasks)
     @date = date
     raise ArgumentError, "Second item should be array" unless tasks.is_a?(Array)
     @tasks = tasks
   end
   def show
     @tasks.each_with_index{|x,i| puts "#{i + 1}. #{x}"}
   end
 end

 fresh_todo = ToDo.new("12/6",["Eat","Sleep","Shower"])
 fresh_todo.show

 # Output:
 # 1. Eat
 # 2. Sleep
 # 3. Shower
{% endhighlight %}

Simple, right?

Now let’s see how I **_might_** accomplish the same thing in Javascript:

{% highlight javascript %}
 var ToDo = function (date, list) {
   this.date = date;
   this.list = list;
   this.show = function() {
     for (i=1; i <= this.list.length; i++){
       console.log(i + ". " + this.list[i-1]);
     }
   }
 }

 fresh_todo = new ToDo("12/6", ["Eat","Sleep","Shower"]);
 fresh_todo.show();
 // Output:
 // 1. Eat
 // 2. Sleep
 // 3. Shower
{% endhighlight %}

This works! But it’s not the most efficient, because defining the function within he constructor means the function is recreated with each instance that is created. This takes up a lot of memory usages if we are planning to create many instances of a ‘class’.

A more memory efficient way is to use the prototype like this:

{% highlight javascript %}
 var ToDo = function (date, list) {
   this.date = date;
   this.list = list;
 }

 ToDo.prototype.show = function() {
   for (i=1; i <= this.list.length; i++){
     console.log(i + ". " + this.list[i-1]);
   }
 }

 fresh_todo = new ToDo("12/6", ["Eat","Sleep","Shower"]);
 fresh_todo.show();

 // Output:
 // 1. Eat
 // 2. Sleep
 // 3. Shower
{% endhighlight %}

Lack of enumerator aside, notice how the `show()` function is defined outside of the constructor function. Instances in Javascript refer to their `prototype` for instructions on a method, which is the constructor function, and we have to explicitly define the method within the prototype in order for it to work. This means the method only needs to be defined once, instead of being replicated repeatedly for every new instance.

You can think of it this way, defining a function within a prototype is like giving a function to a superclass, and all the new instances have to do is look into the superclass to find it.

Prototypes are something we didn’t touch on this week, but while researching for some of the challenges this week, I’ve come across it quite  a few times, so I think it’s worth exploring further.