---
layout: page
category: openacademy
---

After receiving an update from the mentors late last week, we were able to continue our work. This week we implemented the compiling part of our feature, wrote more tests and refactored our code. Unless something unexpected comes up, we should be ready to open a pull request shortly.

## Ruby

Now I'm going to focus on the magic behind Rails - the Ruby programming language. So what is Ruby? Its website characterizes it as “A dynamic, open source programming language with a focus on simplicity and productivity.”

The basic idea of Ruby is to have a programming language that is pleasant for humans to read. That's why Ruby tries to resemble normal text as closely as possible. That's justifiable because computers don't really care what your code looks like because they are just dumb machines that execute one instruction after another. The code should tell you what's it's intent. It can be said that Ruby is meant to maximize programmer happiness.

Ruby code is usually interpreted on runtime. Its official implementation is written in C but it has multiple alternative implementations. Two most popular ones are JRuby and Rubinius. JRuby brings ruby on top of the Java Virtual Machine whereas Rubinius is built with LLVM. Both of them offer technological benefits over normal Ruby such as Just-in-time compiling.

Like many of the other high-level languages, Ryby does not support manual memory management. Instead it has a garbage collector that periodically pauses the execution of your program to remove objects that are no longer needed. This can be a performance bottleneck so one has to be careful what to declare and when.

Shared Ruby libraries can be packaged into gems. Gems can be installed using the RubyGems package manager. Application dependencies can be managed and installed using the Bundler dependency manager.

### Interesting things

I won't be going through the basic syntax of Ruby as it'd be boring and pointless. Instead I'm going talk about some interesting features that may be foreign to people who have been working with other languages.

Something that's hard to grasp is that everything is an object. Let's explore this with an example:

<pre><code>"Hello world".class
=> String
false.class
=> FalseClass
false.class.class
=> Class
</code></pre>

As you can see, even classes have classes! I find this to be a really fascinating part of Ruby.

Another essential feature that one has to understand is blocks. Basically, blocks are a way of passing executable code into a function. The function can execute the passed code using the yield keyword. Here's an example:

<pre><code>def example_function
  puts "This is the function"
  yield
  puts "This is the function again!"
  yield
end

example_function do
  puts "This is the block"
end
</code></pre>

The example_function call will produce:

<pre><code>This is the function
This is the block
This is the function again!
This is the block
</code></pre>

You can even pass arguments into blocks or save them in variables. The sky is the limit!

Being an object-oriented language, Ruby has support for inheritance. But sometimes inheritance is a really clunky way of sharing common code between classes. That's why you can mixin modules into them! If a class mixes in a module it will get all of its methods. This is a really robust way of avoiding duplication.

## My thoughts

While Ruby is a complex language, I don't find any of its fundamental concepts hard to grasp. Hardest thing when programming things is finding the right methods from the standard library for the job. Even that is pretty easy though since the documentation is pretty good. If I have to nitpick something I'd say that the default testing framework, Test::Unit, is pretty limited and frustrating to work with. Other than that I really enjoy working with the language and I think it does its job quite well.
