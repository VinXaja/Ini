import React, { Fragment } from "react";
import Catalog from '../component/Catalog';

class Main extends React.Component {
  render() {
    return (
      <Fragment>
        <div>
          <section className="row">
            <div className="col-12">
              <input
                className="form-control from-control-lg"
                type="text"
                placeholder="Search"
                id="keyword"
                name="search"
              />
            </div>
            <div className="col-12 mt-3">
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  id="filter_name"
                  name="filter"
                  defaultChecked
                />
                <label className="form-checkl-label" htmlFor="filter_name">
                    Title
                </label>
              </div>
            </div>
          </section>
        </div>
        <Catalog />
      </Fragment>
    );
  }
}

export default Main;
