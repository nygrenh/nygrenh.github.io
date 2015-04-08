---
layout: page
category: openacademy
---

Our steady progress continues with getting the templates to compile without local variables.

On Monday we quickly fixed most of the tests we had broken last Friday. One of the failing test was caused by a really nasty corner case and it needs some additional logic to be handled. We were a bit confused how to approach the problem so we asked about it on Campfire and Matthew once again helped us to get back on track.

The communication with mentors through Campfire has worked really well recently. At least I'm satisfied with the quality and quantity of feedback we have gotten out of them during the last two weeks.

## Refactoring

Sometimes when you're trying to accomplish something, you have to change how some code behaves. For example, when trying to solve the locals issue we were facing, we had to make changes how they are passed to the view. While doing the changes we were touching a lot of code which is unfamiliar to us.

How can we make the changes without breaking things? With unit tests. Once we've made a change we can run the test suite and see if it breaks anything. If some tests get broken, we'll take a look at it and try to figure out why that is the case.

But sometimes you want to do bigger refactoring to your codebase and it seems to be impossible to do without breaking everything. The key to refatoring then is small iterations. Basically you do one simple change at a time, make the tests pass, and repeat until you've achieved your goal. All the small iterations are easy to deal with as they occur and you won't hit any unbreachable barriers.

In order this to to work the tests have to be adequate enough. If for example the test depend on the internal structure of the code or are not isolated enough they will get broken for no good reason and slow down the development process.

If the test coverage is lacking we can accidentally break something without noticing it all. As far as I know detecting regressions beforehand in those cases in pretty much impossible. In case we don't notice the issue with manual testing before the next release, we'll notice the issue when thousands of servers are crashing and burning, and people are starting to gather pitchforks.
