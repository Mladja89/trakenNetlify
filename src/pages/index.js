import React from "react";
import Layout from "../components/layout";
import CasusSection from "../components/casus-section";
import Bluedot from "../components/blue-dot";
import Cardone from "../components/cards-one";
import CasusAccordion from "../components/selectable-accordion";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import usePhotos from "../hooks/use-photos";
import Image from "gatsby-image";
import BackgroundImage from "gatsby-background-image";
import useAccordion from "../hooks/use-accordion";
import MailSubscription from "../components/mail-subscription";
import Typist from "react-typist";

export default () => {
  const BLUE_DOT_HEIGHT = 180 * 2;
  const MEDIA_MAX_WIDTH = 576;
  const accordionData = useAccordion();

  const photos = usePhotos();
  const hero = photos.find((test) =>
    test.node.childImageSharp.fluid.src.includes("hero")
  );

  const ImageBackground = styled(BackgroundImage)`
    background-size: cover;
    display: flex;
    min-heigh: 600px;
    width: 100%;
    + * {
      margin-top: 0;
    }
  `;

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
              background: url(/ico/slideicons/mreza-bg.png);
              background-repeat: no-repeat;
              top: 60%;
              opacity: 20%;
              pointer-events: none;
              z-index: 1;
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
          <div>
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
              z-index: 2;
              max-width: 1200px;
            }
            > div {
              display: flex;
              flex-direction: column;
              div::nth-of-type(1) {
                display: flex;
                align-items: center;
              }
              h2 {
                /* color: #32b1ca;
                text-transform: uppercase; */
                font-weight: 200;
                font-size: 50px;
                color: white;
                span {
                  font-weight: 400;
                }
              }
              div {
                color: #9e9e9e;
                margin-bottom: 30px;
                font-size: 20px;
                font-weight: 200;
              }
              div > h6 {
                /* color: #32b1ca; */
                color: white;
                font-size: 25px;
                font-weight: 200;
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

        <section>
          <h2>Electric energy becomes a liquid asset</h2>
          <div>
            <h3> CONSUMER BENEFITS ARE AMAZING</h3>

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
        </section>

        {/* <CasusSection>
          <div
            className={"hero-img-wrapper"}
            css={css`
              display: flex;
              flex-direction: column;
              width: 100%;
              > div {
                display: flex;
                flex-direction: column;
                width: 100%;
                justify-content: center;
                div {
                  display: flex;
                  justify-content: center;
                }
              }
              .hero-top {
                padding: 140px 0px;
                .zugang {
                  color: rgb(57, 61, 76);
                  font-size: 48px;
                  font-weight: bold;
                  font-family: "Butler";
                  .Typist .Cursor {
                    display: inline-block;

                    &--blinking {
                      opacity: 1;
                      animation: blink 1.4s linear infinite;
                      @keyframes blink {
                        0% {
                          opacity: 1;
                        }
                        50% {
                          opacity: 0;
                        }
                        100% {
                          opacity: 1;
                        }
                      }
                    }
                  }
                  span {
                    color: #007bfe;
                    padding-right: 15px;
                  }
                }
                .sub-zugang {
                  font-size: 22px;
                  font-family: Heebo;
                  text-align: center;
                  color: #737783;
                  margin: 40px 0px;
                }
              }
              .hero-bottom {
                background-image: url("./customsvghero.svg");
                background-repeat: no-repeat;
                background-size: cover;
                .gatsby-image-wrapper {
                  margin: 0px 140px;
                }
              }
            `}
          >
            <div className={"hero-top"}>
              <div className={"zugang"}>
                <Typist>
                  Zugang zu Recht<span>. </span> Für alle<span>. </span>{" "}
                  Jederzeit
                  <span>.</span>
                </Typist>
              </div>
              <div className={"sub-zugang"}>
                Wir denken Recht neu. CASUS legt im Sommer 2020 für Sie los.
                <br></br>
                Bleiben Sie per Mail auf dem Laufenden.
              </div>
              <div>
                <MailSubscription />
              </div>
            </div>
            <div className={"hero-bottom"}>
              <Image fluid={heroimg.node.childImageSharp.fluid}></Image>
            </div>
          </div>
        </CasusSection> */}

        {/* <CasusSection color={"#383c4d"} height={`${BLUE_DOT_HEIGHT}px`}>
          <Bluedot fontSize={60} fontWeight={800}>
            <span>Mit Recht im Reinen</span>
          </Bluedot>
        </CasusSection> */}

        {/* <CasusSection >
          <div
            className="row"
            css={css`
              display: flex;
              margin: 170px 0px;
              @media (max-width: ${MEDIA_MAX_WIDTH}px) {
                justify-content: center;
                margin: 50px 0px;
              }
            `}
          >
            <Cardone>
              <span
                css={css`
                  :before {
                    background-image: url("/ico/ico-documents.svg");
                  }
                `}
              >
                Alle Dokumente, die Sie jemals brauchen
              </span>
              <span>
                Erstellen Sie Dokumente und digitalisieren Sie Ihre Verträge.
              </span>
            </Cardone>
            <Cardone>
              <span
                css={css`
                  :before {
                    background-image: url("/ico/ico-cloud.svg");
                  }
                `}
              >
                Verwalten Sie alle Dokumente an einem Ort
              </span>
              <span>
                Ihre Dokumente sind sicher gespeichert und von überall
                zugänglich.
              </span>
            </Cardone>
            <Cardone>
              <span
                css={css`
                  :before {
                    background-image: url("/ico/ico-video-call.svg");
                  }
                `}
              >
                Lassen Sie sich persönlich beraten
              </span>
              <span>Unsere Anwälte helfen Ihnen per Online-Anruf weiter.</span>
            </Cardone>
          </div>
        </CasusSection> */}

        {/* <CasusSection color={"#383c4d"} height={`${BLUE_DOT_HEIGHT}px`}>
          <Bluedot fontSize={60} fontWeight={800}>
            <span>Recht anders</span>
          </Bluedot>
        </CasusSection> */}

        {/* <CasusSection>
          <ImageBackground fluid={simone.node.childImageSharp.fluid}>
            <div
              css={css`
                color: #393d4c;
                max-width: 500px;
                margin: 100px;
                background: white;
                padding: 40px;
                transition: all 0.22s ease-in-out;
                :hover {
                  box-shadow: 0px 4px 6px #6f92a5;
                }

                div:nth-of-type(1) {
                  font-family: Butler;
                  font-size: 33px;
                  font-weight: bold;
                  line-height: 60px;
                  margin-bottom: 100px;
                }
                div:nth-of-type(2) {
                  font-family: Heebo;
                  font-size: 20px;
                  font-weight: bold;
                  letter-spacing: 0.15px;
                  line-height: 31px;
                }
                div:nth-of-type(3) {
                  font-family: Heebo;
                  font-size: 20px;
                  letter-spacing: 0.15px;
                  line-height: 31px;
                }
              `}
            >
              <div>
                "CASUS hat mir viel Zeit und Energie gespart, die richtige
                Lösung für alle <br></br> Rechtsfragen in meinem Unternehmen zu
                finden."
              </div>
              <div>Simone Bullinger</div>
              <div>CEO, Creams and Dreams </div>
            </div>
          </ImageBackground>
        </CasusSection> */}

        {/* <CasusSection>
          <div
            css={css`
              display: flex;
              text-align: center;
              color: #383c4d;
              font-weight: bold;
              font-family: Butler;
              font-size: 35px;
              margin: 100px 0px;
            `}
          >
            A cloud platform <br></br> that empowers companies
          </div>
          <CasusAccordion accordionData={accordionData}></CasusAccordion>
          <div
            css={css`
              width: 100%;
              height: 150px;
            `}
          ></div>
        </CasusSection> */}

        {/* <CasusSection height={"400px"} color={"#393D4C"}>
          <div
            css={css`
              display: flex;
              justify-content: center;
              flex-direction: column;
              color: #ffffff;
              text-align: center;
              div {
                font-family: Butler;
                font-size: 28px;
                font-weight: 500;
                line-height: 44px;
                text-align: center;
                margin-bottom: 40px;
              }
              .author {
                font-size: 14px;
              }
              .author-content {
                font-size: 12px;
                color: #9a9da5;
              }
            `}
          >
            <div>
              "Die Cloud-Platform CASUS hat die die traditionelle Art <br></br>{" "}
              und Weise Rechtsdienstleistungen zu erhalten"
            </div>
            <span className="author">Emilia Wagner</span>
            <span className="author-content">
              Rechtsanwalt bei Lenz & Staehelin
            </span>
          </div>
        </CasusSection> */}
      </Layout>
    </>
  );
};
