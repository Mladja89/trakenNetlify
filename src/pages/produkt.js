import React from "react";
import Layout from "../components/layout";
import { css } from "@emotion/core";
import CasusSection from "../components/casus-section";
import Subheader from "../components/subheader";
import Bluedot from "../components/blue-dot";
import TimelineLayer from "../components/timeline-layer";
import useData from "../hooks/use-data";
import HeroCard from "../components/hero-card";

const Produkt = () => {
  const BLUE_DOT_HEIGHT = 180 * 2;
  const data = useData();

  return (
    <>
      <Layout>
        <CasusSection flexDr={"column"}>
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
                <span>CASUS cloud platform can</span>
                <span>replace whole legal department</span>
              </Bluedot>
            </div>
            <HeroCard
              title={["A digital platform for", "small and medium business."]}
              image={"/testimg.png"}
            >
              <div>
                <p>
                  About this service, this is a placeholder text digitalized
                  access to legal services that have the flexibility to develop
                  along with your company size. We want to put you in control
                  with an online product brought to your office by our
                  experienced lawers and computer scientist.
                </p>
                <p>
                  Through the expertise of our fully qualified and specialized
                  lawers, and highly experienced computer scientist.
                </p>
              </div>
            </HeroCard>
          </div>
        </CasusSection>

        <CasusSection color={"white"} flexDr={"column"}>
          <Subheader darkBg={false}>
            <span>Kernfunktionen</span>
            <span>
              CASUS unterstützt Sie in allen <br></br> rechtlichen Belangen
            </span>
          </Subheader>
          <div
            css={css`
              display: flex;
              flex-wrap: wrap;
              justify-content: center;
              padding-bottom: 50px;
              max-width: 1100px;
            `}
          >
            {data.business.map(card => {
              return (
                <div
                  css={css`
                    display: flex;
                    flex-direction: column;
                    width: 300px;
                    background: #f4f4f5;
                    padding: 30px;
                    margin: 15px;
                    /* justify-content: space-between; */
                    position: relative;
                    max-width: 240px;
                    z-index: 0;
                    span:nth-of-type(1) {
                      color: #383d4d;
                      font-family: Heebo;
                      font-size: 16px;
                      font-weight: 800;
                      letter-spacing: 0.2px;
                      line-height: 33px;
                      margin-bottom: 20px;
                      z-index: 2;
                      position: relative;
                      line-height: 2;
                      :before {
                        content: "";
                        width: 30px;
                        height: 30px;
                        position: absolute;
                        z-index: -1;

                        top: -4px;
                        left: -12px;
                        background-repeat: no-repeat;
                        background-size: contain;
                        background-image: url(${card.icon});
                      }
                    }

                    span:nth-of-type(2) {
                      /* margin-top: 110px; */
                      color: #383d4d;
                      font-family: Heebo;
                      font-size: 13px;
                      letter-spacing: 0.2px;
                      line-height: 24px;
                    }
                  `}
                >
                  <span>{card.title}</span>
                  <span>{card.content}</span>
                </div>
              );
            })}
          </div>
        </CasusSection>

        <CasusSection color={"white"}>
          <div
            css={css`
              display: flex;
              flex-direction: row;

              > span {
                margin: 90px 75px;
                color: #383c4d;
                font-family: Heebo;
                font-size: 18px;
                font-weight: 500;
                line-height: 29px;
                display: flex;
                align-items: center;
                position: relative;

                :before {
                  content: "";
                  margin-right: 20px;
                  width: 50px;
                  height: 50px;
                  background-repeat: no-repeat;
                  background-size: contain;
                  background-image: url("/ico/produkt/ico-checkmark.svg");
                }
              }
            `}
          >
            <span>
              Schweizer <br></br> Datenschutzstandards
            </span>
            <span>
              Schweizer <br></br> Server
            </span>
          </div>
        </CasusSection>

        {/* <CasusSection color={"#383c4d"} height={`${BLUE_DOT_HEIGHT}px`}>
          <Bluedot>
            <span>Wir digitalisieren Recht</span>
          </Bluedot>
        </CasusSection> */}

        <CasusSection color={"#f8f8f9"} flexDr={"column"}>
          <Subheader>
            <span>So funktioniert's</span>
            <span>Schritt für Schritt zu Ihrem Vertrag</span>
          </Subheader>

          <>
            {data.timeline.map((layer, i) => {
              return (
                <TimelineLayer
                  dataObj={layer}
                  key={layer.title}
                  number={i + 1}
                  first={i === 0 ? true : false}
                  last={data.timeline.length - 1 === i ? true : false}
                ></TimelineLayer>
              );
            })}
          </>
        </CasusSection>

        <CasusSection flexDr={"column"}>
          <Subheader>
            <span>Unsere lösungen</span>
            <span>From small and medium to corporate</span>
          </Subheader>

          <div
            css={css`
              display: flex;
            `}
          >
            {data.losungen.map(card => {
              return (
                <div
                  css={css`
                    background-color: #393d4c;
                    display: flex;
                    flex-direction: column;
                    padding: 80px 85px 75px 85px;
                    margin: 0px 25px;
                    margin-bottom: 180px;
                    max-width: 500px;
                  `}
                >
                  <span
                    css={css`
                      color: #ffffff;
                      font-family: Butler;
                      font-size: 38px;
                      font-weight: 500;
                      line-height: 60px;
                      margin-bottom: 100px;
                      position: relative;

                      :after {
                        content: "";
                        height: 2px;
                        width: 32px;
                        background: #3479f6;
                        position: absolute;
                        bottom: -40px;
                        left: 0;
                      }
                    `}
                  >
                    {card.title}
                  </span>
                  <span
                    css={css`
                      color: #d7d8db;
                      font-family: Heebo;
                      font-size: 14px;
                      letter-spacing: 0.16px;
                      line-height: 30px;
                    `}
                  >
                    {card.content}
                  </span>
                </div>
              );
            })}
          </div>
        </CasusSection>
      </Layout>
    </>
  );
};

export default Produkt;
