# Tabloid - Fullstack

## We have two sprints to implement a production ready Tabloid application.

### Getting Started

1. Pull down this repo

1. Run the two scripts that are in the SQL folder. These will create the Tabloid database and add some test data. The database it creates is identitical to the prototype from the last MVC sprint.

1. Install your dependencies by running `npm install` from the same directory as your `package.json` file

### ERD

![image](https://user-images.githubusercontent.com/106984214/202237041-04ee6d04-9973-4ef9-b917-93118c9ac386.png)

File tree:

Tabloid/
|-- Program.cs
|-- Startup.cs
|-- appsettings.json
|-- Models/
|   |-- Post.cs
|   |-- UserProfile.cs
|   |-- Tag.cs
|   |-- Category.cs
|   |-- Comment.cs
|   |-- Subscription.cs
|   `-- Reaction.cs
|-- Repositories/
|   |-- BaseRepository.cs
|   |-- PostRepository.cs
|   |-- IPostRepository.cs
|   |-- UserProfileRepository.cs
|   |-- IUserProfileRepository.cs
|   |-- TagRepository.cs
|   |-- ITagRepository.cs
|   |-- CategoryRepository.cs
|   |-- ICategoryRepository.cs
|   |-- CommentRepository.cs
|   |-- ICommentRepository.cs
|   |-- SubscriptionRepository.cs
|   `-- ISubscriptionRepository.cs
|-- Controllers/
|   |-- PostController.cs
|   |-- UserProfileController.cs
|   |-- TagController.cs
|   |-- CategoryController.cs
|   `-- CommentController.cs
`-- Utils/
	`-- DbUtils.cs
Tabloid/Client/
|-- public/
|   `-- index.html
`-- src/
	|-- components/
	|   |-- auth/
	|   |   |-- Login.js
	|   |   `-- Register.js
	|   |-- categories/
	|   |   |-- CategoryDelete.js
	|   |   |-- CateogryEdit.js
	|   |   |-- CategoryList.js
	|   |   `-- CategoryNew.js
	|   |-- comments/
	|   |   |-- Comment.js
	|   |   |-- CommentDelete.js
	|   |   |-- CommentEdit.js
	|   |   `-- CommentNew.js
	|   |-- nav/
	|   |   `-- Header.js
	|   |-- posts/
	|   |   |-- PostDetails.js
	|   |   |-- PostList.js
	|   |   |-- PostListItem.js
	|   |   `-- PostNew.js
	|   |-- tags/
	|   |   |-- TagDelete.js
	|   |   |-- TagList.js
	|   |   |-- TagEdit.js
	|   |   `-- TagNew.js   	 
	|   |-- users/
  |   |   |-- UserProfiles.js
  |   |   |-- UserProfileItem.js  
	|   |   |-- UserActivation.js
	|   |   |-- UserDetails.js
	|   |   |-- UserEdit.js
	|   |   `-- UserList.js
	|   `-- views/
	|   	|-- ApplicationViews.js
	|   	`-- Authorize.js  
	|-- managers/
	|   |-- PostManagement.js
	|   |-- CategoryManagement.js
	|   |-- CommentManagementt.js
	|   |-- TagManagement.js
	|   `-- UserProfileManagement.js
	|-- App.js
	|-- index.css
	|-- index.js
	|-- package.json
	`-- README.md

