import axios from "axios";
import React, { Component } from "react";

export default class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  getNews = async () => {
    let allData = await axios.get(
      "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=b7c845476e414bd088ff8f62a7b11958"
    );
    console.log(allData.data.articles);
    let data = [...this.state.data];
    data = allData.data.articles;
    this.setState({ data });
  };
  componentDidMount() {
    console.log("Component did mount");
    this.getNews();
  }
  componentDidUpdate() {
    console.log("Component did update");
  }
  componentWillUnmount() {
    console.log("News Component will unmount");
  }
  render() {
    let { data } = this.state;
    return (
        data.length === 0 ? (
            <div className="w-100 vh-100 bg-dark d-flex justify-content-center align-items-center">
              <i className="fa-solid fa-fan text-light fs-1 fw-bold fa-spin"></i>
            </div>
          ) : (
      <div className="container py-5">
        <div className="row">
           {data.map((article, index) => {
              return (
                <div
                  key={index}
                  className="col-lg-3 col-md-4 col-sm-6 text-center">
                  <img
                    className="w-100 img-fluid"
                    src={article.urlToImage}
                    alt="news"/>
                  <h5 className="">{article.title}</h5>
                  <p className="">{article.description}</p>
                </div>
              );
            }) }       
        </div>
      </div>
      )
    );
  }
}
