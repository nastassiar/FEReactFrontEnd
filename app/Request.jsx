var React = require('react');
var Adal = require('./adal/adal-request');
var Loading = require('./Loading.jsx');
var q = require('q');

var APIRequest =  class Request extends React.Component{
    constructor(props){
        super(props);
        //this.handleAPIRequest = this.handleAPIRequest().bind(this);
        this.state = {
            showResponse : false,
            response : false,
            error : false
        }
    }
    
    componentDidMount() {
        //this.handleAPIRequest();
        /*
    var component = this;
    component.serverRequest = Adal.apiRequest({
      url: 'https://feapimanagementservice.azure-api.net/permissions/access',
      adalurl: 'https://graph.microsoft.com/v1.0/me',
      headers: {
        'Accept': 'application/json;odata.metadata=full'
      }
    }).then(function(data) {
        res = false
        if (data.Response == false || data.Response == 'false')
        {
            res = true
        }
        
        component.setState({
        showResponse: true,
        response : res,
        r : data.Response
    })
}.bind(component));*/
}

componentWillUnmount() {
    //this.serverRequest.abort();
}

handleAPIRequest()
{
    Adal.apiRequest({
      url: 'https://feapimanagement.azure-api.net/permissions/access',
      method : 'GET',
      adalurl: 'https://graph.microsoft.com/v1.0/me',
      headers: {
        'Accept': 'application/json;odata.metadata=full'
      }
    }).then(function(data) {
        res = false
        if (data.Response == true || data.Response == 'true')
        {
            res = true
        }
        
        this.setState({
        showResponse: true,
        response : res,
        error : false
    })
}.bind(this))
.catch(function()
{
    this.setState({
        showResponse: false,
        response : false,
        error : true
}
)
});
}

render() {
    const showResponse = this.state.showResponse;
    const response = this.state.response;
    return (
        <div>
        {showResponse ? 
        (
            response ? 
                <a>You have access to this application </a> :
                <a>You do not have access to this application </a>
        ) : 
        (
        <button onClick={this.handleAPIRequest.bind(this)}>
            Do you have access? 
        </button>
        )}
        {this.state.error && <div>Error Message</div>}
        </div>
    );
    }
}

module.exports = APIRequest;