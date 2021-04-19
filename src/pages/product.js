import React from "react";
import Layout from "../components/layout";
import { css } from "@emotion/core";

const Produkt = () => {

  return (
    <>
      <Layout>
        <section
          css={css`
            background: #0b0b0b;
            padding-top: 80px;
            display: flex;
            flex-direction: column;
            align-items: center;
            .product-wrapper {
              background: #111111;
              box-shadow: 0 16px 48px rgb(0 0 0 / 20%);
              color: #c3c3c3;
              max-width: 1400px;
              width: 100%;
              padding-top: 120px;
              display: flex;
              flex-direction: column;
              align-items: center;
              > div {
                width: 100%;
                display: flex;
                justify-content: center;
                > div {
                  margin: 60px 0px;
                  width: 100%;
                  max-width: 750px;
                  /* max-width: 1000px; */
                  p,
                  h2 {
                    max-width: 1000px;
                    padding: 0px 25px;
                  }
                  p {
                  }
                  h2 {
                    color: #40b7ce;
                  }
                  > img {
                    width: 100%;
                  }
                }
              }
              .hero-product {
                background: url("/product-illustration2.png");
                background-repeat: no-repeat;
                background-position: 100% 0%;
                > div {
                  max-width: 1000px;
                  justify-content: center;
                  display: flex;
                  @media (max-width: 992px) {
                    flex-direction: column-reverse;
                  }
                  > div {
                    margin: 0xp 20px;
                  }
                  .left {
                    padding-top: 50px;
                    max-width: 450px;
                    margin-right: 20px;
                    button {
                      display: inline-flex;
                      font-size: 14px;
                      letter-spacing: 0px;
                      font-weight: 600;
                      line-height: 16px;
                      text-decoration: none !important;
                      text-transform: uppercase;
                      background-color: #e9edf3;
                      background: #40b9ce;
                      border: none;
                      border-radius: 2px;
                      cursor: pointer;
                      justify-content: center;
                      padding: 16px 32px;
                      height: 48px;
                      text-align: center;
                      white-space: nowrap;
                    }
                  }
                  .right {
                    margin-left: 20px;
                    display: flex;
                    max-width: 400px;
                    img {
                      width: 100%;
                      display: block;
                        height: 100%;

                      
                    }
                  }
                }
              }
            }
          `}
        >
          <div className={"product-wrapper"}>
            <div className={"hero-product"}>
              <div>
                <div className={"left"}>
                  <p>
                    Traken is the software platform consisted of functional
                    software modules structured according to the existing
                    business processes of Distribution Service Operators and
                    Energy Traders as our target customers, in line with EBSI
                    and IEC 61968 standards.
                  </p>
                  <p>
                    It provides unique identification of smart meters on
                    Blockchain, to ensure the encrypted and transparent way to
                    access prosumers' smart meters, their product passports and
                    metering data.{" "}
                  </p>
                  <p>
                    The current platform has employed functional API, Mobile
                    Application for Prosumers, Dashboard Application for
                    Electricity Suppliers and operational Blockchain Modul.
                  </p>
                  {/* <button>DOWNLOAD</button> */}
                </div>
                <div className={"right"}>
                  <img src={"/app.png"}></img>
                </div>
              </div>
            </div>
            <div>
              <div>
                <h2>Ownership and PPE agreements</h2>
                <p>
                  TRAKEN has developed a suite of smart contract to cover the
                  functionalities that reflect relations between the prosumers
                  and smart meters.{" "}
                </p>
                <p>
                  Ownership Agreements defines the relations between one or
                  multiple prosumers with one or more smart meter devices
                  enabling the creation of prosumer syndicates and shared
                  ownership.
                </p>
                <p>
                  In order to accelerate the process and bridge the legal gap we
                  have developed a Power Purchase Agreement (PPA) in the form
                  Ricardian Contract that records the agreement between multiple
                  parties, while smart contracts execute whatever is defined in
                  the agreement as actions.
                </p>
                <p>
                  Smart Contracts merged with Ricardian Contracts can provide a
                  robust, efficient and real-time process for purchasing
                  electricity production from prosumers, enabling completely new
                  business model for Electricity Suppliers and Traders. This
                  could be a significant step forward in adding more
                  transparency to the Blockchain network as they are based on
                  pre-defined and pre-agreed legal contracts, automatically
                  executed in the digital environment.{" "}
                </p>
              </div>
            </div>

            <div className={"code"}>
              <div>
                <img src={"/code3.png"}></img>
              </div>
            </div>

            <div>
              <div>
                <h2>DER Registry</h2>
                <p>
                  Currently, grid operators lack visibility of distributed
                  energy resources and metering data.{" "}
                </p>
                <p>
                  Data is an asset that directly translates to value, and this
                  value can be multiplied by fusing data shared among
                  stakeholders in a value chain.{" "}
                </p>
                <p>
                  Traken will enable the real-time transfer of data acquired by
                  smart meters for data structuring, perform anonymized
                  analytical and reporting inquiries and perform management of
                  smart meter unique IDs and product passports (including
                  consumption data as dynamic parameters).{" "}
                </p>
              </div>
            </div>

            <div>
              <div>
                <h2>The TrakEn Platform features include:</h2>

                <ul>
                  <li>
                    Generation of unique address of electric meters (meter ID)
                  </li>
                  <li>
                    Definition and storing of electric meter metadata
                    (manufacturer, model, declaration, etc.)
                  </li>
                  <li>
                    Generation of pronounceable names for meter ID’s (eg.
                    TrakEn.meter.john-doe.home-meter) and prosumer ID’s customer
                    ID’s (eg. TrakEn.user.john-doe)
                  </li>
                  <li>
                    Definition of customer PI (personal identity) and creation
                    of unique prosumers address (customer ID) for individuals or
                    businesses
                  </li>
                  <li>
                    Linking of personally identifiable information to a customer
                    ID and meter metadata to a meter ID
                  </li>
                </ul>
              </div>
            </div>

            <div css={css`
            position: relative;
            `}>
              <div css={css`
                ::before {
                  content: "";
    position: absolute;
    width: 100px;
    height: 2px;
    background: #40b7ce;
    top: -20px;
    left: 50%;
    transform: translate(-50%, 0);
                }
              `}>
                <p>
                  TRAKEN platform would be implemented as a stand-alone
                  solution, as an additional software module to the platform for
                  smart metering or network monitoring (MDM or SCADA), or as an
                  add on to the physical infrastructure of the grid operator or
                  electricity supplier, if the existing smart meter
                  communication protocols allow such integration.
                </p>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Produkt;
