import React from "react";
import './MyForm.scss'
import { Button } from 'react-bootstrap';
import laughingMan from '../../../Banners/laughing.jpg'
export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
    <div className="formContainer"   >
     {/* <img className="tmol-banner" src={laughingMan}></img> */}
      <form
        onSubmit={this.submitForm}
        action="https://formspree.io/mrgyqjyp"
        method="POST"
      >
        <label>Name:</label>
        <input type="email" name="text" placeholder="What's your preferred name?" />
        <label>Phone Number:</label>
        <input type="email" name="phone" placeholder="What's the best phone number to reach you?" />
        <label>Email:</label>
        <input type="email" name="email" placeholder="What's the best email to reach you?" />
        <label>Message:</label>
        <input type="text" name="message" placeholder="What would you like to tell the Pastor?" />
        {status === "SUCCESS" ? <p>Thanks!</p> :       <Button className="submit-form-button give-button">
        <a href={'#'}>Submit</a>
      </Button>}
        {status === "ERROR" && <p>Ooops! There was an error.</p>}
      </form>
      </div>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}