var React = require('react');
var Adal = require('./adal/adal-request');
var Loading = require('./Loading.jsx');
var q = require('q');

var APIRequest =  class Request extends React.Component{
    constructor(props){
        super(props);
        this.handleAPIRequest = this.handleAPIRequest.bind(this);
        this.state = {
            showResponse : false,
            response : false
        }
    }
/*
    makeRequest = (city) => {
        MyApi.getWeather(city)
            .then(function (res) {
                this.setState(function () {
                    return{
                        weather:res
                    }
                })
            }.bind(this));
    }*/

    componentDidMount(){
       // this.makeRequest(this.state.city)
    }
/*
    setCity = (mycity) =>{
        this.setState(function () {
            return{
                city:mycity
            }
        })
    }*/

    handleAPIRequest()
    {
        this.setState({showResponse: true, response: true});
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
            <button onClick={this.handleAPIRequest}>
                Do you have access? 
            </button>
            )}
          </div>
        );
      }
}

module.exports = APIRequest;