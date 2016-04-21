---
layout: post
title: Enumerable#group_by method
categories:
- blog
---

Originally I was going to introduce `Enumerable#cycle` because it’s one method I haven’t used yet, but then I looked it up and it looked like something I could literally explain in one paragraph, even to a group of ‘newb programmers’. So, instead, I’m going to walk you (my esteemed reader) through the `Enumerable#group_by` method instead.

Let’s start by briefly reviewing Enumerables. Enumerable is an adjective which by definition means:

> Able to be counted by one-to-one correspondence with the set of all positive integers.

In the world of Ruby, this includes, but isn’t limited to, arrays and hashes, along with all other classes of container objects that include the Enumerable module. What these classes of objects all have in common is that each individual instance has the ability to contain multiple elements that can be compared, sorted, and iterated through.

Let’s illustrate this with an example:

{% highlight ruby %}
object_1 = “this is object 1"
object_2 = [“this”, “is”, “object”, “2”]
{% endhighlight %}
Can you guess which one is an Enumerable?

Although `object_1` is comprised of multiple words to us, to the computer, there is no distinction between a space and a letter, and so it’s perceived as a single object. On the other hand, `object_2` is an array of clearly distinguished elements, each containing one word in it. It’s rather like a cabinet with multiple drawers in it, with each drawer containing a specific file(in this case one word). Now that the computer recognizes these distinct, separate pieces, it can run different methods on it, such as sort and compare (although it might not make much sense to compare “this” with “is” and “2”, but the point being that it’s possible if you want it to).

Hopefully by now, you have at least an understanding of what an enumerable is, so let’s talk about the `Enumerable#group_by method`.

The `#group_by` method is always called on an Enumerable, such as the array we have defined above, like this:

{% highlight ruby %}
object_2.group_by
{% endhighlight %}

Ruby will recognize this as “Ah, I need to run the `#group_by method `specifically on `object_2`, an array” But we’re not done. We need to also include a block with a set of instructions, like this:

{% highlight ruby %}
 object_2.group_by {|x| x.length}
 ==> {1=>[“2”], 2=>[“is”], 4=>[“this”], 6=>[“object”]}
{% endhighlight %}

Do you see what just happened? The block instructed `#group_by` to run #length on each of it’s elements, and then group the elements into new, separate arrays that responded with the same value. Let’s look at another example borrowed from ruby-doc.

{% highlight ruby %}
object_3 = [1, 2, 3, 4, 5, 6]
object_3.group_by { |x| x%3 }   #=> {0=>[3, 6], 1=>[1, 4], 2=>[2, 5]}
{% endhighlight %}

This time, we have an array of numbers from 1-6, and the block asks `#group_by` to run the modulus operator with a three. In human language, `x % 3` means to return the remainder after dividing by 3, so that `5 % 4 = 1`, `21 % 3 = 0`, `5 % 3 = 2`.

In this case, what is the remainder when we divide 3 or 6 by 3? The answer is 0. Lo and behold, within the new hash that is returned, we see `0=>[3,6]`. What about 1 or 4? If we tried dividing by 3, we’d get a remainder of 1, and so the hash also returns `1=>[1,4]`. Lastly, the remaining numbers 2 and 5 have a remainder of 2, and so we have `2=>[2,5]`.

Essentially `#group_by` will take a ‘rule’ based on the instruction given in the block, and then group all the elements by the result that they return after running every element through the block.

This concludes my blog post for this week. Hope you enjoyed reading!