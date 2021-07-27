import React from "react";
import Card from "./Card";
import "./components.css";
import useProducts from "../context/products-context";
import { useState, useEffect } from "react";
import CatalogMagic from "../loader/products-loader";
import MobileSkeletonLoader from "../loader/products-mob-loader";

function Equipments() {
  let { filteredArray, dispatch } = useProducts();

  const [mobilesort, setMobilesort] = useState(false);

  filteredArray = filteredArray.filter((item) => item.idealFor === "All");

  useEffect(() => {
    return function cleanup() {
      dispatch({ type: "FILTERCAT", payload: "" });
      dispatch({ type: "FILTER", payload: "" });
    };
  }, [dispatch]);

  return (
    <div className="products-flex">
      <div className="action-bar">
        <div className="actions-div">
          <h4 className="actions-heading">SORT BY</h4>
          <div className="actions-types">
            <input
              type="radio"
              name="sort"
              onClick={() => dispatch({ type: "SORT", payload: "LOWTOHIGH" })}
            />
            <label>Price: Low to High</label>
          </div>
          <div className="actions-types">
            <input
              type="radio"
              name="sort"
              onClick={() => dispatch({ type: "SORT", payload: "HIGHTOLOW" })}
            />
            <label>Price: High to Low</label>
          </div>
        </div>
        <div className="actions-div-desk-filter">
          <div className="actions-div">
            <h4 className="actions-heading">FILTERS</h4>
            <div className="actions-types">
              {" "}
              <input
                type="checkbox"
                onClick={() => dispatch({ type: "FILTER", payload: "OOS" })}
              />
              <label>Show Only Instock</label>
            </div>
            <div className="actions-types">
              {" "}
              <input
                type="checkbox"
                onClick={() => dispatch({ type: "FILTER", payload: "FASTDEL" })}
              />
              <label>Fast Delivery Only</label>
            </div>
          </div>
          <div className="actions-div-brands">
            <h5 className="actions-heading">FILTER BY CATEOGORY</h5>
            <div className="actions-types">
              {" "}
              <div className="actions-types">
                <input
                  type="checkbox"
                  onClick={() =>
                    dispatch({ type: "FILTERCAT", payload: "Gym" })
                  }
                  name="Gym"
                />
                <label htmlFor="Gym">Gym</label>
              </div>
              <div className="actions-types">
                <input
                  type="checkbox"
                  onClick={() =>
                    dispatch({ type: "FILTERCAT", payload: "cardio" })
                  }
                  name="cardio"
                />
                <label htmlFor="cardio">Cardio</label>
              </div>
              <div className="actions-types">
                <input
                  type="checkbox"
                  onClick={() =>
                    dispatch({ type: "FILTERCAT", payload: "Aerobics" })
                  }
                  name="Aerobics"
                />
                <label htmlFor="Aerobics">Aerobics</label>
              </div>
              <div className="actions-types">
                <input
                  type="checkbox"
                  onClick={() =>
                    dispatch({ type: "FILTERCAT", payload: "Yoga" })
                  }
                  name="Yoga"
                />
                <label htmlFor="Yoga">Yoga</label>
              </div>
              <div className="actions-types">
                <input
                  type="checkbox"
                  onClick={() =>
                    dispatch({ type: "FILTERCAT", payload: "Massage" })
                  }
                  name="Massage"
                />
                <label htmlFor="Massage">Massage</label>
              </div>
              <div className="actions-types">
                <input
                  type="checkbox"
                  onClick={() =>
                    dispatch({ type: "FILTERCAT", payload: "Zumba" })
                  }
                  name="Zumba"
                />
                <label htmlFor="Zumba">Zumba</label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mobile-actions">
        <button
          className="mobile-actions-btns"
          onClick={(e) => setMobilesort("sort")}
        >
          SORT
        </button>
        <button
          className="mobile-actions-btns"
          onClick={(e) => setMobilesort("filter")}
        >
          {" "}
          FLITERS
        </button>
      </div>
      {mobilesort === "sort" && (
        <div className="actions-div-sort">
          <h4 className="actions-heading">
            SORT BY
            <button
              className="mobile-action-close"
              onClick={(e) => setMobilesort(false)}
            >
              <i className="fa fa-times" aria-hidden="true"></i>
            </button>
          </h4>
          <div className="actions-types">
            <input
              type="radio"
              name="sort"
              onClick={() => dispatch({ type: "SORT", payload: "LOWTOHIGH" })}
            />
            <label>Price: Low to High</label>
          </div>
          <div className="actions-types">
            <input
              type="radio"
              name="sort"
              onClick={() => dispatch({ type: "SORT", payload: "HIGHTOLOW" })}
            />
            <label>Price: High to Low</label>
          </div>
        </div>
      )}

      {mobilesort === "filter" && (
        <div className="action-div-filter">
          <div>
            <h4 className="actions-heading">
              FILTERS
              <button
                className="mobile-action-close"
                onClick={(e) => setMobilesort(false)}
              >
                <i className="fa fa-times" aria-hidden="true"></i>
              </button>
            </h4>
            <div className="actions-types">
              {" "}
              <input
                type="checkbox"
                onClick={() => dispatch({ type: "FILTER", payload: "OOS" })}
              />
              <label>Show Only Instock</label>
            </div>
            <div className="actions-types">
              {" "}
              <input
                type="checkbox"
                onClick={() => dispatch({ type: "FILTER", payload: "FASTDEL" })}
              />
              <label>Fast Delivery Only</label>
            </div>
          </div>
          <div className="actions-div-brands">
            <h4 className="actions-heading">FILTER BY BRANDS</h4>
            <div className="actions-types">
              {" "}
              <div className="actions-types">
                <input
                  type="checkbox"
                  onClick={() =>
                    dispatch({ type: "FILTERCAT", payload: "Pants" })
                  }
                  name="Pants"
                />
                <label htmlFor="Pants">Pants</label>
              </div>
              <div className="actions-types">
                <input
                  type="checkbox"
                  onClick={() =>
                    dispatch({ type: "FILTERCAT", payload: "Shoes" })
                  }
                  name="Shoes"
                />
                <label htmlFor="Shoes">Shoes</label>
              </div>
              <div className="actions-types">
                <input
                  type="checkbox"
                  onClick={() =>
                    dispatch({ type: "FILTERCAT", payload: "T Shirt" })
                  }
                  name="T Shirt"
                />
                <label htmlFor="T Shirt">T Shirt</label>
              </div>
              <div className="actions-types">
                <input
                  type="checkbox"
                  onClick={() =>
                    dispatch({ type: "FILTERCAT", payload: "Upper Tights" })
                  }
                  name="Upper Tights"
                />
                <label htmlFor="Upper Tights">Upper Tights</label>
              </div>
              <div className="actions-types">
                <input
                  type="checkbox"
                  onClick={() =>
                    dispatch({ type: "FILTERCAT", payload: "Undershirt" })
                  }
                  name="Undershirt"
                />
                <label htmlFor="Undershirt">Undershirt</label>
              </div>
              <div className="actions-types">
                <input
                  type="checkbox"
                  onClick={() =>
                    dispatch({ type: "FILTERCAT", payload: "Vest" })
                  }
                  name="Vest"
                />
                <label htmlFor="Vest">Vest</label>
              </div>
              <div className="actions-types">
                <input
                  type="checkbox"
                  onClick={() =>
                    dispatch({ type: "FILTERCAT", payload: "Jacket" })
                  }
                  name="Jacket"
                />
                <label htmlFor="Jacket">Jacket</label>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="cards-products">
        {filteredArray.length > 0 ? (
          <Card products={filteredArray} />
        ) : (
          <>
            <div className="desktop-skeleton">
              <CatalogMagic />
            </div>
            <div className="mobile-skeleton">
              <MobileSkeletonLoader />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Equipments;
