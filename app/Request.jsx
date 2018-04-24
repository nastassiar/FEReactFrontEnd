var React = require('react');
var Adal = require('./adal/adal-request');
var Loading = require('./Loading.jsx');
var q = require('q');

var APIRequest =  class Request extends React.Component{
    constructor(props){
        super(props);
        //this.handleAPIRequest = this.handleAPIRequest().bind(this);
        this.state = {
            showButton : true,
            response : false,
            error : false
        }
    }
    
    componentDidMount() {
        this.handleAPIRequest()
        /*
    var component = this;
    component.serverRequest = Adal.apiRequest({
      url: 'https://feapimanagement.azure-api.net/permissions/access',
      adalurl: 'https://graph.microsoft.com/v1.0/me',
      headers: {
        'Accept': 'application/json;odata.metadata=full'
      }
    }).then(function(data) {
        var res = true
        
        component.setState({
            showButton: false,
            response : res,
            error : false
    })
}.bind(component));*/
}

componentWillUnmount() {
   // this.serverRequest.abort();
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
        var res = false
        if (data.Response == true || data.Response == 'true' || data.Response == "true")
        {
            res = true
        }
        
        this.setState({
        showButton: true,
        response : res,
        error : false
    })
}.bind(this))
.catch(function()
{
    this.setState({
        showButton: true,
        response : false,
        error : true
}
)
});
}

render() {
    const showButton = this.state.showButton
    const response = this.state.response;
    const error = this.state.error;
    return (
        <div>
        {
            showButton ? 
                <button onClick={this.handleAPIRequest.bind(this)}>
                    Do you have access to the app? 
                </button> :
                <div></div>
        }
        <br/>
        {
            response ? 
            <div>
            <div className="ms-Persona-primaryTextt"><a>Yes! You have access to this application :) </a></div>
            </div>
            :
            <div>
            <div className="ms-Persona-primaryText"><a>No! You do not have access to this application :( </a></div>
            </div>
        }
        <br/>
        {
            this.state.error ?
            <div>
            <div className="ms-Persona-primaryText"><a>An Error has occurred! </a></div>
            </div>
            :
            <div></div>
        }
        </div>
    );
    }
}

module.exports = APIRequest;