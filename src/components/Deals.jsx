import React from 'react';
import "../styles/deals.css"

const Deals = () => {
    return (
        <section className="deals section">
            <div className="deals__container container grid">
                <div className="deals__item">
                    <div className="deals__group">
                        <h3 className="deals__brand"> A nap ajánlata </h3>
                        <span className="deals__category"> Korlátozott mennyiségben </span>
                    </div>

                    <h4 className="deals__title">Nyári kollekció új, modern tervezés</h4>

                    <div className="deals__price flex">
                        <span className="new__price">14 699 Ft.</span>
                        <span className="old__price">18 000 Ft.</span>
                    </div>

                    <div className="deals__group">
                        <p className="deals__countdown-text"> Siessen! Az ajánlat vége: </p>

                        <div className="countdown">
                            <div className="countdown__amount">
                                <p className="countdown__period">2</p>
                                <span className="unit"> Nap </span>
                            </div>

                            <div className="countdown__amount">
                                <p className="countdown__period">22</p>
                                <span className="unit"> Óra </span>
                            </div>

                            <div className="countdown__amount">
                                <p className="countdown__period">57</p>
                                <span className="unit"> Perc </span>
                            </div>

                            <div className="countdown__amount">
                                <p className="countdown__period">24</p>
                                <span className="unit"> Másodperc </span>
                            </div>
                        </div>
                    </div>

                    <div className="deals--btn">
                        <a href="#" className="btn btn--md"> Vásárlás </a>
                    </div>
                </div>

                <div className="deals__item">
                    <div className="deals__group">
                        <h3 className="deals__brand"> Női Ruházat </h3>
                        <span className="deals__category"> Korlátozott mennyiségben </span>
                    </div>

                    <h4 className="deals__title">Próbáljon ki valami újat a nyári vakáción</h4>

                    <div className="deals__price flex">
                        <span className="new__price">17 000 Ft.</span>
                        <span className="old__price">20 499 Ft.</span>
                    </div>

                    <div className="deals__group">
                        <p className="deals__countdown-text"> Siessen! Az ajánlat vége: </p>

                        <div className="countdown">
                            <div className="countdown__amount">
                                <p className="countdown__period">6</p>
                                <span className="unit"> Nap </span>
                            </div>

                            <div className="countdown__amount">
                                <p className="countdown__period">14</p>
                                <span className="unit"> Óra </span>
                            </div>

                            <div className="countdown__amount">
                                <p className="countdown__period">27</p>
                                <span className="unit"> Perc </span>
                            </div>

                            <div className="countdown__amount">
                                <p className="countdown__period">49</p>
                                <span className="unit"> Másodperc </span>
                            </div>
                        </div>
                    </div>

                    <div className="deals--btn">
                        <a href="#" className="btn btn--md"> Vásárlás </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Deals;