---
layout: page
category: openacademy
---

Our steady progress continues with getting the templates to compile without local variables. On Monday we quickly fixed most of the tests we had broken last Friday. One of the failing test was caused by a really nasty corner case and it needs some additional logic to be handled. We were a bit confused how to approach the problem so we asked about it on Campfire and Matthew once again helped us to get back on track.

The communication with mentors through Campfire has worked really well recently. At least I'm satisfied with the quality and quantity of feedback we have gotten out of them during the last two weeks.

## Refactoring

Every once in a while it's time to do some refactoring. But Rails has a policy of not accepting refactoring pull requests. How does the code get refactored then? Does that mean that Rails code never gets refactored? The answer is of course no. Refactoring happens but only if there's a good reason for it.

For example, when we were getting the ActionView templates to compile on startup, we had to make some changes to the compiling logic. The previous implementation assumed that no one would want to start the compilation outside of the template classes. That was of course a problem because we wanted to do that from our Template Eager Loader class. There were some other things we needed to change too. The compiling process was also tightly coupled with synchronization logic meant for multi-threaded environments. Since that was something we didn't need we also did some work to separate those two. Solving those issues involved refactoring the template class.

How can we make the changes without breaking things? With unit tests. Once we've made a change we can run the test suite and see if it breaks anything. If some tests get broken, we'll take a look at it and try to figure out why that is the case.

But sometimes you want to do bigger refactoring to your code and it seems to be really hard because the logic is complex and getting everything to work after the refactoring is hard. The key to refactoring then is small iterations. Basically you do one simple change at a time, make the tests pass, and repeat until you've achieved your goal. All the small iterations are easy to deal with and the problems are manageable.

In order this to to work the tests have to be adequate enough. They have to cover all the functionality we don't want to break randomly. That's why  Rails requires every new feature to come with comprehensive tests. In my experience the tests in Rails have been a good indicator how horribly I have broken everything.

Even if we get all the tests to work and our code passes the manual testing, we can still have accidentally broken something. The tests can't be perfect and sometimes changes can gave crazy unexpected side effects. If that's the case we just have to hope that someone catches the issue before the code is deployed to thousands of servers and causes big problems.

## Conclusion

While it superficially might seem like Rails is hostile to refactoring with their policy of not accepting pull request that only contain refactoring, it still is a part of the development process. When the refactoring is needed in order to accomplish something, it is welcomed and not frowned upon. It makes sense not to accept any changes to the project that could accidentally break something but doesn't bring any additional functionality or value to the end user.
