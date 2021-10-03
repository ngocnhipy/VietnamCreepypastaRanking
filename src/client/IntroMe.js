import React, { Component } from 'react';

export default class IntroMe extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loadingBarProgress: 0
    };
  }

  componentWillMount() {
    this.add(35);
  }

  componentDidMount() {
    this.complete();
  }

  componentWillUnmount() {
    this.add(30);
  }

      add = (value) => {
        const { loadingBarProgress } = this.state;

        this.setState({
          loadingBarProgress: loadingBarProgress + value
        });
      };

      set = (value) => {
        this.setState({
          loadingBarProgress: value
        });
      };

      complete = () => {
        this.setState({ loadingBarProgress: 100 });
      };

      onLoaderFinished = () => {
        this.setState({ loadingBarProgress: 0 });
      };

      render() {
        const { loadingBarProgress } = this.state;

        return (
          <div id="loading" style={loadingBarProgress === 100 && 'display: none;'}>
            <div id="loading-center">
              <img src="loader.gif" alt="loder" />
            </div>
          </div>
        );
      }
}
