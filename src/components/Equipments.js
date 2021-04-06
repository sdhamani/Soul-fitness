import React from "react";
import Card from "./Card";
import "./components.css";
import useProducts from "../context/products-context";
import { useState } from "react";
function Equipments() {
  let { filteredArray, dispatch } = useProducts();

  const [mobilesort, setMobilesort] = useState(false);

  filteredArray = filteredArray.filter((item) => item.idealFor === "All");

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
                <label for="Gym">Gym</label>
              </div>
              <div className="actions-types">
                <input
                  type="checkbox"
                  onClick={() =>
                    dispatch({ type: "FILTERCAT", payload: "cardio" })
                  }
                  name="cardio"
                />
                <label for="cardio">Cardio</label>
              </div>
              <div className="actions-types">
                <input
                  type="checkbox"
                  onClick={() =>
                    dispatch({ type: "FILTERCAT", payload: "Aerobics" })
                  }
                  name="Aerobics"
                />
                <label for="Aerobics">Aerobics</label>
              </div>
              <div className="actions-types">
                <input
                  type="checkbox"
                  onClick={() =>
                    dispatch({ type: "FILTERCAT", payload: "Yoga" })
                  }
                  name="Yoga"
                />
                <label for="Yoga">Yoga</label>
              </div>
              <div className="actions-types">
                <input
                  type="checkbox"
                  onClick={() =>
                    dispatch({ type: "FILTERCAT", payload: "Massage" })
                  }
                  name="Massage"
                />
                <label for="Massage">Massage</label>
              </div>
              <div className="actions-types">
                <input
                  type="checkbox"
                  onClick={() =>
                    dispatch({ type: "FILTERCAT", payload: "Zumba" })
                  }
                  name="Zumba"
                />
                <label for="Zumba">Zumba</label>
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
              class="mobile-action-close"
              onClick={(e) => setMobilesort(false)}
            >
              <i class="fa fa-times" aria-hidden="true"></i>
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
                class="mobile-action-close"
                onClick={(e) => setMobilesort(false)}
              >
                <i class="fa fa-times" aria-hidden="true"></i>
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
                <label for="Pants">Pants</label>
              </div>
              <div className="actions-types">
                <input
                  type="checkbox"
                  onClick={() =>
                    dispatch({ type: "FILTERCAT", payload: "Shoes" })
                  }
                  name="Shoes"
                />
                <label for="Shoes">Shoes</label>
              </div>
              <div className="actions-types">
                <input
                  type="checkbox"
                  onClick={() =>
                    dispatch({ type: "FILTERCAT", payload: "T Shirt" })
                  }
                  name="T Shirt"
                />
                <label for="T Shirt">T Shirt</label>
              </div>
              <div className="actions-types">
                <input
                  type="checkbox"
                  onClick={() =>
                    dispatch({ type: "FILTERCAT", payload: "Upper Tights" })
                  }
                  name="Upper Tights"
                />
                <label for="Upper Tights">Upper Tights</label>
              </div>
              <div className="actions-types">
                <input
                  type="checkbox"
                  onClick={() =>
                    dispatch({ type: "FILTERCAT", payload: "Undershirt" })
                  }
                  name="Undershirt"
                />
                <label for="Undershirt">Undershirt</label>
              </div>
              <div className="actions-types">
                <input
                  type="checkbox"
                  onClick={() =>
                    dispatch({ type: "FILTERCAT", payload: "Vest" })
                  }
                  name="Vest"
                />
                <label for="Vest">Vest</label>
              </div>
              <div className="actions-types">
                <input
                  type="checkbox"
                  onClick={() =>
                    dispatch({ type: "FILTERCAT", payload: "Jacket" })
                  }
                  name="Jacket"
                />
                <label for="Jacket">Jacket</label>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="cards-products">
        <Card products={filteredArray} />
      </div>
    </div>
  );
}

export default Equipments;
