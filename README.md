# Mock County Site Generator
![alt text](https://i.imgur.com/P3uEdB6.gif "Mock County Generator")

# What is this?

A site that generates a million mock county appraisal sites.

# Why did you make this?

**TLDR:** To train bots to scrape county sites for public records.

In order to get data from a multipage site, we would most likely use a traditonal RPA bot framework like [Automation Anywhere](https://www.automationanywhere.com/) or [UiPath](https://www.uipath.com/). RPA bots more intuitive than web scraping libraries for programming languages because they offer a graphical interface that guides you through the site.

This works for one site, but let's say we need to scrape public records from every county site in the United States (3,007). With a large enough team, this is doable however every time a county decides to update their site, the bot would no longer work.

A possible solution is to use cognitive RPA. We could build a single bot that recognizes data patterns across all county sites. The bot would keep track of commonalities across the sites like nav bars, data tables, and search menus to build an understanding of where to look when a new site is found.

Now we can't just throw a fresh bot at the existing county sites and expect it to come back with our data. We need to give it some easy examples to train with. By generating a million of own county sites, the bot can practice for as long as it needs.

 Once the bot can successfully navigate these sites and identify data without human intervention, we can move feed it some real world sites like [Bradford County, Florida](http://www.bradfordappraiser.com/) or [Bannock County, Idaho](https://www.bannockcounty.us/assessor/).
 
 # What is the goal?
 
 The bot needs to navigate from [/home](https://btybv.sse.codesandbox.io/home) to [/search](https://btybv.sse.codesandbox.io/search) to [/data](https://btybv.sse.codesandbox.io/data) without altering the endpoint directly.
 
 If the bot ends up at any other endpoint ([/home](https://btybv.sse.codesandbox.io/contact), [/home](https://btybv.sse.codesandbox.io/calendar), [/home](https://btybv.sse.codesandbox.io/reports), [/home](https://btybv.sse.codesandbox.io/questions), it has failed and must restart.
 
 # Where do I start?
 
 Navigate to the [/home](https://btybv.sse.codesandbox.io/home) endpoint. Or click the [▶️ Start ](https://btybv.sse.codesandbox.io/home) button at the top.
 
