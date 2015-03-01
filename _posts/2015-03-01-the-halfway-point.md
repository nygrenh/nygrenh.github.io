---
layout: page
category: openacademy
---

This week we continued to wait for an answer from the mentors. While waiting we decided to work on some other issues as we had nothing else to do. I noticed an issue on the Rails tracker where a Rails method String#truncate_words would get stuck with certain strings. While debugging the problem I noticed that the issue was related to a certain regular expression evaluation. After spending half a day trying to figure out why the regular expression hangs I managed to fix the issue and submitted a pull reguest. The reguest got merged and and backported to the 4.2 branch.

Juho and Jussi also picked issues and Juho got his pull request merged. Jussi's didn't get merged because the rails contributors didn't reach a consensus whether it was implemented the right way or not.

## What we've done

At the beginning we spent a lot of time studying and getting familiar with the internals of Rails. At the time we tried to look at some issues but we coudn't figure out how to fix them.

During the hackathon we were given a big feature that we started to work on after returning from California. Unfortunately our work with it has been stalled for a while because we've been waiting for mentors to give us feedback. Luckily Matthew sent us an email last Friday that cleared things up.

After Matthew's email, the rest of the eager loading feature seems to be straightforward so I believe we should be able to make progress with it quickly. I hope we won't hit any roadblocks anymore.

Also, we have managed to get 3 pull requests merged into Rails. The features were just small fixes we pulled together while waiting for the mentors.

### My contributions

I have done a bit of everything: figuring out where to place our code, implementing the feature and writing tests. I also spent some time helping my teammates with their tasks.

## The rest of the project

The whole Rails team in Helsinki is going to continue the course in the second period. This is really good compared to the other team - Lokki - whose members are all going to quit the course now.

The amount of stuff we've accomplished is quite low, so I hope we can more done. I think part of the reason why we didn't get so much stuff done was because we were relying too much on mentors help - we most likely could have figured more stuff out by ourselves. For example the compiling stuff now in retrospect after Matthew's email seems like a quite simple thing.

I hope after we finish this feature we can get some other proper feature to work on - preferably from some other part of Rails because it would be nice to get familiar with as many parts of it as possible.

Getting some kind of meetings going for the project would be nice too. The mentors said that they were trying to figure out how to do that but I haven't heard anything about that recently.

While we have progressed slowly, I still had a good time. Working with my team has been great and the project we've been working on has been really interesting. I hope this continues on the second half.
