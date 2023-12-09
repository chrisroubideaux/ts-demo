// card component
import Link from "next/link";

type Products = {
  products: {
    name: string;
    _id: number;
   
   
  };
}

const Cards = ({ products }: Products) => {
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{products.name}</h5>
        
          
          <Link className="card-link" href={`/products/${products._id}`}>
            Go somewhere
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cards;
