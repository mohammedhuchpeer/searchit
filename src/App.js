import React, { Component } from "react";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import ImageList from "./components/listitems/ImageList";
import axios from "axios";

class App extends Component {
  state = {
    photos: [],
    showModal: false
  };

  handleOpenModal = () => {
    console.log("clicked");
    this.setState({ showModal: true });
  };

  handleCloseModal = () => {
    this.setState({ showModal: false });
  };

  onSearchSubmit = async term => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorization: `Client-ID 2nyg57FS_6kuE6vNZeiA_gNCUDjg1HcFzbEpe0s6iSQ`
      }
    });
    console.log(response.data.results);
    this.setState({ photos: response.data.results });
  };

  render() {
    return (
      <React.Fragment>
        <Header userSubmit={this.onSearchSubmit} />
        <ImageList
          images={this.state.photos}
          showModal={this.state.showModal}
          onOpenModal={this.handleOpenModal}
          onCloseModal={this.handleCloseModal}
        />
        <Footer />
      </React.Fragment>
    );
  }
}
export default App;
