import { Component } from 'react';
import './App.css';
import ImageLinkForm from './components/form/ImageLinkForm';
import Navigation from './components/navigation/Navigation';
import FaceRecognition from './components/display_image/FaceRecognition';
import ParticlesBg from 'particles-bg';
import Register from './components/authentication/Register';
import Login from './components/authentication/Login';

class App extends Component {
  constructor() {
    super()
    this.state = {
      input: '',
      image_url: '',
      box: [],
      route: 'register',
    }
  }

  calculateFaceLocation = (data) => {
    const facePosition = data.outputs[0].data.regions[0].region_info.bounding_box
    const image = document.getElementById("image")
    const width = +image.width
    const height = +image.height
    return {
      leftCol: facePosition.left_col * width,
      topRow: facePosition.top_row * height,
      rightCol: width - (facePosition.right_col * width),
      bottomRow: height - (facePosition.bottom_row * height),
    }
  }

  displayBoundingBox = (box) => {
    this.setState({ box })
  }

  onInputChange = (e) => {
    this.setState({ input: e.target.value })
  }

  onSubmit = () => {
    this.setState({ image_url: this.state.input })
    fetch("http://localhost:5000/detect", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        image: this.state.input
      })
    })
      .then(response => response.json())
      .then(result => this.displayBoundingBox(this.calculateFaceLocation(result)))
      .catch(error => console.log('error', error));
  }

  onRouteChange = (route) => {
    this.setState({ route })
  }
  render() {
    return (
      <div className="App">
        <ParticlesBg num={200} type="thick" bg={true} />
        <Navigation routeName={this.state.route} onRouteChange={this.onRouteChange} />
        {
          this.state.route === 'home'
            ?
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onSubmit} />
              <FaceRecognition imageUrl={this.state.image_url} boundingBox={this.state.box} />
            </div>
            :
            (
              this.state.route === 'register'
                ?
                <Register onRouteChange={this.onRouteChange} />
                :
                <Login onRouteChange={this.onRouteChange} />
            )
        }
      </div>
    );
  }
}

export default App;
