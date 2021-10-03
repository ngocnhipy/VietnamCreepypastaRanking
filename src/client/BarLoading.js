import React, { Component } from 'react';
import LoadingBar from 'react-top-loading-bar';

export default class BarLoading extends Component {
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
    this.setState({
      loadingBarProgress: 0
    });
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
          <LoadingBar
            progress={loadingBarProgress}
            height={3}
            color="#7c60d5"
            onLoaderFinished={() => this.onLoaderFinished()}
          />
        );
      }
}
