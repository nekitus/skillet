var ReactDOM = require('react-dom');
var React = require('react');

var Photo = React.createClass({

   render: function(){
        return(
           <div>
             <h2>This works fine </h2>
          </div>
        )
       }
});

ReactDOM.render(<Photo imageURL='http:tinyurl.comlkevsb9' caption='New York!' />, document.getElementById("some"));