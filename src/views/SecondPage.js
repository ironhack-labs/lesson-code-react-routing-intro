import React from 'react';

const users = [
  { name: 'jose', age: 26, location: 'lisbon' },
  { name: 'santi', age: 25, location: 'buenos aires' },
  { name: 'becca', age: 25, location: 'london' }
];

class SecondPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(previousProps, previousState) {
    const userChanged = previousProps.match.params.name !== this.props.match.params.name;
    if (userChanged) {
      this.fetchData();
    }
  }

  fetchData() {
    const { name } = this.props.match.params;
    const user = users.find(user => user.name === name);
    this.setState({
      user
    });
  }

  render() {
    const { user } = this.state;

    return (
      (user && (
        <div>
          <p>
            This is the second page for user with name {user.name}, age {user.age} and location {user.location}.
          </p>
        </div>
      )) ||
      ''
    );
  }
}

export default SecondPage;
