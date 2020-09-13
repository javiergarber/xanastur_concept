import * as React from "react";
import { Component } from "react";
export default class MyGallery extends Component {
  render() {
    return <p>Hola</p>;
    //   const photos=this.readPhotos();
    // const photos = [
    //   {
    //     src: "http://example.com/example/img1.jpg",
    //     width: 1,
    //     height: 1,
    //   },
    //   {
    //     src: "http://example.com/example/img2.jpg",
    //     width: 1,
    //     height: 1,
    //   },
    // ];
    // return <Gallery photos={photos} />;
  }
  readPhotos() {
    throw new Error("Method not implemented.");
  }
}
