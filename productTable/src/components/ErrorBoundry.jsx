import { Component } from "react";

class ErrorBoundry extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }
  componentDidCatch(error) {
    this.setState({ error });
  }
  render() {
    if (this.state.error) {
      return this.props.fallback  || <h4 style={{textAlign:'center'}}>Error Ocuured - {this.state.error.message} </h4>;
    }
    return this.props.children;
  }
}

export default ErrorBoundry;
