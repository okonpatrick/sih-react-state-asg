import { Component } from "react";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import CardButton from "./Button-Increment";
export default class WelcomeCard extends Component {
  render() {
    return (
      <div className="card-div">
        <Card>
          <Card.Body>
            <Card.Title> <h3>Increment Using React State with Class Component </h3> </Card.Title>
            <Card.Text><p>
            This project uses React state (with Class Component) to increment counts.
             If the button is clicked up to two times, 
             Cart Item changes to Cart Items and the Page Title as well updates.
              </p>
            </Card.Text>

             <CardButton/>

          </Card.Body>
        </Card>
      </div>
    );
  }
}
