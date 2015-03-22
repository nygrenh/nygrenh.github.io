---
layout: page
category: openacademy
---
This week we started to figure out how to solve the locals issue based on Matthew's suggestion. In order to implement Matthew's idea, we need to be able to detect assignments to the locals from the compiled code. We started to look into how to do that with parsing Ruby machine code that RubyVM::InstuctionSequence.of gives us. Being unfamiliar with the Ruby virtual machine it took us a while to figure out how the syntax works. The syntax being really poorly documented especially made our task challenging.

This week I will give you an overview of the Ruby on Rails architecture. Rails is used as a gem in your Rails application. Rails consists of several modules which also take advantage of several gems.

## Action Pack

Action Pack's responsibility is to handle and respond to web requests. It contains Action Dispatch, which is responsible for parsing the request and routing. Action Controller which provides a basic controller. It controls sessions, caching, requests a view to be rendered.

## Action View

Action View is a set of tools that handles loading templates and rendering. Renders things from template formats (such as erb) to presentation formats (like html). Usually called by Action Controller.

## Active Model

Active Model provides helper methods for models.

## Active Record

Handles mapping objects into database tables. One objects represents a row in the database. With it rows can be created, modified an removed. Also provides mechanisms to handle relationships between the objects. All this is accomplished by providing a base class for models.

To modify the objects Active Record needs complex SQL-queries. To build them, Active Record uses an external library called Arel. Basically, Arel builds abstract syntax trees out of desired database operations and converts it into SQL-queries.

With the queries ready, Active Record still needs a way to send the query to an external database. This is where connection adapters come in. For each supported database, there's a library that acts as an interface to the actual database program. For example for Posgresql, there's the pg gem and for SQLite there's sqlite gem. Active Record talks to those gems to communicate with the databases.

## Action Mailer

Action Mailer handles sending mails from the application. It can also be used to receive email. For most of it's tasks it delegates the job to the mail gem.

## Active Job

Responsible for managing background jobs. Provides an interface for scheduling tasks to be executed later. Delegates the job to some external library such as Sidekiq, Sucker Punch, or Resque.

## Active Support

A set of Ruby standard library extensions and helper classes. For example if you want to get to the 42th element of an array, Active Support gives you a convenient helper method just for that: Array#forty_two.

## Railties

Railties is responsible for pulling all the rails components together. Among other things it starts the application, and handles the command line interface.

Quite a list, huh? But wait.. there's more! Rails also takes advantage of several other 3rd party dependencies such as Rake, the Ruby task runner, and Rack-cache, a HTTP cacher. And I most likely missed some of the other parts of the architecture. Rails is so huge project that it's challenging to keep track of all the moving parts.
