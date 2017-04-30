# Agency Portal

The agency portal is a solution to 3 process-specific problems faced by the General Services agency of Baltimore City. It is a form intake portal and processing system that employees can use to submit professional development training requests, perform reviews and approvals, track status and initiate the procurement process for trainings or professional development in a way that is paperless and reportable.

## Inspiration

The agency has a number of paper-based processes that are entirely inefficient.  The training request is an example, and is the subject of this prototype.  Employees routinely make time-sensitive requests for professional development, but employees, supervisors, and agency directors have no information about the overall performance of the process and therefore are unable to measure or improve it. Today, this request involves 4 to 5 people handing off a single piece of paper for signatures.  The process is not standardized and can take anywhere from 2 days for approval to 2 months if the paper is lost or hidden in a pile on someone's desk.   The move to an electronic system will allow us to use data from individual events to manage the process to bring predictability, tracking, reporting, and allow us to use this information to do the following:
* use historical data about the type of training requests to inform our HR department about the patterns in training needs by division to take planning action
* use historical data about dollar values of training request by division and by activity to more accurately inform the budget projections and budget development process for each fiscal year
* use this data to identify instances in which multiple staff people across different divisions who don't know each other request the same type of training that could be purchased for a cheaper price if we are aware of these request and can coordinate and get a better deal.
* use the data to develop tack time standards for process actors
* use this data to answer questions we cannot today about who has what training needs and what is the volume annually and how do training requests match up with (or not) the direction HR and the director want to move the organization in terms of human capital development.

## What it does

* Allow users to submit a training request.
* Allow users to see their submissions, and the status of those submissions
* Allow supervisors to review training requests.
* Allow users to see their requests for professional development as well as the forms they are required to act on that were submitted by their direct reports.
* It provides high level summary information for each user on all professional development requests

## How we built it

* JavaScript
* Node & NPM
* Express
* Mongodb
* Webpack
* Webpack Dev Server
* React
* React Router
* Babel
* Griddle React
* React Bootstrap

## Challenges we ran into

One of Brian's personal development goals was to build something using "bare" technologies.  There are many out of the box solutions and starter kits for using a particular technology stack, especially related to React, but I feel that when I use those things, I am only working toward the goal, rather than enriching my own knowledge of how the base technologies work.  I used all of the technologies listed above in their "natural" state, and did not rely on the 3rd party libraries to manage them.  About a third of my time was spent learning how to use the technologies I wasn't already familiar with on their own.  This was challenging for me because I essentially only had 24 hours to implement a prototype, and I was stressing out trying to learn these familiar technologies on their own.

We did not have enough time to implement all of the base functionality we originally intended.

## Accomplishments that we're proud of

Brian built some awesome shit in an extremely short period of time!  In less than 48 hours of work I can see the beginnings of a solution that can fix a problem my agency has faced for years.  It is a problem many agencies have.   I am also proud that it will be openly available to other municipal employees that have similar challenges with small paper form processes that are used often.

I think we were able to accomplish as much as we did in 24 hours as a result of employing the concepts of data-driven development (among other things, such as great communication between us).  Step One was understanding the requirements, modeling the data, then building out all data structures before any other development was done.  These well thought-out data structures proved to be invaluable for rapid prototyping and "natural" feeling flows in the code.

I am also proud of building a working prototype using from scratch using the above technology stack.  This increases my understanding of how these technologies work as well as reducing dependencies and overhead.

## What we learned

* How to think about structuring data you will use to inform how you build an application.
* How to think about capturing records and properties of a record more easily in Mongodb.
* Syntax and more efficient ways for using if statements.
* How to build a web application with the selected technology stack from scratch

## What's next for Agency Portal

* Better code structure
* Better use of the existing libraries
* Developing notifications to task actors based on submission and failure to complete tasks within set timeframes.
* Allowing supervisors to approve or reject and for requestors to be informed of the action and reasons.
* Allowing purchasers to perform approval task after supervisor approval.
* Allowing for uploading attachments with submissions so that a supervisor has all information necessary for review and purchaser has all information needed for payment.
* Field test...?
