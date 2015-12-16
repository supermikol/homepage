---
layout: post
title: Arrays vs. Hashes
categories:
- blog
---

What is an array? In simple terms, it’s a storage space for information. Picture a cabinet with multiple drawers, each one capable of storing a single piece of information. It’s also infinitely large, so you can store as many items in it as you want. Enough talking, let’s demonstrate.

What is an array? In simple terms, it’s a storage space for information. Picture a cabinet with multiple drawers, each one capable of storing a single piece of information. It’s also infinitely large, so you can store as many items in it as you want. Enough talking, let’s demonstrate.

Assume I want to create a simple array of personal information about myself, I can create an array that looks like the following:
{% highlight ruby %}
mikearray = [“Michael Du”, “China”, “Teacher”]
{% endhighlight %}

This array contains 3 items, specifically, `[full name]`, `[country]`, and `[occupation]`. In some cases, I may want to break up [full name] into two separate objects of [first name] and [last name], but for simplicity sake, let’s keep it as [full name]. The order I enter it as is fixed, so that whenever I call the second item of this array through `mikearray[1]` it will always return `“China”` unless I manipulate the array. (Note that the 1 here is actually referring to the second item in the array, because the first item in the array always starts with 0) Very handy, because let’s say I have an individual arrays for everyone in my office, then, whenever I need to look up David’s occupation, I can simply look up the third item using `return david[2]`

In a simple database system where the main set of information is this specific array format, the array is a perfect structure for storing information.

However, what if I have an array with an incredibly long list of items? For example:
{% highlight ruby %}
johnarray = [first_name, last_name, city_of_birth, date_of_birth, mother_name, father_name, number_of_siblings, favorite_cuisine, first_job, second_job, best_friends_name, college_attended, etc..]
{% endhighlight %}
In other words, your facebook profile.

Let’s say I want to look up someone’s last place of employment, I would have to look up the fact that it’s actually array item number 10, before I can refer to `david[9]`. Or perhaps I want to find out your favorite restaurant; with some digging, it turns out it’s the item `david[2380]`. You can see how things can get out of hand easily.

On the other hand, wouldn’t it be awesome if I could just look up `david[“favorite_restaurant”]` and it returns "In N Out"? Isn’t that much more intuitive than looking up an arbitrary number referring to the order of the information within the array? That’s where hashes come in.

Hashes are a more malleable form of array, where you define not only the value in the hash, but also a key. For instance, if I were to recreate the array example above using a hash instead, it would look like this:
{% highlight ruby %}
mikehash = {“fullname” => “Michael Du”,  “country” => ”China”, “occupation” => “teacher”}
{% endhighlight %}
The first value is always the ‘key’ and the latter value is the ‘value’. Now if I need to look up mike’s occupation, I can directly input `mikehash[“occupation”]` and it will return `"teacher"`.

One thing to note is that you can have multiple ‘values’ that are equal, but keys must always be distinct. For instance, I cannot have two ‘fullname’ keys pointing to different values, because then the lookup doesn’t work. (Which value is it going to pull up when you ask for it?)  However, I can have two values that are the same (for example, `favorite_country` and `current_country` can have the same value).

Under this format, as long as I define my keys clearly, it’s short work to look up any value within a hash as long as I’ve got the key ready.

Hope you've learned a thing or two from this week's blog!