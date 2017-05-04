var ReactDOM = require('react-dom');
var React = require('react');


var StarWarsPage = React.createClass({
  render: function() {
    return (
      <div id="blank-page">
        This is a Star Wars Page.
        <List/>
      </div>
    );
  }
});

ReactDOM.render(
  <StarWarsPage />,
  document.getElementById('blank-page')
);
