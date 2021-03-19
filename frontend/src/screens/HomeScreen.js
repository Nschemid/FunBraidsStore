import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { listProducts } from '../actions/productActions'


const HomeScreen = () => {
    const dispatch = useDispatch()
    //const [products, setProducts] = useState([])

    //useSelector: A hook to access the redux store's state. This hook takes a 
    //selector function as an argument. The selector is called with the store state.

    const productList = useSelector(state => state.productList)
    const { loading, error, products } = productList

    useEffect(() => {
        dispatch(listProducts())

        // const fetchProducts = async () => {
        //     const { data } = await axios.get('/api/products')
        //     setProducts(data)
        // }

        // fetchProducts();
    }, [dispatch])

    return (
        <div>
            <h1>Latest Products</h1>
            {loading ? <Loader>Loading...</Loader> : error ? <Message variant='danger'>{error}</Message> : (
                <Row>
                    {products.map(product => (
                        <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                            <Product product={product}></Product>
                        </Col>
                    ))}
                </Row>
            )}

        </div>
    )
}

export default HomeScreen
