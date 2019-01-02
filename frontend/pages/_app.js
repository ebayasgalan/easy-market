import App, { Container } from "next/app";

class MyApp extends App {
  render() {
    const { Component } = this.props;

    return (
      <Container>
        <p>Hey this is app component</p>
        <Component />
      </Container>
    );
  }
}

export default MyApp;
