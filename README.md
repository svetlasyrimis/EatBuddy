# MealMatch
##By: Team FullStack Monsters
![](assets/team_logo.jpg)

### Project Overview
A meal & drink suggestion app for indecisive eaters.

##Project Description
It is an app that helps the user generate a random meal and drink combo so that they don’t have to decide on one. The app requires users to register first, then log in. Then they come to the home page where they can shuffle a meal & drink combo by pressing a button. If they don’t like the combo, they can shuffle until they find one they like. After it shuffles users can favorite a meal and drink to save to their dashboard, with the options to add a combo to a favorites category or to check the recipes of the combo. On the favorites page the user can also delete and put a comment on a combo.
 
## Feature List 

* Oath 2.0 - register,login,logout  
* Shuffle button to generate a random combo 
* Access to personalized board of meal and drink combos as well to a favorites and recipe pages 
* Favorites category 
* Recipes Categories


## Frameworks
React.js, Express.js

## MVP /POST MVP
###MVP
* Working API  endpoints and conditional rendering with React.
* Access to board, favorites,  recipes and their corresponding buttons allowing users for CRUD operations.
* Form validation.

###POST MVP
* Get a board of all users.
* Add ingredients to the recipe table.


##Wireframes 
Sketches of the user interface with notes of how the user will interact with the UI.
Wireframes should be broken into components which then should be described in a component heirarchy.
##React Component Heirarchy 

## Components 
| Components    | Description   | 
| ------------- |:-------------:| 
| Header  | This component will render the header. |    
| Footer    | This component will render the footer.    |            
| Home       | Not decided yet. |
| RegisterForm  | This component will render a register form. |    
| LoginForm     | This component will render a login form.     |            
| Logout        | This component will render a logout button.    |
| Board         | This component will render a board with all of the combos of the user logged in |  		           
| Faves         | This component will render the favorites category of the user.    |    	           
| Recipes       | This component will render a list of combo recipes from the board.     | 		           
| BoardCard     | This component will render each combo in the board.   |    	           
| FavoriteCard  | This component will render each combo in the favorites page.    | 
| RecipeCard    | This component will render a combo recipe in the recipe page.    |    

## Express Routes 
`server.js`

```
  app.use('/users', userRouter);
  app.use('/board', boardRouter);
  app.use('/favorites', favoriteRouter);
  app.use('/recipes', recipeRouter);  
```

###userRouter

| Method       | Endpoints      | Description  |
| ------------- |:-------------:|    :-----:    |
| POST         | `/ `        | Register a user.|
| POST         |  `/login `  |Login a user.  |
| GET          | `/verify  `    |Load a token from localStorage when accross the app and verify it is valid |

###boardRouter
| Method       | Endpoints      | Description  |
| ------------- |:-------------:|    :-----:    |
| GET           | `/`        | Get all combos by all users (not sure if we will use that)|
| GET           |  `/user/:id `  |Get all user's combos.  |
| POST          | `/user  `|  Add a combo to the board.   |
| DELETE          | `/user/:id  `|  Delete a combo from the user's board and from the database.   |
| POST          | `/user/favorites  `|  Add a combo from the boards to favorites.   |
| POST         	| `/user/recipes`  |  Can add a recipe to the recipe list.   |

###favoritesRouter 
| Method       | Endpoints      | Description  |
| ------------- |:-------------:|    :-----:   |
| GET           |    `/`        | Get all favorites combos by the user.|
| PUT         	| `/:id  `   |  Can add a comment to favorites or change name of food/drink.   	|
| DELETE         | `/:id`|  Unlike the item. |

###recipeRouter 
| Method       | Endpoints      | Description  |
| ------------- |:-------------:|    :-----:   |
| GET           | `/`        | Get all recipes of the board. |
| PUT         	| `/:id  `  |  Can add a comment to a recipe.   |
| DELETE         | `/:id`  |  Delete a recipe. |


## Time Estimates(Front End)
| Component 	  | Priority       | Estimated Time | Time Invested   | Actual Time    |
| :---         |     :---:      |          :---: |      :---:      |      ---:      |
| LoginForm    | high  			  |  3h   	         |TBD              | TBD            |
| Logout   |      high 			|      30min           |TBD              | TBD            |
| RegisterForm  |  high  		 | 3h   |TBD              | TBD            |
| Board    |  high     			| 3.5h     |TBD              | TBD            |
| Faves   |  low  				| 4h  |TBD              | TBD            |
| Recipes     |    low   		| 2.5h      |TBD              | TBD            |
| BoardCard   |   high 			|   1h  |TBD              | TBD            |
| RecipeCard    |    low    	|   1h    |TBD              | TBD            |
| Total   |      	|    16h  |          |            |


##List Dependencies 
[The MealDB API](https://www.themealdb.com/api.php) 

[CoctailsDB API](https://www.thecocktaildb.com/)


## Additional libraries
| Library       | Function      | 
| ------------- |:-------------:| 
| react-image   | `<img> `tag replacement for React.js, featuring preloader and multiple image fallback support. |  
| react-bootstrap    | great library for grid layouts and mobile responsivness since we will render pictures    |  


