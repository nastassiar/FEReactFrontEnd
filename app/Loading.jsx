var React = require('react');

var Loading = class Load extends React.Component{
  render(){
    return (
      <div className="spinner">
        <img src={'images/ajax-loader.gif'} /> <span className="ms-font-s-plus">Loading...</span>
      </div>
    );
  }
}

module.exports = Loading;