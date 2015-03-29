---
layout: page
category: openacademy
title: If It Ain't Broke, Don't Fix It
---

Last week we spent our time trying to get the view templates to compile without locals. Matthew provided help with some of the issues we were facing on monday and briefly after that we got it to work! Our changes broke some of the tests that were for less common use cases but we mostly managed to work around them.

We also started restructuring the code to not to use the partials in the template lookup. Getting the lookup to work without partials is problematic because a lot of other functionality depend on the methods whose parameters we're trying to change. During the refactoring I believe we broke about 500 tests and fixed about 300 of those.

## Testing

The topic for this week is code quality and testing. I'll start with how we're testing our code, since it's a good starting point.

Our code is tested with unit tests using the test unit framework. Some of our tests take advantage of mocha, which is a library for creating mocks in Ruby. This is actually bad since the Rails team is trying to phase out mocha from Rails. But when we asked the mentors about using it they said that it's fine to use it for now.

The problems with our tests don't end here. Many of the tests are mocking private functions inside the class under test, which makes our test code depend on the internal implementation. If one wanted to restructure the class he would have to rewrite most of the tests which is not desirable.

### Rest of the project

The rest of the project is tested with Test::Unit as well. The quality of test varies a lot. Some of them use mocha too! Some of the test used to be run in deterministic order because some tests were depending on each other. The tests depending on each other has now been fixed but it gives some insight what kind of state some of the tests are in.

## Code Quality

Like testing, code quality in Rails varies a lot. When submitting a pull request, other people review your code throughly and you will get really good feedback on how to improve the quality of your code. While reading the source code you can find, at times, really eloquent solutions to problems. But sometimes, you will bump into really ugly hacks.

One thing I have noticed that the Rails developers really love abstraction. When something can be done simply in a clearlyor logically, it usually has been abstracted into at least ten different layers. One especially annoying pattern that I've observed is when a method does one small thing and then delegates the rest of the execution into its superclass using the super keyword. That's nice, expect in Ruby it's not instantly clear where the supermethod resides. I usually have to use a debugger to figure out where the execution continues next. And it gets really funny when the super call chain seems to be never-ending and you just want to figure out what's going on with the code! This makes trying to figure out what a piece of code does really time intensive.

Another code quality problem is lack of documentation of the internal methods. They are widely not commented and it's not possible to just read random parts of the source code and figure out what it does. Good method for figuring out what some cryptic part does is removing it and seeing what tests it breaks. Tests act as a supplementary documentation for the project.

Another thing that disturbs about the Rails code quality is lack of linting. They don't enforce any use of linting or even recommend it. As a result, the syntax varies a lot and people type things a bit differently. If someone wants to unify the syntax it's not possible, because Rails has a policy of not accepting cosmetic changes.

The Ruby on Rails Guides have [a list](http://guides.rubyonrails.org/contributing_to_ruby_on_rails.html#write-your-code) of coding conventions used in the project. At the time of writing this, the list has 11 rules. This is really brief and in my opinion not nearly enough. To put some perspective to this, the community maintained [Ruby Style Guide](https://github.com/bbatsov/ruby-style-guide) has over 200 rules.

## How to Improve the Situation

To improve the syntax situation I would adopt the conventions from the Ruby Style Guide and verify they're being used using a linter such as [Rubocop](https://github.com/bbatsov/rubocop). The formatting check should be included in the continious integration script so that it would be easy to notice rule violations in a pull request.

To make the code more understandable, I would start requiring new code to be properly commented before accepting it to the project. Some effort could also be made into refactoring the old code and commenting it.

Now, most what I just proposed is most likely hard to implement because there's so many people working on Rails that it would be almost impossible to implement this kind of changes without causing a huge chaos. But even taking small, non-world-breaking steps would help the situation.
