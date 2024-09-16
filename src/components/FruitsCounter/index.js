import {Component} from 'react';
import './index.css';

class FruitsCounter extends Component {
  state = {mangoes: 0, bananas: 0};

  onIncrementMango = () => {
    this.setState(prevState => ({mangoes: prevState.mangoes + 1}));
  };

  onIncrementBanana = () => {
    this.setState(prevState => ({bananas: prevState.bananas + 1}));
  };

  render() {
    const {mangoes, bananas} = this.state;

    return (
      <div className="container">
        <h1 className="heading">
          Bob ate <span className="count">{mangoes}</span> mangoes{' '}
          <span className="count">{bananas}</span> bananas
        </h1>
        <div className="fruit-wrapper">
          <div className="fruit-item">
            <img
              src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
              alt="mango"
              className="fruit-image"
            />
            <button className="button" onClick={this.onIncrementMango}>
              Eat Mango
            </button>
          </div>
          <div className="fruit-item">
            <img
              src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
              alt="banana"
              className="fruit-image"
            />
            <button className="button" onClick={this.onIncrementBanana}>
              Eat Banana
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default FruitsCounter;
