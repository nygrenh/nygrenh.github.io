---
layout: page
category: openacademy
---

This week we opened the pull request and started to get feedback on it. It turned out to be a really effective way of getting feedback. We got surprisingly many improvement suggestions from random people who are not mentoring for the Open Academy program.

The feature is now mostly ready to get merged - the only thing missing is a proper solution to the locals issue. Hopefully we can figure out something with the mentors soon so that we can get our pull request merged.

## Monkey patching

In Rails the basic Ruby types have more capabilities than in non-Rails applications. For example in Rails you can do this:

<pre><code>8.multiple_of? 2
=> true
</code></pre>

But if you try this in regular Ruby you get:

<pre><code>8.multiple_of? 2
NoMethodError: undefined method `multiple_of?' for 8:Fixnum
  from (irb):1
  from /usr/bin/irb:11:in `&lt;main&gt;'
</code></pre>

How is this possible? This is a problem many Rails developers face when they're trying to migrate their code into non-Rails projects.

The solution to the problem is this snippet from the Rails source code:

<pre><code>class Integer
  def multiple_of?(number)
    number != 0 ? self % number == 0 : zero?
  end
end
</code></pre>

Basically, this code modifies the existing integer class from the Ruby standard library and defines a new method into it. This redefinition allows us to use this functionality from all the Rails applications.

This kind of modifying existing classes on-the-fly is called monkey patching. It is a feature that is typically only available on dynamic programming languages.

But what if you don't want to edit a whole class? Say, you have an object and you want it to have a method but other objects don't need it? Luckily, this is possible in Ruby!

Enter instance_eval. Instance_eval is a method that temporarily changes the Ruby self variable to point to the Object it's called on and yields a block. Among other things, this allows us to define new methods on instances.

<pre><code>class Banana
end

b = Banana.new
b.instance_eval do
  def message
    puts 'ee eeee'
  end
end

b.message
</code></pre>

This code would print 'ee eeee'. However, the message method is not available on any other instances of the Banana class.

If you define a method that already exists, it will overwrite the old method. For example this can be used to stub a method in a unit test. One downside of that is that it prevents us from calling the original method in the stub. We can work around this by first renaming the original method with alias_method and then doing the stub definition.

Accidentally overwriting a method that already exists can be dangerous. Some of the Ruby methods depend on each other and and overwriting some methods may cause others not to work logically. For example, if you accidentally overwrite the plus method in fixnums:

<pre><code>class Fixnum
  def +(other)
    0
  end
end
</code></pre>

After that taking a sum from an array does not return expected results:

<pre><code>[2, 3, 5, 6].sum
=> 0
</code></pre>

All in all, monkey patching enables us to do many cool things but one has to be careful when using it. With great power comes great responsibility.
