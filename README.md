# What's For Dinner?

..* Link to front end repo: https://github.com/jbculbertson/dinnerapp-front-end
..* Link to back end repo: https://github.com/jbculbertson/dinnerapp-back-end
..* Link to live site: https://jbculbertson.github.io/dinnerapp-front-end/



# What does this app do?
What's For Dinner is a project that I'm starting during project two at WDI.  As someone who likes to cook, I want to have all of my recipes in one easy place so that I can quickly make decisions on what meals I'll be cooking during the work week, and make sure I get all of the necessary ingredients when I go to the grocery store.

To use the app, create an account and login!  You can quickly and easily add your favorite recipes.  When you want to do some meal planning, just login and you'll have all of your favorites just a click away.


# Approach to building
When we were given this project prompt, I had a pretty good idea of what I was going to build.  From my experience in Project 1, I knew that I needed to plan ahead more this time.

My first step was to plan out all of the user stories. The way I thought about it, I needed to build a site to achieve these goals - anything extra was out of the immediate scope.

Once I had the user stories down, I threw together a quick wireframe to see how I wanted to UX of the site to look.

Then I threw together a quick landing page using Bootstrap.  Since I had thought through the approach taken in building it, organizing my HTML was much easier.  I created sections and divs that were logically grouped.  For example, when a user logs in, I wanted all of the landing page and login HTML to disappear - so I build them in a way that they were grouped for easy show/hide.

With a basic template to run with, I started building my API.  User Authorization was much easier this time around, having struggled through it during Tic Tac Toe.  By the time I got to my non-auth API calls, I was a seasoned vet!

As I continued on, I had to focus in on hitting a MVP version of project, leaving some issues to work out after completing.

Among other things, here are some things I'd like to improve:

1.  Right now, ingredients are manually entered each time you create a recipe.  I'd love to create a database of ingredients, with helpful attributes like average cost, preferred location to buy, etc.  I think this would be a great way to get more data out of meal planning.

2.  As of now, the app only shows recipes.  I'd like to create the ability to dynamically create shopping lists and menus from the recipes.

3.  I'd also like to make recipes sharable, so that you can share a good recipe with a friend.


# LINKS TO WIREFRAMES
https://wwwjeffculbertsoncom.mybalsamiq.com/projects/whatsfordinner/prototype/New%20mockup%202?key=238cebe745b787702f175cc9c329aa838949de62

https://wwwjeffculbertsoncom.mybalsamiq.com/projects/whatsfordinner/prototype/New%20mockup?key=238cebe745b787702f175cc9c329aa838949de62

# USER STORIES
As a user, I want to be able to:
// auth features
: create an account with a name, username and password
: be able to login to view my account
: be able to change my password
: be able to logout

// recipe board
: be able to add my favorite recipes to my account, with properties of (name, ingredients, written directions, link, pic)
: be able to click on specific ingredients in a recipe to add them to a grocery list
: be able to click on specific recipe to add them to a menu list
: be able to edit an existing recipe
: be able to view other peoples recipes?

// menu list
:be able to see all of the meals I’ve selected for this week
:be able to see all of the meals I’ve selected for next week?

// on my grocery list
: be able to checkoff items from my grocery list once purchased
: be able to reorganize items on my grocery list
: be able to view my grocery list by itself
: be able to add other ingredients to the grocery list as well
