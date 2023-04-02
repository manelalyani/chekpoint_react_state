import './App.css';
import React from "react";


class App extends React.Component {
  state = {
    Person: {
      fullName: "Alyani Manel",
      bio: "No bio available",
      imgSrc:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM5i7Drdqg5uZ38gICR6hl9o9sssFMvdLSlkiaWRGAyUhT8SUFeKQj8--GZIGXSk6pPDU&usqp=CAU",
      profession: "developpeur web",
    },
    show: true,counter:0
 
  };

  handleShowPerson = () => {
    this.setState({
      ...this.state,
      show: !this.state.show
    });
  };
  componentDidMount() {
    setInterval(
      
      () => {
        this.setState({
          ...this.setState,
          counter: this.state.counter +1
      
          })
        },
      1000
    );
  }
  
  render() {
    return (
      <>
        {this.state.show && (
          <>
            <h1>{this.state.Person.fullName}</h1>
            <h1>{this.state.Person.bio}</h1>
            <img src={this.state.Person.imgSrc} alt=""></img>
            <h1>{this.state.Person.profession}</h1>
            <br></br>
          </>
        )}
{!this.state.show && (
   <>
   <h1>{this.state.counter}</h1>
   </>
)
}
        <button onClick={this.handleShowPerson}>click here</button>
      </>
    );
  }
}

export default App;
