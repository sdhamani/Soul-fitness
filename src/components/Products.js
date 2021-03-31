import "./components.css";
import Nav from "./NavBar";
import Card from "./Card";
import products from "../data/products";
import useProducts from "../context/products-context";

export default function Products() {
  const { filteredArray, dispatch } = useProducts();
  return (
    <div>
      <div class="action-bar">
        <div>
          <label for="action">Sort By: </label>
          <select
            name="LOWTOHIGH"
            id="LOWTOHIGH"
            onChange={(e) => console.log(e)}
          >
            <option value="LOWTOHIGH">Low To High</option>
            <option value="HIGHTOLOW">High to Low</option>
          </select>
        </div>
        <div>
          Sort By :
          <label>
            <input
              type="radio"
              name="sort"
              onClick={() => dispatch({ type: "SORT", payload: "LOWTOHIGH" })}
            />
            Low to High
          </label>
          <label>
            <input
              type="radio"
              name="sort"
              onClick={() => dispatch({ type: "SORT", payload: "HIGHTOLOW" })}
            />
            High to Low
          </label>
        </div>
        <div>
          Filter By:
          <label>
            <input
              type="checkbox"
              onClick={() => dispatch({ type: "FILTER", payload: "OOS" })}
            />
            Show Only Instock
          </label>
          <label>
            <input
              type="checkbox"
              onClick={() => dispatch({ type: "FILTER", payload: "FASTDEL" })}
            />
            Fast Delivery Only
          </label>
        </div>
      </div>

      <Card products={filteredArray} />
    </div>
  );
}
