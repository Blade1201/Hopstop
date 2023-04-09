import React from 'react';
import "../styles/newsletter.css";
import Icon_Email from "../images/icon-email.svg";

const Newsletter = () => {
    return (
        <section className="newsletter section home__newsletter">
            <div className="newsletter__container container grid">
                <h3 className="newsletter__title flex">
                    <img src={Icon_Email} alt="icon-email" className="newsletter__icon"/>

                    Regisztráljon hírlevelünkért
                </h3>

                <p className="newsletter__description">
                    ... és kapjon 15 000 Ft. kupont első vásárlására
                </p>

                <form action="" className="newsletter__form">
                    <input type="text" placeholder="Irja be az email címét" className="newsletter__input"/>

                    <button type="submit" className="newsletter__btn"> Regisztrálás </button>
                </form>
            </div>
        </section>
    );
};

export default Newsletter;