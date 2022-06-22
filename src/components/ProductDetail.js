import { useParams } from "react-router-dom";
import useFetch from "../hooks/hooks";
import {useNavigate} from 'react-router-dom';

function ProductDetail() {
  const { productID } = useParams();
  const navigate = useNavigate();
  const { data:product, isPending, error } = useFetch(
    `http://localhost:8000/api/products/${productID}`
  );

  console.log(product);
  const goToHome = () => {
      navigate('/')
  }

  return (
      <div>
          <h1>Welcome to Product Page</h1>
          <button onClick={goToHome}>Back to home page</button>
      </div>
  );
}

export default ProductDetail;
