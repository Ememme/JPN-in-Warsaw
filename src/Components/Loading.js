import React, {Component} from 'react';
// from ReactBootCamp by T.McGinnis
class Loading extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Loading data from ZOMATO'
    };
  }
  componentDidMount() {
    const stopper = this.state.text + '...';
    this.interval = window.setInterval(() => {
      this.state.text === stopper
        ? this.setState(() => ({ text: 'Loading data from ZOMATO' }))
        : this.setState((prevState) => ({ text: prevState.text + '.' }))
    }, 300)
  }
  componentWillUnmount() {
    window.clearInterval(this.interval);
  }
  render() {

    return (
      // <Header />
      //
      // <Loading />
      <p>{this.state.text}</p>
      // <Footer />
    )

  }
}

export default Loading;
