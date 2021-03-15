import React from "react";
import Layout from "../components/layout";
import { css } from "@emotion/core";

export default () => {
  // const photos = usePhotos();
  // const hero = photos.find((test) =>
  //   test.node.childImageSharp.fluid.src.includes("hero")
  // );

  // const ImageBackground = styled(BackgroundImage)`
  //   background-size: cover;
  //   display: flex;
  //   min-height: 600px;
  //   width: 100%;
  //   + * {
  //     margin-top: 0;
  //   }
  // `;

  return (
    <>
      <Layout>
        <section
          css={css`
            height: calc(100vh - 80px);
          `}
        >
          <div
            css={css`
              background: url("/hero.png");
              width: 100%;
              height: 100%;
              background-repeat: no-repeat;
              background-position: 50% 50%;
              background-size: cover;
              display: flex;
              padding-bottom: 130px;
              justify-content: center;
              align-items: center;
              text-align: center;
              color: white;
              font-size: 70px;
              span:nth-of-type(2) {
                margin: -35px 0px;
              }
              img {
                margin-top: 100px;
                width: 60%;
              }
              ::after {
                content: "";
                position: absolute;
                width: 100%;
                height: calc(100% - 80px);
                background: url(/dot.png);
                top: 60px;
                pointer-events: none;
              }
            `}
          >
            <div
              css={css`
                display: flex;
                flex-direction: column;
                align-items: center;
                margin-top: 50px;
              `}
            >
              <span
                css={css`
                  font-weight: 200;
                `}
              >
                Smart grid
              </span>
              <span
                css={css`
                  font-weight: 600;
                `}
              >
                just got smarter
              </span>
              <img src={"/ico/logo/traken-logo-white.png"}></img>
            </div>
          </div>
          {/* <Image fluid={hero.node.childImageSharp.fluid}></Image> */}
        </section>

        <section
          css={css`
            background: black;
            display: flex;
            justify-content: center;
            padding-bottom: 120px;
            text-align: center;
            position: relative;
            ::after {
              content: "";
              position: absolute;
              width: 100%;
              height: calc(100% - 80px);
              background: url("/ico/slideicons/mreza-bg.png");
              background-repeat: no-repeat;
              top: 60%;
              opacity: 20%;
              pointer-events: none;
              z-index: 0;
            }
            img {
              z-index: 3;
              -webkit-touch-callout: none; /* iOS Safari */
              -webkit-user-select: none; /* Safari */
              -khtml-user-select: none; /* Konqueror HTML */
              -moz-user-select: none; /* Old versions of Firefox */
              -ms-user-select: none; /* Internet Explorer/Edge */
              user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
            }
            > div > div > h2:nth-of-type(1) {
              color: white;
              font-size: 50px;
              font-weight: 100;
            }
            > div > div > h2:nth-of-type(2) {
              color: #40b7ce;
              font-size: 50px;
              font-weight: 100;
            }
          `}
        >
          <div css={css`
            > img {
              width: 100%;
            }
          `}>
            <div>
              <h2>Challenges</h2>
              <h2>of electrical ecosystem</h2>
            </div>
            <img src={"/ico/slideicons/MREZA.png"}></img>
          </div>
        </section>

        <section
          className={"slide-2"}
          css={css`
            display: flex;
            flex-direction: column;
            background: #020202;
            align-items: center;
            padding-bottom: 60px;
            h6,
            div {
              color: #c3c3c3;
              line-height: 1.5;
              > h2 {
                color: #32b1ca;
              }
            }
            .info-wrapper {
              max-width: 1200px;
              > h6 {
                font-size: 28px;
                font-weight: 200;
                text-align: center;
                margin-bottom: 80px;
                > span {
                  font-weight: 800;
                }
              }
            }
          `}
        >
          <div className={"info-wrapper"}>
            <h6>
              <span>TRAKEN</span> is a data tracking, management and
              exploitation tool for smart electrical grids, that provides a
              distributed ledger to manage metering records, track physical
              objects and transfer value without a third party or manual
              reconciliation.{" "}
            </h6>

            <div>
              <h2>Protocol</h2>
              <h6>
                Protocol will provide interoperability and seamless flow of data
                between different networks. Using Ricardian and smart contracts
                such encrypted IDs of smart meters and consumption data will
                engage with prosumer Self-Sovereign Identity (SSI) in validated
                interactions, events and transactions including PPEs. Smart
                contracts govern what types of relationships can be established
                between different identified entities within the system and how
                those relationships can be interpreted based on pre-determined
                composition.
              </h6>
            </div>

            <div>
              <h2>Product passport </h2>
              <h6>
                A product passport is a digital twin of a device in blockchain
                space. It allows the device to be identified and labeled, to
                enter into agreements and to be accounted for tracking and
                measurement. We have created framework for standardized product
                passports generation and protocol for recording of such data to
                DLT;
              </h6>
            </div>

            <div>
              <h2> Distributed energy resource (DER) registry </h2>
              <h6>
                Data is an asset that directly translates to value, and this
                value can be multiplied by fusing data shared among stakeholders
                in a value chain. DER registry will integrate distributed energy
                resources across all electricity networks while increasing
                visibility and access to data. This will enable real time
                validation, time tampering and aggregation of stored data while
                expending capacity of a two-way energy system.
              </h6>
            </div>
          </div>
        </section>

        <section>
          <div
            css={css`
              background: url("/white-bg.svg");
              background-position: 50%;
              background-size: cover;
              display: flex;
              justify-content: center;
              align-items: center;
              padding: 80px 0px;
            `}
          >
            <img src={"/slide53.png"}></img>
          </div>
        </section>

        <section
          css={css`
            background: #020202;
            display: flex;
            justify-content: center;
            > div {
              display: flex;
              flex-direction: row;
              padding: 80px 0px;
              > div:nth-of-type(1) {
                display: flex;
                align-items: center;
              }
              h2 {
                color: #32b1ca;
                text-transform: uppercase;
                font-weight: 600;
              }
              div > h6 {
                color: #32b1ca;
              }
              div > ul > li {
                color: #c3c3c3;
              }
            }
          `}
        >
          <div>
            <div>
              <img src={"/ico/slideicons/slide7.png"}></img>
            </div>
            <div>
              <h2>Technology stack</h2>
              <div>
                <h6>Hybrid blockchain network </h6>
                <ul>
                  <li>Private permissioned blockchain </li>
                  <li>
                    Public chain that could be deployed on other chain or chains
                    simultaneously providing interoperability
                  </li>
                </ul>
              </div>
              <div>
                <h6>Gateway Protocol</h6>
                <ul>
                  <li>
                    Protocol defines identities, how it is generated, how it is
                    stored and the way it interacts
                  </li>
                </ul>
              </div>
              <div>
                <h6>Smart contracts</h6>
                <ul>
                  <li>
                    Executes on its own based on the instructions provided in
                    the computer code
                  </li>
                  <li>Immutable, self-verifying and auto-enforcing</li>
                </ul>
              </div>
              <div>
                <h6>Ricardian contracts</h6>
                <ul>
                  <li>
                    Available in printable form, program parsable with all forms
                    equivalent in terms of manifest
                  </li>
                  <li>Readable by humans and machines</li>
                  <li>Signed by the issuer and both parties</li>
                </ul>
              </div>
              <div>
                <h6>Data Pipeline</h6>
                <ul>
                  <li>
                    How it communicates with end points that insert data into
                    the system such as Skada from various manufacturers
                  </li>
                  <li>
                    How metadata is stored so that it can be replicated on other
                    systems
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section
          css={css`
            background: url("/stock1.png");
            background-size: cover;
            background-repeat: no-repeat;
            padding: 80px 0px;
            position: relative;
            display: flex;
            justify-content: center;
            ::after {
              content: "";
              position: absolute;
              width: 100%;
              height: calc(100% - 80px);
              background: url(/dot.png);
              top: 0px;
              pointer-events: none;
            }
            div {
              z-index: 0;
              max-width: 1200px;
            }
            > div {
              display: flex;
              flex-direction: column;
              text-align: center;
              div::nth-of-type(1) {
                display: flex;
                align-items: center;
              }
              h2 {
                color: #32b1ca;
                font-weight: 200;
                font-size: 50px;
                /* color: white; */
                span {
                  font-weight: 400;
                }
              }
              div {
                color: white;
                margin-bottom: 30px;
                font-size: 20px;
                font-weight: 400;
              }
              div > h6 {
                color: #32b1ca;
                text-transform: uppercase;
                /* color: white; */
                font-size: 25px;
                font-weight: 600;
              }
            }
          `}
        >
          <div>
            <h2>
              Why <span>Blockchain</span>
            </h2>
            <img></img>
            <div>
              <div>
                <h6>Trust</h6>
                Multiple points of verification within the Blockchain heighten
                trust between the participants.
              </div>
              <div>
                <h6>Trace</h6>
                Blockchain records are permanent and cannot be edited or
                deleted.
              </div>
              <div>
                <h6>Transparent</h6>
                Ownership or control of assets is public and transparent.
              </div>
              <div>
                <h6>Tengible</h6>
                Blockchain logic prevents double-counting of assets, records
                ownership and transfers.
              </div>
              <div>
                <h6>Transactions</h6>
                Greater the number of parties in the ecosystem and the higher
                the transaction volumes, the more secure Blockchain can make it.
              </div>
            </div>
          </div>
        </section>

        <section
          css={css`
            background: #020202;
            display: flex;
            justify-content: center;
            > div {
              display: flex;
              flex-direction: row;
              padding: 80px 0px;
              max-width: 1000px;
              text-align: end;
              }
              > div:nth-of-type(1) {
                display: flex;
                align-items: center;
              }
              h2 {
                color: #32b1ca;
                text-transform: uppercase;
                font-weight: 600;
                margin-bottom: 40px;
              }
              div > h6 {
                color: #32b1ca;
              }
              div > ul {
                padding-right: 20px;
              }
              div > ul > li {
                color: #c3c3c3;
                direction: rtl;
              }
            }
          `}
        >
          <div>
            <div>
              <h2>Electric metering becomes immutable and transparent</h2>
              <div>
                <h6>OPERATOR BENEFITS ARE NUMEROUS</h6>
                <ul>
                  <li>Operational performances tracking</li>
                  <li>Custom reporting intervals</li>
                  <li>Real time service management</li>
                  <li>Mobility of consumer accounts</li>
                  <li>Consumption patterns tracking</li>
                  <li>Supply chain transparency</li>
                  <li>New business models</li>
                </ul>
              </div>
            </div>
            <div>
              <img src={"/ico/slideicons/slide9.png"}></img>
            </div>
          </div>
        </section>

        <section
          css={css`
            background: #020202;
            display: flex;
            justify-content: center;
            > div {
              display: flex;
              flex-direction: row;
              padding: 80px 0px;
              > div:nth-of-type(1) {
                display: flex;
                align-items: center;
              }
              h2 {
                color: #32b1ca;
                text-transform: uppercase;
                font-weight: 600;
              }
              div > h6 {
                color: #32b1ca;
              }
              div > ul > li {
                color: #c3c3c3;
              }
            }
          `}
        >
          <div>
            <div>
              <img src={"/ico/slideicons/slide10.png"}></img>
            </div>
            <div>
              <h2>Electric energy becomes a liquid asset</h2>
              <div>
                <h6> CONSUMER BENEFITS ARE AMAZING</h6>
                <ul>
                  <li>Peer-to-Peer trading</li>
                  <li>Real time trading or production permits</li>
                  <li>Transparency and provenance</li>
                  <li>Origin tracking</li>
                  <li>New financing models</li>
                  <li>Democratizing investment</li>
                  <li>Realization of non-financial value</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div
            css={css`
              background: url("/white-bg.svg");
              background-position: 50%;
              background-size: cover;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              padding: 80px 0px;
              .team-title {
                color: #32b1ca;
                font-size: 60px;
                font-weight: 200;
                margin-bottom: 70px;
              }
              .team {
                display: flex;
                flex-direction: row;

                div {
                  max-width: 400px;
                  margin: 0px 25px;
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  img {
                    margin-bottom: 25px;
                  }
                  h2 {
                    color: #32b1ca;
                    font-size: 30px;
                  }
                }
              }
              > img {
                margin-top: 150px;
                max-width: 450px;
              }
            `}
          >
            <div className={"team-title"}>Project Team</div>
            <div className={"team"}>
              <div>
                <img src={"/ico/slideicons/team1.png"}></img>
                <h2>Strahinja Vukoičić</h2>
                <p>
                  Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  ut enim ad minim veniam,
                </p>
              </div>
              <div>
                <img src={"/ico/slideicons/team2.png"}></img>
                <h2>Nemanja Petrović</h2>
                <p>
                  Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  ut enim ad minim veniam,
                </p>
              </div>
              <div>
                <img src={"/ico/slideicons/team3.png"}></img>
                <h2>Miloš Solujić</h2>
                <p>
                  Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  ut enim ad minim veniam,
                </p>
              </div>
            </div>
            <img src={"/ico/slideicons/eit_climate-kic_eu_flag_black.png"}></img>
          </div>
        </section>
      </Layout>
    </>
  );
};
