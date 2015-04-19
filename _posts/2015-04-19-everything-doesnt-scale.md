---
layout: page
category: openacademy
title: Everything Doesn't Scale
---

At the beginning of the week, we tried to solve an issue with our implementation where conflicting method names would interfere with the locals lookup. We ended up consulting Matthew on Campfire on the issue and solution was to ignore the issue for now and change the approach to the solution a bit later.

Next up we started to look into another corner case where the 'defined?' method would return wrong results in a partial. For a while it wasn't clear whether this is a problem we want to solve since exactly the same issue has been a problem in Rails for a long time. After some research, we verified that this issue has been fixed in master and thus we should not break it in our implementation.

Making 'defined?' to return other data than it usually does is a trickier task since it's not a normal function we can override. Instead we need to make sure that when our special case occurs the variables are defined properly. That means we have fall back to the old solution in those cases. The old solution compiles the views on demand. Matthew added a requirement that our solution shouldn't preclude precompiling the simplest cases in the future.

This being a bigger change to the view compiling logic, the implementation surely won't be easy. One other thing we figured we should remember is that our code depends on special features of the official Ruby implementation and we need to fall back to the old implementation in those cases too! Keeping all those things in mind we came up with an approach that should tackle all the issues. We also started implementing the solution by making code that detects those special cases.

## Coordinating the Rails development

While I could make my whole blog post about all the interesting problems we're tackling, I need to say something about this week's official topic which is coordinating the Open Source process.

Coordinating Rails development is an enormous task. According to the Rails contributors statistics, almost 300 people have made contributions this year alone. What is more, Rails has a lot of random contributors that sometimes pop up to contribute some feature and then disappear. Making sure that all of those people don't do duplicate work is a hard task.

The official approach to the problem is not solving it. Properly coordinating as many people as Rails has would be an impossible task. In Rails, nobody owns issues and there's no official roadmap. If one wants to resolve a problem or to implement a feature, they are free to start working on it. In other words, people can do whatever they want.

There are some channels where developers can attempt to coordinate their work. For examlpe if one wants to discuss a new feature, they can post to the [rubyonrails-core mailing list](https://groups.google.com/forum/?fromgroups#!forum/rubyonrails-core). If one wants to inform the others that they are working something, they can add a comment on a Github issue or to open a pull request about it and hope the others will take the hint.

For some things that the Rails team would like to get done is coordinated using [milestones](https://github.com/rails/rails/milestones?state=open) on Github. Milestones is a list of issues that needs to be resolved and pull requests that need to get merged before some Rails release. But even those issues aren't usually assigned to a person and the developers are supposed to self-organize resolving them.

I'd imagine that the Rails core team has some coordination going on to figure out what the bigger picture of Rails' future should be like. It could be a mailing list or a chatroom. But who knows - I couldn't find any evidence of such channel existing.

## Conclusion

The Rails development is not really coordinated. Instead, people are expected to use their own judgment whether it's a good idea to work on something or not. As a result, people will be accidentally working on the same issues and doing duplicate work. It's not the end of the world and it's not usually even a big deal - after all multiple competing implementations leads to better code quality. The only downside I see with this approach is that it makes it hard for people, who don't have a clear vision what to do, to get involved with the project.
