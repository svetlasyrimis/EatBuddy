import React from 'react';
import { createComment } from '../services/comments'
import { fetchComments } from '../services/comments'

class RecipeInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: ""
    }
  }

  handleSubmit = async (ev) => {
    ev.preventDefault();
    const newComment = await createComment({ comment: this.state.comment, combo: this.props.currentCombo.id });
    this.props.addNewComment(newComment);
  }

  handleChange = (ev) => {
    const { value } = ev.target;
    this.setState({
      comment: value
    });
  }

  componentDidMount = async () => {
    // this.fetchComments(); 
  }

  render() {
    console.log(this.state.formdata)
    return (
      <>
        {this.props.currentCombo && (
          <>
            <div>
              <h1>Meal Recipe Info</h1>
              <p>{this.props.currentCombo.meal.strMeal}</p>
              <p>{this.props.currentCombo.meal.strInstructions}</p>
              <img src={this.props.currentCombo.meal.strMealThumb} />
            </div>
            <div>
              <h1>Drink Recipe Info</h1>
              <p>{this.props.currentCombo.drink.strDrink}</p>
              <p>{this.props.currentCombo.drink.strInstructions}</p>
              <img src={this.props.currentCombo.drink.strDrinkThumb} />

            </div>

            <div>
              <form onSubmit={this.handleSubmit}>
                <input
                  onChange={this.handleChange}
                  type="text" />
                <button>Add Comment</button>
              </form>
              {this.props.currentCombo.comments.map(comment => (
                <p>{comment.comment}</p>
              ))}
            </div>
          </>
        )}
      </>
    )
  }
}
export default RecipeInfo;
