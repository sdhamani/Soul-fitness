import "./components.css";

export default function Card({ products }) {
  return (
    <div class="cards card-ecom">
      {products.map((item) => {
        return (
          <div class="card">
            <img class="card-image" alt="NA" src={item.image} />
            <div class="card-content card-content-ecom">
              <div>{item.ratings}</div>
              <h3>{item.name}</h3>
              <p class="card-data card-data">{item.price}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
