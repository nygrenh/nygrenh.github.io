---
layout: page
category: openacademy
---

Since my previous update, we have mostly been fixing problems with our current code. On Thursday, we had a retrospective with one of our faculty members, Sezin. We had to list good and bad things about our work and come up what we should improve. We mostly came up with good things so I think we're doing well.

## Documentation

This week's topic is documentation. The documentation for Rails is pretty easy to find. Right on the Ruby On Rails website, there's [a page](http://rubyonrails.org/documentation/) dedicated to all the resources. Besides the official documentation resources, it also suggests a couple of books.

### Rails Guides

The Ruby on Rails Guides is a set of articles that offer introductions to different Rails concepts, parts, and design patterns. It is pretty comprehensive and a great resource for beginners.

The Guides were helpful when we were starting this project. Especially useful was the [Contributing to Ruby on Rails](http://guides.rubyonrails.org/contributing_to_ruby_on_rails.html) guide which outlines how the contribution process in Rails works.

The problem with the guides in the context of our project is that it mostly contains help on how to use Rails not to develop it. The guides tell how one is supposed to use Rails and don't tell that much how things work internally. Having some guides that would help new developers to understand how things work would lower the barrier for contributing.

### APIs

The API documentation describes all the available methods in Rails. It's made with RDoc - the Ruby Documentation System. It works by parsing the comments in the source code.

The purpose of this documentation is to provide a description what classes and methods are, what the arguments are and so on. It's meant to document all the intended functionalities of methods.

Some of the available methods are not meant for public consumption. Those methods are marked with a :nodoc: comment in the source code. Basically, that means that one should not rely on those methods and they can change without warning. To avoid confusion, these methods do not show up in the public documentation.

If a method is a public and doesn't have the nodoc comment, you can rely on it. If the Rails Team wants to change such a method, they will first deprecate it on a Rails release. Deprecating a method is basically giving developers a heads up that something is changing. Once a method is deprecated, using it will print a warning so you know to prepare for the change.

The API documentation is the most useful documentation when developing Rails; it tells how the code is supposed to work. Usually though I don't read the generated documentation during development process because the documentation is generated from the comments and thus visible straight in the source code.

## Conclusion

Rails has an excellent documentation for someone who wants to use the framework. Those who want to develop the framework itself will have to figure out more things on their own, but there are still resources available. Documenting a project that is as large as Rails is not an easy task and I think they've managed to do it quite well.

