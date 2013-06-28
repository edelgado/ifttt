Enrique Delgado's IFTTT Apprenticeship Project
==============================================

## I. Free responses

### Question 1

A mysterious benefactor offers to pay your bills for a year so you can work full-time on any programming project you want. What would you work on?

### Question 2

Same mysterious benefactor, same sweet deal, but this time you're asked to work on a _non_-programming project. What would you work on?

I would love to join a group of researchers to study the Colossal Squid. Even though I love outer space (I'm a space junkie), I feel like there are lots of places to explore in the deep oceans. Here is a fascinating [TED talk](http://www.youtube.com/watch?feature=player_embedded&v=IThAD5yKrgE) about deep sea and bioluminescence for example.

We are just beginning our understanding of the Colossal Squid in its natural habitat. One of the best interactions we've ever had with it can be seen in this [short documentary](http://dsc.discovery.com/tv-shows/curiosity/videos/discovering-the-giant-squid.htm). I'd love to help bring more understanding about this wonderful creature.

## II. Project: 1+1

### Instructions on how to run and use the app

Go to [ifttt.meteor.com](http://ifttt.meteor.com) or, if you have meteor installed, you can run it by typing `meteor` in the app directory. Then go to http://localhost:3000/ to visit the app.

### What design decisions I made

I decided to use [Meteor](http://www.meteor.com/) because it is a server-side JavaScript (it's based on Node.js) framework that I've been interested in and this seems like a great opportunity to develop an app with it. Even if I don't land the apprenticeship, I would at least take with me the knowledge I gathered while writing this app :-].

Meteor also allows me to easily deploy to the meteor.com servers so that you fine folks at IFTTT can just go to the app. No complicated installation on your side.

For the front-end, I'm using [Bootstrap](http://twitter.github.io/bootstrap/) since I'm already somewhat familiar with it and it gives me a great starting point for a great looking app. I like to start by [drawing UI ideas on paper](http://campl.us/cmguAJlqokm).

Security: The app does not require logging in. This is just for simplicity sake. I wanted to spend time working on the minimum viable app before adding features that weren't part of the specs.

Reusability: The admin shares layouts, partials and logic for both Teams and People. Keepin' it DRY folks.

### How I tested my app

TBD