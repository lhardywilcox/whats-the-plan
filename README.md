# whats-the-plan
A daily planner project for bootcamp.

## Description
The goal of the project was to extend some starter code, and add some functionality using JQuery and Javascript.

For me, the planner could be a useful tool to quickly lay out items I need to accomplish during the day.  Being able to save and retrieve the items from Local Storage, also allows the application to reload if the browser was closed for any reason.

The challenge for me in this project was understanding how to use JQuery better.  It felt like I barely got to understand Javascript, and had to learn an additional syntax right away.  The .each and $(this) references were difficult for me to grasp easily.  I also ran into a situation in my conditionals where I was comparing a number to a string and used === instead of ==.  Another very practical lesson learned!

I also had some practice incorporating some information from day.js into the code.

One change I would consider for the future, and for my own use of the app, would be to add code to save the current day as well, so I could clear Local Storage if the current day was different than the saved day.  That might be a change I would like, but may not work for all users.

## Usage
On screen today's date is shown at the top of the schedule, the schedule is broken into normal working hours.  The hours are color coded for past, present and future, and those colors will change when the browser if refreshed based on the current hour.  The user is able to enter tasks into each hour's block, and click the save button to the right side of the block to save their tasks.  If the browser is closed, the tasks will persist when reopened.

## Credits
I received some help from a tutor with this project.  He helped clarify the difference between using .text and .val in the code, as well as helping me understand how to manipulate the different items with a loop.

The starter code for this project is ©2023 edX Bootcamps.

## License
MIT License