var ReactDOM = require('react-dom');
var React = require('react');

var Photo = React.createClass({displayName: "Photo",

   render: function(){
        return(
           React.createElement("div", null, 
             React.createElement("h2", null, "This works fine ")
          )
        )
       }
});

ReactDOM.render(React.createElement(Photo, {imageURL: "http:tinyurl.comlkevsb9", caption: "New York!"}), document.getElementById("some"));