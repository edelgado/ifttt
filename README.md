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

Go to [ifttt.meteor.com](http://ifttt.meteor.com) or, if you have meteor installed, you can run it by typing `meteor` in the app directory. Then go to [http://localhost:3000/](http://localhost:3000/) to visit the app. The app outputs some interesting logs on the server console, so if you run it from your own local machine, you will get to see more about how the matchings came to be.

A note about emails: When running your application locally, emails messages are written to standard output, unless the `MAIL_URL` environment variable is set, per the [docs](http://docs.meteor.com/#email). Emails will be sent if you use the app via [ifttt.meteor.com](http://ifttt.meteor.com).

### What design decisions I made

I decided to use [Meteor](http://www.meteor.com/) because it is a server-side JavaScript (it's based on Node.js) framework that I've been interested in and this seems like a great opportunity to develop an app with it. Even if I don't land the apprenticeship, I would at least take with me the knowledge I gathered while writing this app :-]. One cool side-effect of using Meteor is that you could have amy windows opened for the app (one in California, and another one in Melbourne for example), and the users will see pairings, people, teams and their relationships in real-time. The UI is automatically up to date, everywhere (assuming you haven't lost internet connectivity!).

Meteor also allows me to easily deploy to the meteor.com servers so that you fine folks at IFTTT can just go to the app. No complicated installation on your side.

For the front-end, I'm using [Bootstrap](http://twitter.github.io/bootstrap/) since I'm already somewhat familiar with it and it gives me a great starting point for a great looking app. I like to start by [drawing UI ideas on paper](http://campl.us/cmguAJlqokm).

Security: The app does not require logging in. This is just for simplicity sake. I wanted to spend time working on the minimum viable app before adding features that weren't part of the specs.

Reusability: The admin shares layouts, partials and logic for both Teams and People. Keepin' it DRY folks. UPDATE: I may have gone too far trying to re-use layouts. It complicated my Meteor "managers" a little bit.

An idea I had, but that I didn't have time to go in and refactor things, is to admin people and teams in a global matrix way, example:
<pre>
  People/Teams | Team 1 | Team 2 | [Add Button]
  Elizabeth    |  [x]   |  [ ]   | 
  Angela       |  [ ]   |  [x]   | 
  Sophia       |  [x]   |  [ ]   | 
  Casey        |  [ ]   |  [x]   | 
  Ludwig       |  [x]   |  [x]   | 
  William      |  [ ]   |  [x]   | 
  Vinny        |  [x]   |  [ ]   | 
  Stacey       |  [x]   |  [ ]   | 
  [Add Button]
</pre>
Maybe next time!

#### Algorithm

The most interesting part of the app is the pairing algorithm. The code for my algorithm can be found in the `server/pair.js` file. It is an interesting problem to solve. I'm using a "history buffer" (only grows as big as the maximum number of teammates a person can have) and recursion to try again when the history gets full.

I started by mind-mapping it before writing actual code:
<a href="https://dl.dropboxusercontent.com/u/74442973/Pairingprocess.png" target="_blank"><img src="https://dl.dropboxusercontent.com/u/74442973/Pairingprocess.png" style="width:600px"></a>
The algorithm ended up a little different though. Instead of clearing all of a person's history at once, I decided to only take the oldest "pairing" out of the history; making it available again.

The algorithm seems to do a good job overall. A big win is that is has no issues double-matching people that are in more than one team, for example. Still, it is not perfect as I had to stop somewhere before running out of time. One known issue is that it is possible for two people to be matched twice in a row:
<pre>
  Given the sample teams, I found this history in which William and Angela got matched twice in a row:

  -=> Hardcore pairing action... <=-
  => Sophia <> Ludwig
  => Elizabeth <> Stacey
  => William <> Angela
  => Casey is doing a solo round
  => Vinny is doing a solo round

  -=> Hardcore pairing action... <=-
  => Casey <> Ludwig
  William seems to have met with everyone in their team, so lets call an old friend.
  Teammates: fH5CxjmirdaTWP6mY,GAicokEWnsZcoJSZa,JH9WcSvRwC3XezzxW
  History: fH5CxjmirdaTWP6mY
  Already Paired:GAicokEWnsZcoJSZa,JH9WcSvRwC3XezzxW
  => William <> Angela
  => Vinny <> Stacey
  => Sophia <> Elizabeth

  This is because the first week, William and Angela got paired, and in the second week, Ludwig and Casey got paired before William got paired. Therefore, only Angela was left available in Team 2 for William, so the got paired twice in a row.
</pre>

I'd be interested to find out what the best solution looks like :-]

### How I tested my app

Using fixtures to provide a stable starting point from which to begin the app and verify functionality. Meteor also has a "reset" feature to clear the DB. That came in handy when testing things, but starting from a known state. Unfortunately, I did not have enough time to add unit tests. Sorry about that! With more time, I would have liked to do some unit tests to make sure the CRUD operations are correct, but mainly tests around the accuracy of the algorithm. For example, doing some stats on 1,000 pairing cycles and get info about speed, how often are folks paired twice in a row, what is the average distance between pairings of the same people, etc.