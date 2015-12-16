---
layout: post
title: CSS Introduction
categories:
- blog
---

I realized we only had to answer one after I was halfway through the third..so here goes my three responses:

**What is the difference between margin, border, and padding?**

Margin is the spacing between elements on a page, for example, two div blocks(just visualize two text boxes). Border is the line that marks the edge of these elements, and where the margin begins. Padding, meanwhile, is the spacing within an element, between the border and the text/content within the element (for example, the text or image within a div block). So imagine a text box, and the text inside it. The padding will be the space between the text and the border of the box.

**What are the best practices associated with using classes vs. ids?**

Classes should be used most of the time, particularly if they are going to be called repeatedly throughout a website. An ID on the other hand, should be a tag that is only referenced once, because it's supposed to be tied specifically to one element (hence ID). According to one video I recall watching, classes should be used 99% of the time, because most of these identifiers are going to be called repeatedly.

**What are the differences between relative, absolute, fixed, and static positioning?**

This one took some work to figure out.
I'll start with static, which is the default positioning if none is indicated. This one just means the object will be laid down where it would normally be positioned, which is in the top left hand corner (unless another object is present)
Relative takes static one step further, which is that it allows us to now move the object around relative to it's static position. This means we can use the stylers 'top', 'bottom', 'left', 'right' to move it a specific direction relative to it's original static position. However, keep in mind that other objects will treat the relative object as if it were in it's default positioning, so the space where it would've been will be left empty, while it's current position may run into other objects. Let's look at the photo below illustrating what I am talking about:
![CSS Table 1](/imgs/css-concepts/1.png "table-1")
   _Note that "Relative1" contains the attribute top:100px,which explains why it's shifted down. More importantly, note that "Relative2" doesn't move in to fill the spot._

Meanwhile, absolute positioning is where an object is placed exactly where you want it to go on the screen in relation to the HTML border (unless there's an ancestor with relative positioning, in which case you can place it anywhere you want within the relative container).
At the same time, it is also probably the trickiest one (for me) because it is 'removed' from the document in the sense that it is invisible in relation to other objects, so there is bound to be overlap if there are objects placed nearby. This requires some careful CSS handling to make sure absolute objects aren't layered over other objects
![CSS Table 2](/imgs/css-concepts/2.png "table-2")
   _"Absolute" here has the attribute left:60px, which means it's positioned 60 pixels from the left hand side of the html container. In the process it will ignore other objects, demonstrating how we can easily cover important information.._
