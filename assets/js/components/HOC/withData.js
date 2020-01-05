import * as React from 'react';

export function withData(
  WrappedComponent,
  fetchData
) {
  return class extends React.Component {
      state = {
          fetchedData: [],
          isLoading: true,
      };

      componentDidMount() {
          this.fetchData();
      }

      fetchData = () => {
          this.setState(
              {isLoading: true, fetchedData: []},
              () =>
                  fetchData(this.props.match.url)
                      .then(
                          this.onFetchSuccess,
                          this.onFetchFailure
                      )
          );
      };

      onFetchSuccess = ({data}) => {
          const fetchedData = (data || []);

          console.log(fetchedData);

          this.setState({fetchedData, isLoading: false});
      };

      onFetchFailure = () => {
          this.setState({
              isLoading: false,
          });
      };

      render() {
          return <WrappedComponent
              {...this.props}
              data={this.state.fetchedData}
          />
      }
  }
}
