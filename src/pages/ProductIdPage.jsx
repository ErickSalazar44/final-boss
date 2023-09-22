import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useEffect } from "react";
import ProductInf from "../components/Product_id/ProductInf";
import SilimartProducts from "../components/Product_id/SilimartProducts";
import "../components/Product_id/style/productBody.css";
import SliderImgs from "../components/Product_id/SliderImgs";
import Loading from '../components/Loading/Loading'

const ProductIdPage = () => {
    const { id } = useParams();
    const baseUrl = "https://e-commerce-api-v2.academlo.tech/api/v1";
    const [product, getProductById, ,loading] = useFetch(baseUrl);

    useEffect(() => {
        getProductById(`/products/${id}`);
    }, [id]);

    if (loading) {
        return <Loading/>
    }

    return (
        <div className='productBody'>
            <div className='productBody__section--product'>
                <SliderImgs product={product} />
                <ProductInf product={product} />
            </div>
            <SilimartProducts product={product} />
        </div>
    );
};

export default ProductIdPage;
