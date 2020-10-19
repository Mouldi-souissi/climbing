import React from "react";

function ShopArticleDetails() {
  return (
    <div
      className="col-sm-12 col-md-12 col-lg-12 bg-light"
      style={{ paddingTop: "70px" }}
    >
      <div className="product-content product-wrap clearfix product-deatil">
        <div className="row">
          <div
            id="carouselExampleIndicators"
            className="carousel slide col-md-5 col-sm-12 col-xs-12"
            data-ride="carousel"
          >
            <ol className="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="0"
                className="active"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="1"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="2"
              ></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="https://via.placeholder.com/700x400/FFB6C1/000000"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://via.placeholder.com/700x400/87CEFA/000000"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://via.placeholder.com/700x400/87CEFA/000000"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
          <div className="col-md-6 col-md-offset-1 col-sm-12 col-xs-12">
            <h2 className="name">
              Product Name Title Here
              <small>
                Product by <a href="/">Adeline</a>
              </small>
              <i className="fa fa-star fa-2x text-primary"></i>
              <i className="fa fa-star fa-2x text-primary"></i>
              <i className="fa fa-star fa-2x text-primary"></i>
              <i className="fa fa-star fa-2x text-primary"></i>
              <i className="fa fa-star fa-2x text-muted"></i>
              <span className="fa fa-2x">
                <h5>(109) Votes</h5>
              </span>
              <a href="/">109 customer reviews</a>
            </h2>
            <hr />
            <h3 className="price-container">
              $129.54
              <small>*includes tax</small>
            </h3>
            <div className="certified">
              <ul>
                <li>
                  <a href="/">
                    Delivery time<span>7 Working Days</span>
                  </a>
                </li>
                <li>
                  <a href="/">
                    Certified<span>Quality Assured</span>
                  </a>
                </li>
              </ul>
            </div>
            <hr />
            <div className="description description-tabs">
              <ul id="myTab" className="nav nav-pills">
                <li className="active">
                  <a
                    href="#more-information"
                    data-toggle="tab"
                    className="no-margin"
                  >
                    Product Description{" "}
                  </a>
                </li>
                <li className="">
                  <a href="#specifications" data-toggle="tab">
                    Specifications
                  </a>
                </li>
                <li className="">
                  <a href="#reviews" data-toggle="tab">
                    Reviews
                  </a>
                </li>
              </ul>
              <div id="myTabContent" className="tab-content">
                <div className="tab-pane fade active in" id="more-information">
                  <br />
                  <strong>Description Title</strong>
                  <p>
                    Integer egestas, orci id condimentum eleifend, nibh nisi
                    pulvinar eros, vitae ornare massa neque ut orci. Nam aliquet
                    lectus sed odio eleifend, at iaculis dolor egestas. Nunc
                    elementum pellentesque augue sodales porta. Etiam aliquet
                    rutrum turpis, feugiat sodales ipsum consectetur nec.
                  </p>
                </div>
                <div className="tab-pane fade" id="specifications">
                  <br />
                  <dl className="">
                    <dt>Gravina</dt>
                    <dd>Etiam porta sem malesuada magna mollis euismod.</dd>
                    <dd>Donec id elit non mi porta gravida at eget metus.</dd>
                    <dd>Eget lacinia odio sem nec elit.</dd>
                    <br />

                    <dt>Test lists</dt>
                    <dd>A description list is perfect for defining terms.</dd>
                    <br />

                    <dt>Altra porta</dt>
                    <dd>Vestibulum id ligula porta felis euismod semper</dd>
                  </dl>
                </div>
                <div className="tab-pane fade" id="reviews">
                  <br />
                  <form
                    method="post"
                    className="well padding-bottom-10"
                    onSubmit={() => console.log("submit")}
                  >
                    <textarea
                      rows="2"
                      className="form-control"
                      placeholder="Write a review"
                    ></textarea>
                    <div className="margin-top-10">
                      <button
                        type="submit"
                        className="btn btn-sm btn-primary pull-right"
                      >
                        Submit Review
                      </button>
                      <a
                        href="/"
                        className="btn btn-link profile-link-btn"
                        rel="tooltip"
                        data-placement="bottom"
                        title=""
                        data-original-title="Add Location"
                      >
                        <i className="fa fa-location-arrow"></i>
                      </a>
                      <a
                        href="/"
                        className="btn btn-link profile-link-btn"
                        rel="tooltip"
                        data-placement="bottom"
                        title=""
                        data-original-title="Add Voice"
                      >
                        <i className="fa fa-microphone"></i>
                      </a>
                      <a
                        href="/"
                        className="btn btn-link profile-link-btn"
                        rel="tooltip"
                        data-placement="bottom"
                        title=""
                        data-original-title="Add Photo"
                      >
                        <i className="fa fa-camera"></i>
                      </a>
                      <a
                        href="/"
                        className="btn btn-link profile-link-btn"
                        rel="tooltip"
                        data-placement="bottom"
                        title=""
                        data-original-title="Add File"
                      >
                        <i className="fa fa-file"></i>
                      </a>
                    </div>
                  </form>

                  <div className="chat-body no-padding profile-message">
                    <ul>
                      <li className="message">
                        <img
                          src="https://bootdey.com/img/Content/avatar/avatar1.png"
                          className="online"
                          alt="pic"
                        />
                        <span className="message-text">
                          <a href="/" className="username">
                            Alisha Molly
                            <span className="badge">Purchase Verified</span>
                            <span className="pull-right">
                              <i className="fa fa-star fa-2x text-primary"></i>
                              <i className="fa fa-star fa-2x text-primary"></i>
                              <i className="fa fa-star fa-2x text-primary"></i>
                              <i className="fa fa-star fa-2x text-primary"></i>
                              <i className="fa fa-star fa-2x text-muted"></i>
                            </span>
                          </a>
                          Can't divide were divide fish forth fish to. Was can't
                          form the, living life grass darkness very image let
                          unto fowl isn't in blessed fill life yielding above
                          all moved
                        </span>
                        <ul className="list-inline font-xs">
                          <li>
                            <a href="/" className="text-info">
                              <i className="fa fa-thumbs-up"></i> This was
                              helpful (22)
                            </a>
                          </li>
                          <li className="pull-right">
                            <small className="text-muted pull-right ultra-light">
                              {" "}
                              Posted 1 year ago{" "}
                            </small>
                          </li>
                        </ul>
                      </li>
                      <li className="message">
                        <img
                          src="https://bootdey.com/img/Content/avatar/avatar2.png"
                          className="online"
                          alt="pic"
                        />
                        <span className="message-text">
                          <a href="/" className="username">
                            Aragon Zarko
                            <span className="badge">Purchase Verified</span>
                            <span className="pull-right">
                              <i className="fa fa-star fa-2x text-primary"></i>
                              <i className="fa fa-star fa-2x text-primary"></i>
                              <i className="fa fa-star fa-2x text-primary"></i>
                              <i className="fa fa-star fa-2x text-primary"></i>
                              <i className="fa fa-star fa-2x text-primary"></i>
                            </span>
                          </a>
                          Excellent product, love it!
                        </span>
                        <ul className="list-inline font-xs">
                          <li>
                            <a href="/" className="text-info">
                              <i className="fa fa-thumbs-up"></i> This was
                              helpful (22)
                            </a>
                          </li>
                          <li className="pull-right">
                            <small className="text-muted pull-right ultra-light">
                              {" "}
                              Posted 1 year ago{" "}
                            </small>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-12 col-md-6 col-lg-6">
                <a href="/" className="btn btn-success btn-lg">
                  Add to cart ($129.54)
                </a>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-6">
                <div className="btn-group pull-right">
                  <button className="btn btn-white btn-default">
                    <i className="fa fa-star"></i> Add to wishlist
                  </button>
                  <button className="btn btn-white btn-default">
                    <i className="fa fa-envelope"></i> Contact Seller
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopArticleDetails;
