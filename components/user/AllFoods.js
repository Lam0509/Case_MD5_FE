import React, {useState} from "react";
import Helmet from "../../components/user/shares/Helmet";
import CommonSection from "../../components/user/UI/CommonSection";
import {Col, Container, Row} from "reactstrap";
import ProductCard from "../../components/user/UI/ProductCard";
import stylesAllFoods from '../../styles/user/all-foods.module.css'
import stylesPagination from '../../styles/user/pagination.module.css'
import ReactPaginate from "react-paginate";

const AllFoods = (props) => {
    const [searchItem, setSearchItem] = useState("");
    const [productData, setProductData] = useState(props.data);
    const [pageNumber, setPageNumber] = useState(0);
    const searchedProduct = productData.filter((item) => {
        if (searchItem.value === "") return item;
        if (item.name.toLowerCase().includes(searchItem.toLowerCase())) return item;
    })
    const productPerPage = 12;
    const visitedPage = pageNumber * productPerPage;
    const displayPage = searchedProduct.slice(visitedPage, visitedPage + productPerPage);
    const pageCount = Math.ceil(searchedProduct.length / productPerPage);
    const changePage = ({selected}) => {
        setPageNumber(selected);
    };
    return (<Helmet title="All Foods">
            <CommonSection title="All Foods"/>
            <section>
                <Container style={{marginBottom: '40px'}}>
                    <Row>
                        <Col style={{marginTop:'20px'}} lg="6" md="6" sm="6" xs='12'>
                            <div
                                className={`${stylesAllFoods.search__widget} d-flex align-items-center justify-content-between`}>
                                <input
                                    type="text"
                                    placeholder="I'm looking for..."
                                    value={searchItem}
                                    onChange={(e) => setSearchItem(e.target.value)}
                                />
                                <span>
                  <i className="ri-search-line"></i>
                </span>
                            </div>
                        </Col>
                        <Col style={{marginTop:'20px'}} lg="6" md="6" sm="6" xs='12' className="mb-5">
                            <div className={`${stylesAllFoods.sorting__widget} text-end`}>
                                <select className="w-50">
                                    <option value="">Default</option>
                                    <option value="ascending">A - Z</option>
                                    <option value="descending">Z - A</option>
                                    <option value="high-price">High Price</option>
                                    <option value="low-price">Low Price</option>
                                </select>
                            </div>
                        </Col>

                        {displayPage.map((item) => (<Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mb-4">
                                <ProductCard item={item}/>
                            </Col>))}

                        <div>
                            <ReactPaginate
                                pageCount={pageCount}
                                onPageChange={changePage}
                                previousLabel="Prev"
                                nextLabel="Next"
                                containerClassName={stylesPagination.paginationBtns}
                            />
                        </div>
                    </Row>
                </Container>
            </section>
        </Helmet>);
};
export default AllFoods;