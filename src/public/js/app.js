
alert("LOADED!");

var ReactDOM = require('react-dom');
var React = require('react');



var StarWarsPage = React.createClass({
  render: function() {
    return (
      <div id="blank-page">
        This is a Star Wars Page.
        <List/>
      </div>

function loadStarshipsFromServer () {
    $.ajaxSetup({url: "http://swapi.co/api/starships", success: function(result){
           $("div").html(this.setState({data: response.results}););}});
       $.ajax();
  }

  componentDidMount: function(){
        this.loadStarshipsFromServer(

        ) ;
      },
  getInitialState: function() {
        return {
          data: []
        };
      },

    );
  }
});

ReactDOM.render(
  <StarWarsPage />,
  document.getElementById('blank-page')
);
