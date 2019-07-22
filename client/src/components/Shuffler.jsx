import React from 'react';

export default class Shuffler extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      meal: '',
      drink: '',
      mealImage: '',
      drinkImage: ''
    }
  }


  render() {
    return (
      <div className="shuffler">
        <p></p>
      </div>
    )
  }
}