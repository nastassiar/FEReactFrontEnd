var React = require('react');
var Adal = require('./adal/adal-request');
var Loading = require('./Loading.jsx');
var q = require('q');

var Profile = class MyProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      groups: [],
      profile : {}
    };
  }

  componentDidMount() {
    var component = this;
    component.serverRequest = Adal.adalRequest({
      url: 'https://graph.microsoft.com/v1.0/me',
      headers: {
        'Accept': 'application/json;odata.metadata=full'
      }
    }).then(function(data) {
      component.setState({
        loading: false,
        profile: 
        {
          id: data.id,
          displayName: data.displayName,
        }
      })
    }.bind(component));
  }

  componentWillUnmount() {
    this.serverRequest.abort();
  }

  render(){
    var loading = this.state.loading ? <Loading /> : '';

    return (
      <div>
        {loading}
        <div className="ms-Persona-details">
          <div className="ms-Persona-primaryText" title={this.state.profile.displayName}>{this.state.profile.displayName}</div>
          <div className="ms-Persona-secondaryText" title={this.state.profile.id}><a>{this.state.profile.id}</a></div>
        </div>
      </div>
    );
  }
}

module.exports = Profile;
