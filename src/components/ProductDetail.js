import {useParams} from 'react-router-dom';
import {useState, useEffect} from 'react';


function ProductDetail() {
    const {productID} = useParams();
    const [product, setProduct] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
          try {
            let res = await fetch(`http://localhost:8000/api/products/${productID}`);
            let data = await res.json();
            setProduct(data);
            setIsPending(false);
          } catch (err) {
            setError(err.message);
          }
        }
        fetchData();
      }, []);

      console.log(product)

    return (<h1>Welcome to product page</h1>)
}

export default ProductDetail;