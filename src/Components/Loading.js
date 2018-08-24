import React from 'react';
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
    <div className="loader">
      <p>{this.state.text}</p>
      <div className="sk-double-bounce">
        <div className="sk-child sk-double-bounce1"></div>
        <div className="sk-child sk-double-bounce2"></div>
      </div>
    </div>
      // <Footer />
    )

  }
}

export default Loading;
