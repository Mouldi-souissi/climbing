import ShopCard from "../components/ShopCard";
import React, { useEffect, useContext } from "react";
import { ShopContext } from "../contexts/ShopContext";
// import { Link } from "react-router-dom";

const Shop = () => {
  const { items, getItems } = useContext(ShopContext);

  useEffect(() => {
    getItems();
  }, [getItems]);
  return (
    <div className="shop" style={{ paddingTop: "100px" }}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div
              className="grid search  p-4"
              // style={{ borderRadius: "20px" }}
            >
              <div className="grid-body">
                <div className="row">
                  <div className="col-md-3">
                    <h2 className="grid-title">
                      <i className="fa fa-filter"></i> Filters
                    </h2>
                    <hr />
                    <div className="padding"></div>
                    <h4>By date:</h4>
                    From
                    <div
                      className="input-group date form_date"
                      data-date="2014-06-14T05:25:07Z"
                      data-date-format="dd-mm-yyyy"
                      data-link-field="dtp_input1"
                    >
                      <input type="text" className="form-control" />
                      <div className="input-group-append">
                        <span className="input-group-text">
                          <i className="fa fa-th" />
                        </span>
                      </div>
                    </div>
                    <input type="hidden" id="dtp_input1" defaultValue="" />
                    To
                    <div
                      className="input-group date form_date"
                      data-date="2014-06-14T05:25:07Z"
                      data-date-format="dd-mm-yyyy"
                      data-link-field="dtp_input2"
                    >
                      <input type="text" className="form-control" />
                      <div className="input-group-append">
                        <span className="input-group-text">
                          <i className="fa fa-th" />
                        </span>
                      </div>
                    </div>
                    <input type="hidden" id="dtp_input2" defaultValue="" />
                    <div className="padding"></div>
                    <h4 className="mt-3">By price:</h4>
                    Between <div id="price1">$300</div> to{" "}
                    <div id="price2">$800</div>
                    <div className="slider-primary">
                      <div
                        className="slider slider-horizontal"
                        style={{ width: "152px" }}
                      >
                        <div className="slider-track">
                          <div
                            className="slider-selection"
                            style={{ left: "30%", width: "50%" }}
                          ></div>
                          <div
                            className="slider-handle round"
                            style={{ left: "30%" }}
                          ></div>
                          <div
                            className="slider-handle round"
                            style={{ left: "80%" }}
                          ></div>
                        </div>
                        <div
                          className="tooltip top hide"
                          style={{ top: "-30px", left: "50.1px" }}
                        >
                          <div className="tooltip-arrow"></div>
                          <div className="tooltip-inner">300 : 800</div>
                        </div>
                        <form>
                          <input
                            type="range"
                            className="custom-range"
                            id="customRange1"
                          />
                          <input
                            type="range"
                            className="custom-range"
                            id="customRange2"
                          />
                        </form>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-9">
                    <h2>
                      <i className="fa fa-file-o"></i> Result
                    </h2>
                    <hr />

                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        defaultValue="web development"
                      />

                      <div className="input-group-append">
                        <button className="btn btn-primary">
                          <i className="fa fa-search" />
                        </button>
                      </div>
                    </div>

                    <p>Showing all results matching "web development"</p>

                    <div className="padding"></div>

                    <div className="row">
                      <div className="col-sm-6">
                        <div className="btn-group">
                          <button
                            type="button"
                            className="btn btn-default dropdown-toggle"
                            data-toggle="dropdown"
                          >
                            Order by <span className="caret"></span>
                          </button>
                          <ul className="dropdown-menu" role="menu">
                            <li>
                              <a href="/">Name</a>
                            </li>
                            <li>
                              <a href="/">Date</a>
                            </li>
                            <li>
                              <a href="/">View</a>
                            </li>
                            <li>
                              <a href="/">Rating</a>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="col-md-6 text-right">
                        <div className="btn-group">
                          <button
                            type="button"
                            className="btn btn-default active"
                          >
                            <i className="fa fa-list"></i>
                          </button>
                          <button type="button" className="btn btn-default">
                            <i className="fa fa-th"></i>
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="table-responsive">
                      <table className="table table-hover">
                        {items.map((item) => (
                          <ShopCard item={item} key={item._id} />
                        ))}
                      </table>
                    </div>

                    <nav aria-label="Page navigation example">
                      <ul className="pagination justify-content-center">
                        <li className="page-item">
                          <a
                            className="page-link"
                            href="/"
                            aria-label="Previous"
                          >
                            <span aria-hidden="true">&laquo;</span>
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="/">
                            1
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="/">
                            2
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="/">
                            3
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="/" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
