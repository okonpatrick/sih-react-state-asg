import { Component } from 'react';
import Button from 'react-bootstrap/Button';
import "bootstrap/dist/css/bootstrap.min.css";

// Button component
class CardButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleButtonClick = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
    document.title = `Cart ${this.state.count <= 1 && this.state.count < 2 ? 'Item' : 'Items'}: ${this.state.count + 1}`;
  };

  render() {
    return (
      <div>
      <h2>{`Cart ${this.state.count <= 1 ? "Item" : "Items"}: ${
          this.state.count
        }`}</h2>
      <h3>Click the button To Change State</h3>
        <Button variant="danger"onClick={this.handleButtonClick}>
         {`Cart ${this.state.count <= 1 ? 'Item' : 'Items'}: ${this.state.count}`}</Button>
      </div>
    );
  }
}
export default CardButton;
