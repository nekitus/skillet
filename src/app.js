var Photo = require("./Photo");
var react = require("react-dom");



class App {
  constructor(){
    this._a;
    this.b = 2;

    this.c = 3;


  }
  someMethod(){
    console.log(app.a + app.b);
  }



  render(){

//    document.onload = function(){
//    }
    ReactDOM.render(React.createElement(Photo, { name: "John" }), document.getElementByTagName("body"));
  }

  get a(){
    return this._a;
  }
  set a(param){
    this._a = param;
  }
}

var app = new App();
app.a = 1;







module.exports = App;