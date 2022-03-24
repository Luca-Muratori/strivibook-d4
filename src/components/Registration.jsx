import { Component } from "react";
import { Form, Container, Button } from "react-bootstrap";

class Registration extends Component {
  state = {
    registration: {
      name: "",
      surname: "",
      email: "",
      password: "",
      confirmPass: "",
    },
    isComplete: false,
  };

  handleInput = (key, value) => {
    this.setState({
      registration: {
        ...this.state.registration,
        [key]: value,
      },
    });
  };

  minRequirement = () => {
    let registrationComplete = false;
    if (
      //minLength
      this.state.registration.name.length >= 2 &&
      this.state.registration.surname.length >= 3 &&
      this.state.registration.password.length >= 8 &&
      this.state.registration.password.match(
        /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/
        //pattern
      ) &&
      this.state.registration.password == this.state.registration.confirmPass
    ) {
      registrationComplete = true;
    }
    return registrationComplete;
  };

  handleRegistration = (e) => {
    e.preventDefault();
    this.setState({
      isComplete: true,
    });
  };

  render() {
    return (
      <div>
        {this.state.isComplete ? (
          <div style={{ color: "black", backgroundColor: "white" }}>
            <h4>Registration Complete</h4>
            <div>This is your infos:</div>
            <div className="d-flex flex-column align-items-start">
              <div>name: {this.state.registration.name}</div>
              <div>surname: {this.state.registration.surname}</div>
              <div>email: {this.state.registration.email}</div>
            </div>
          </div>
        ) : (
          <Container>
            <div> Insert your data:</div>
            <Form onSubmit={this.handleRegistration}>
              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  required
                  value={this.state.registration.name}
                  type="text"
                  onChange={(e) => this.handleInput("name", e.target.value)}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>surname</Form.Label>
                <Form.Control
                  required
                  value={this.state.registration.surname}
                  type="text"
                  onChange={(e) => this.handleInput("surname", e.target.value)}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>email</Form.Label>
                <Form.Control
                  required
                  value={this.state.registration.email}
                  type="email"
                  onChange={(e) => this.handleInput("email", e.target.value)}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  required
                  value={this.state.registration.password}
                  type="password"
                  onChange={(e) => this.handleInput("password", e.target.value)}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  required
                  value={this.state.registration.confirmPass}
                  type="password"
                  onChange={(e) =>
                    this.handleInput("confirmPass", e.target.value)
                  }
                />
              </Form.Group>
              <Button type={"submit"} disabled={this.minRequirement()}>
                {/* useNavigate only on function component */}
                Send the data
              </Button>
            </Form>
          </Container>
        )}
      </div>
    );
  }
}

export default Registration;
