import React, {useState} from 'react';
import "../styles/details.css";
import Header from "./Header";
import Newsletter from "./Newsletter";
import Footer from "./Footer";
import Product_8_1 from "../images/product-8-1.jpg"
import Product_8_2 from "../images/product-8-2.jpg"

const Details = () => {

    const [mainImgSrc, setMainImgSrc] = useState(Product_8_1);
    const smallImgSrcs = [Product_8_2, Product_8_1, Product_8_2];

    return (
        <div className="App">
            <Header/>
            <section className="breadcrumb">
                <ul className="breadcrumb__list flex container">
                    <li><a href="#" className="breadcrumb__link"> Kezdőlap </a></li>
                    <li><span className="breadcrumb__link"> > </span></li>
                    <li><span className="breadcrumb__link"> Divat </span></li>
                    <li><span className="breadcrumb__link"> > </span></li>
                    <li><span className="breadcrumb__link"> Henley póló </span></li>
                </ul>
            </section>

            <section className="details section--lg">
                <div className="details__container container grid">
                    <div className="details__group">
                        <img src={mainImgSrc} alt="product_8_1" className="details__img"/>

                        <div className="details__small-images grid">
                            {smallImgSrcs.map((src) => (
                                <img
                                    alt="small__img"
                                    key={src}
                                    className="details__small-img"
                                    src={src}
                                    onClick={() => setMainImgSrc(src)}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="details__group">
                        <h3 className="details__title"> Henley póló </h3>
                        <p className="details__brand"> Márka: <span> Adidas </span> </p>

                        <div className="details__price flex">
                            <span className="new__price">22 000 Ft.</span>
                            <span className="old__price">24 699 Ft.</span>
                            <span className="save__price">15% akció</span>
                        </div>

                        <p className="short__description">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet aperiam consequuntur deleniti
                            dolore doloribus enim esse eveniet illum in iusto molestias nemo nobis nulla officia pariatur, quis repudiandae voluptatum?
                        </p>

                        <ul className="product__list">
                            <li className="list__item flex">
                                <i className="fi fi-rs-crown"></i> 1 év garancia
                            </li>

                            <li className="list__item flex">
                                <i className="fi fi-rs-refresh"></i> 30 napos visszaküldési lehetőség
                            </li>

                            <li className="list__item flex">
                                <i className="fi fi-rs-credit-card"></i> Elérhető utánvétel
                            </li>
                        </ul>

                        <div className="details__color flex">
                            <span className="details__color-title">Szín</span>

                            <ul className="color__list">
                                <li>
                                    <a href="#" className="color__link" style={{backgroundColor:"hsl(37,100%,65%)"}}></a>
                                </li>

                                <li>
                                    <a href="#" className="color__link" style={{backgroundColor:"hsl(353,100%,67%)"}}></a>
                                </li>

                                <li>
                                    <a href="#" className="color__link" style={{backgroundColor:"hsl(49,100%,60%)"}}></a>
                                </li>

                                <li>
                                    <a href="#" className="color__link" style={{backgroundColor:"hsl(304,100%,78%)"}}></a>
                                </li>

                                <li>
                                    <a href="#" className="color__link" style={{backgroundColor:"hsl(126,61%,52%)"}}></a>
                                </li>
                            </ul>
                        </div>

                        <div className="details__size flex">
                            <span className="details__size-title">Méret</span>

                            <ul className="size__list">
                                <li>
                                    <a href="#" className="size__link size-active">S</a>
                                </li>

                                <li>
                                    <a href="#" className="size__link">M</a>
                                </li>

                                <li>
                                    <a href="#" className="size__link">L</a>
                                </li>

                                <li>
                                    <a href="#" className="size__link">XL</a>
                                </li>

                                <li>
                                    <a href="#" className="size__link">XXL</a>
                                </li>
                            </ul>
                        </div>

                        <div className="details__action">
                            <input type="number" className="quantity" defaultValue="1"/>

                            <a href="#" className="btn btn--sm"> Kosárhoz adás </a>

                            <a href="#" className="details__action-btn">
                                <i className="fi fi-rs-heart"></i>
                            </a>
                        </div>

                        <ul className="details__meta">
                            <li className="meta__list flex"> <span>SKU:</span> FWM15VKT </li>
                            <li className="meta__list flex"> <span>Címke:</span> Szövet, Nő, Ruházat</li>
                            <li className="meta__list flex"> <span>Elérhetőség:</span> 8 termék van raktáron</li>
                        </ul>
                    </div>
                </div>
            </section>
            <Newsletter/>
            <Footer/>
        </div>
    );
};

export default Details;