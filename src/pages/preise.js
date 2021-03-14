import React from "react";
import Layout from "../components/layout";
import CasusSection from "../components/casus-section";
import HeroCard from "../components/hero-card";
import Bluedot from "../components/blue-dot";
import { css } from "@emotion/core";
import useData from "../hooks/use-data";

const Preise = () => {
  const priceData = useData().pricing;

  return (
    <>
      <Layout>
        {/* <CasusSection flexDr={"column"}>
          <div
            css={css`
              display: flex;
              flex-direction: column;
              width: 100%;
              align-items: center;
              .bluedot-wrapper {
                background: #383d4d;
                padding: 50px 0px;
                width: 100%;
              }
            `}
          >
            <div className={"bluedot-wrapper"}>
              <Bluedot fontWeight={800}>
                <span>Pricing title</span>
              </Bluedot>
            </div>
            <HeroCard
              title={["Lorem ipsum subtitle will", "be placed here"]}
              image={"/testimg.png"}
            >
              <div>
                <p>
                  This is a placeholder text digitalized access to legal
                  services that have the flexibility to develop along with your
                  company size. We want to put you in control with an online
                  product brought to your office by our experienced lawers and
                  computer scientist.
                </p>
                <p>
                  Through the expertise of our fully qualified and specialized
                  lawers, and highly experienced computer scientist.
                </p>
              </div>
            </HeroCard>
          </div>
        </CasusSection>
        <CasusSection>
              <div className="pricing-wrapper">
                {priceData.map(price => {
                  return (
                    <div className="price-card">
                      <div className="price-subtitle">{price.subtitle}</div>
                      <div className="price-title">{price.title}</div>
                      <ul>
                        {price.content.map(cont => <li>{cont}</li>)}
                      </ul>
                      <button>{price.button}</button>
                    </div>
                  )
                })}
              </div>
        </CasusSection> */}
      </Layout>
    </>
  );
};

export default Preise;
