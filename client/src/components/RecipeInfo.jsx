import React from 'react';
import Card from 'react-bootstrap/Card';
import Nav from './Nav';

import { createComment } from '../services/comments'
import { fetchComments } from '../services/comments'

class RecipeInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: "",
      isEdit: null,
      editComment: ""
    }
  }
  handleSubmit = async (ev) => {
    ev.preventDefault();
    const newComment = await createComment({ comment: this.state.comment, combo: this.props.currentCombo.id });
    this.props.addNewComment(newComment);
  }

  handleChange = (ev) => {
    const { name, value } = ev.target;
    this.setState({
      [name]: value
    });
  }

  componentDidMount = async () => {
    // this.fetchComments(); 
  }

  render() {

    return (
      <>
        <div id='container'>
          <Card style={{ width: '50%' }}>
            <Card.Img variant="top" src={this.props.currentCombo.meal.strMealThumb} />
            <Card.Body>
              <Card.Title>{this.props.currentCombo.meal.strMeal}</Card.Title>
              <Card.Text>
                {this.props.currentCombo.meal.strInstructions}
              </Card.Text>
              {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
          </Card>


          <Card style={{ width: '50%' }}>
            <Card.Img variant="top" src={this.props.currentCombo.drink.strDrinkThumb} />
            <Card.Body>
              <Card.Title>{this.props.currentCombo.drink.strDrink}</Card.Title>
              <Card.Text>
                {this.props.currentCombo.drink.strInstructions}
              </Card.Text>
              {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
          </Card>
        </div>

        <div>
          <form onSubmit={this.handleSubmit}>
            <input
              name="comment"
              onChange={this.handleChange}
              type="text"
              value={this.state.comment}
            />
            <button>Add Comment</button>
          </form>
          {this.props.currentCombo.comments.map(comment => (
            <>
              {
                this.state.isEdit === comment.id ?
                  <form onSubmit={() => {
                    this.props.putComment(comment.id, this.state.editComment);
                    this.setState({
                      isEdit: null,
                      editComment: ""
                    })
                  }}>
                    <input
                      type="text"
                      name="editComment"
                      value={this.state.editComment}
                      onChange={this.handleChange}
                    />
                    <button>Submit</button>
                  </form>
                  :
                  <>
                    <p>{comment.comment}</p>
                    <button onClick={() => {
                      this.setState({
                        isEdit: comment.id,
                        editComment: comment.comment
                      })
                    }}> Edit </button>
                  </>
              }
            </>
          ))}
        </div>
      </>
    )
  }

}

export default RecipeInfo;




