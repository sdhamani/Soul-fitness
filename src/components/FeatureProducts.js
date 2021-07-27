import "./components.css";

export default function FeatureProducts({ products }) {
  return (
    <div className="cards cards-ecom">
      {products.map((item) => {
        return (
          <div className="card  card-ecom" key={item._id}>
            <img
              className="card-image text-overlay-image card-image-ecom"
              alt="NA"
              src={item.image}
            />
            <div className="card-content card-content-ecom">
              <div>{item.ratings}</div>
              <h4>{item.name}</h4>
              <p className="card-data card-data">${item.price}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
