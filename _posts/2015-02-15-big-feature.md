---
layout: page
category: openacademy
---

During the code sprint in California, Aaron Patterson gave us a big feature to work on. This week we've been working on it.

The feature is actually quite simple: In Rails, before the server can show you a view, it has to be compiled to Ruby code. Rails caches this compilation. Right now this is done on demand when the first request to that view comes in. We're trying to make it possible to do this caching eagerly on startup.

Since Rails has this caching already built-in, we're just going to use this functionality. In `resolver.rb` we have already have a method for caching that we can use:

<pre><code># Cache the templates returned by the block
def cache(key, name, prefix, partial, locals)
  if Resolver.caching?
    @data[key][name][prefix][partial][locals] ||= canonical_no_templates(yield)
  else
    fresh_templates = yield
    cached_templates = @data[key][name][prefix][partial][locals]
    if templates_have_changed?(cached_templates, fresh_templates)
      @data[key][name][prefix][partial][locals] = canonical_no_templates(fresh_templates)
    else
      cached_templates || NO_TEMPLATES
    end
  end
end
</code></pre>

## Variables

In order to use this method, we first need to figure out what all of those arguments are for.

The second argument: 'name' is simple: it's the name of the template being rendered. For example if we wanted to render edit.html.erb, the name would be 'edit'.

Prefix tells where the view is located. This means the relative path to the right folder from the views root. It could be for instance 'people'.

Partial most likely tells the method if the view is a partial and locals is probably related to it. This is something we haven't had time to look into yet.

### Key

Key is an instance of DetailsKey that can be created from a details hash. The details hash consists of the following parts: locale, formats, variants, and handlers.

Locale is an array that tells which languages the user is expecting. The first element is the preferred language and the ones after that act as fallback languages. English is always used as a fallback language since Rails has default translations for it. For a request, where the user expects to see English, the locale would be [:en]. If the user expected Finnish, the locale would change to [:fi, :en].

Formats tells the file types this view is intended for. For example [:html].

Variants related to a feature in Rails where you can have a different variation of the view for example for mobile clients. The variants is the variant name.

Handlers tells for which handlers (think erb, haml...) are acceptable for this view. A list of all handlers that the application supports seems to be sufficient.

## Now what?

Basically, now we have to implement some code that figures out all the possible permutations of the aforementioned variables and calls the calls the caching method with them.

Right now the easiest method seems to be calling the find_all method on resolver. The method returns the templates and caches them in the progress. The reason we're using this instead of the cache method directly is that it is easier to call. To call the cache we need an instance of the cache object and it's not directly exposed from the resolver. Using find_all should be fine, since it delegates our call to the cache method.

Right now we're able to generate most of these variables and we've been able to verify that our code works. We haven't implemented caching for all pages such as error pages. Also, we need to figure out how to handle partials and locals.

Other than that it's quite clear what we should do next. With this pace I think we should be able to get this working in no time.
