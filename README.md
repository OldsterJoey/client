# Assessment: Full Stack Application - Part A
# Wishfully - Kids Search Presents Made Easy!

[Wishfully Figma Prototype](https://www.figma.com/proto/3MW4QWZ1R6mJ62fMv0oJON/Wishfully-wireframes?page-id=5%3A2&node-id=15%3A3244&viewport=926%2C265%2C0.2112327665090561&scaling=scale-down&starting-point-node-id=15%3A3244&show-proto-sidebar=1) | [Figma Wireframes](https://www.figma.com/file/3MW4QWZ1R6mJ62fMv0oJON/Wishfully-wireframes?node-id=15%3A3244) | [Slide Deck](https://www.canva.com/design/DAEk8N07LdQ/share/preview?token=qT9tp40gZxz6jJWS_-FZKQ&role=EDITOR&utm_content=DAEk8N07LdQ&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton) | [Trello For Part A](https://trello.com/b/bMmXLZ02/t3a2-a-joey-irina)
[Trello For Part B](https://trello.com/b/PZABJvH6/t3a2-b-joey-irina)
____

#### Deployed Site: [https://wishfully-2021.web.app/](https://wishfully-2021.web.app/ "https://wishfully-2021.web.app/")

### Client Github: https://github.com/The-Wishfully-Team/client

### Server Github: https://github.com/The-Wishfully-Team/server

# Purpose

Add an extra dash of holiday cheer to your Christmas with Wishfully, and take the stress out of Holiday gift budgeting. Wishfully is the first interactive wish listing and budgeting tool for all your holiday needs, giving parents a platform to plan their child's holiday gifts while ensuring the spirit of the holidays is not lost in the process. Wishfully lets your child create their Christmas wish list with our child friendly, interactive application, which will then be formatted appropriately and sent to Santa (mum or dad) who will be granted access to the child's wish list through their password protected parent profile. This newly formatted wish list will provide shopping links for all products on the list, along with tools that allow you to set prices and form a budget for each child. Streamline your holiday purchases and provide your children with an exciting interactive experience with Wishfully.

# Functionality/Features

This app will include two sets of features targeting two different audiences: Parents and children. Each singular account will be linked to profiles for both the parent and all children within the family, with an extra authentication step to access the parents profile.

When logged in as a child, a child-friendly user interface will be outputted, with each child having access to a selection of simple to use features in order to create their holiday wish list. Features for a child profile consist of:

-   Child-friendly interactive interface that allows a child to create, view and edit their holiday wish list
-   A "message Santa" option that allows for a child to send messages to their parent about their wish list These messages will show up directly on a parents profile, and can be limited or disabled by the parent
-   A countdown number of how many holiday wishes a child may have as set by the parent user
-   A wish list creation tool simplified for child use, along with a "Send to Santa" button which will save the wish list and mark for review for a parent
    
Attempting to log in as a parent will offer an extra step of authentication as to deter children from attempting to view. This authentication will either be a password or security question. Through this profile, parents will have access to a user interface formatted specifically for parents or guardians, containing an array of features:

-   Budget tool that allows to set and review wish list budget. May be individualised for each child, or divided between them according to a total.
    
-   Read, review and edit a child's wish list, with all wishes formatted as links which will take the user to a shopping page (numerous options, possibly Google Shopping or eBay) that queries the specific product.
    
-   Save the price of each product, which will automatically deduct from the set budget of either a set wish list or all wish lists under the account.
    
-   Message a child option, which allows parents to send messages to their children under the guise of Santa Clause

# Libraries Used

We used a variety of libraries within our code to implement complex features in a more productive and industry-standard way, along with creating a more pleasant experience for our users. Some libraries were used for testing purposes only. The libraries we used are:

-   Jest: A Javascript testing library that simplifies the testing process and makes them easier to read and maintain
-   Axios: A javascript library that allowed us to create HTTP requests from our front end
-   particle JS: A javascript library that we used to implement an animated snowflake particle effect into our home page
-   Factory Bot: A library we used to create dummy data for our RSpec tests
    
# Target Audience

The intention of this application is to successfully target families of any size, including both parents and their children.

# User Stories

-   As a parent with many children, I want to be able to manage all my children's Christmas wish lists without running the risk of forgetting anything
    
-   As a busy working parent, I want to be able to take the time and stress away from Christmas shopping, by having a platform that does the work for me
    
-   As a parent on a tight budget, I want a tool that can help me automatically budget my children's Christmas
    
-   As a tech savvy young child, I want a way to write letters to Santa and build a wish list in a digital space
    
-   As a parent who wishes to retain the spirit of Christmas, I want a way to be able to many my children's wish list without breaking the illusion of Santa Clause
    
-   As an older parent unaware of the latest trends in the world of my children, a platform that would allow me to search and find the price of products my children want would be a life saver
    
-   As a child with many siblings, I want to know that my Christmas wish list is being reviewed equally to my siblings
    
-   As a child with very curious children, I want a platform where I can keep my Christmas budget without running the risk of my children getting their hands on it

# Tech Stack

### Front End
- React
- HTML/CSS
- Javascript
### Back End
- Ruby on Rails
- Node.js
- PostgreSQL
- eBay API	

# Dataflow Diagram

![Datafflow Diagram](./docs/dataflow.png)

# Application Architecture Diagram

![Application Architecture Diagram](./docs/aadiagram.png)

# Wireframes for multiple standard screen sizes, created using industry standard software

All wireframes are available at Figma:

- [Figma Wireframes](https://www.figma.com/file/3MW4QWZ1R6mJ62fMv0oJON/Wishfully-wireframes?node-id=15%3A3244)

- [Wishfully Figma Prototype](https://www.figma.com/proto/3MW4QWZ1R6mJ62fMv0oJON/Wishfully-wireframes?page-id=5%3A2&node-id=15%3A3244&viewport=926%2C265%2C0.2112327665090561&scaling=scale-down&starting-point-node-id=15%3A3244&show-proto-sidebar=1) 

Some examples of the wireframes are:

![All wireframes](./docs/wireframes/wireframe0.png)
![Wireframe1](./docs/wireframes/wireframe1.png)
![Wireframe2](./docs/wireframes/wireframe2.png)
![Wireframe3](./docs/wireframes/wireframe3.png)
![Wireframe4](./docs/wireframes/wireframe4.png)
![Wireframe5](./docs/wireframes/wireframe5.png)
![Wireframe6](./docs/wireframes/wireframe6.png)
![Wireframe7](./docs/wireframes/wireframe7.png)

# Agile Project Plan

**SPRINT 1: Initial Homepage and SQL database creation**

User Stories Resolved:

-   As a frequent web browser, I want the websites I visit to have a homepage that is easy to understand and quick to the point.

Our first sprint consisted of the creation of our initial data tables, built using Ruby on Rails and PostgreSQL, and a prototype front end index page built using React. The index page was built to test the capabilities of libraries such as particle.js, and give us an initial framework to build on. The initial stages of our database creation were to form our tables and the columns within in their most basic form, to prepare for relating them.

**SPRINT 2: Authentication Functionality and Active Record Associations**

User Stories Resolved:  

With our data tables created, it was time to move forward to our second sprint. We connected our tables using Rails Active Record Associations feature and began to implement authentication using Knock to create our user data table. On our front end, we build the components required to prepare our server and client to connect.

**SPRINT 3: Server to Client Interaction**

For this sprint, we removed the front end dummy data and replaced it with our back end database, by deploying the database to Heroku and taking in that data to our front end with cross-origin resource sharing. Our front end components were expanded upon to prepare to give our application full CRUD functionality.

**SPRINT 4: CRUD Functionality**

In our fourth sprint, we decided to focus our time on implementing full CRUD functionality within our server to client interaction. As this was a large step that required code from the server and client, along with the deployment of our front end with Firebase, this sprint required a lot of partner interaction, in which the Discord software was utilised for group calls.

**SPRINT 5: Styling and User Experience**

Our final sprint was where we designed our websites complete look, and finalised our simplistic UI and create a more defined and easy to handle user experience.


# Screenshots of Trello board throughout the duration of the project

Part A - Documentation
![Trello1](./docs//trello-a/trello1.png)
![Trello1](./docs//trello-a/trello2.png)
![Trello1](./docs//trello-a/trello3.png)
![Trello1](./docs//trello-a/trello4.png)

Part B - Application

![Trello2](./docs//trello-b/1.png)
![Trello2](./docs//trello-b/2.png)
