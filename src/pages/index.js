import React, { useState, useEffect } from "react";
import Layout from "../components/layout";
import { Link } from "gatsby";
import { css } from "@emotion/react";
import { Parallax } from "react-scroll-parallax";
import { useInView } from "react-intersection-observer";
import TrakenList from "../components/traken-list";
import useData from "../hooks/use-data";

export default () => {
  const [mobile, setMobile] = useState(false);
  const data = useData();

  const { ref, inView } = useInView({
    threshold: 1,
    rootMargin: "2000px 0px -180px 0px",
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      ) {
        setMobile(true);
      }
    }
  }, []);

  return (
    <>
      <Layout>
        <section
          css={css`
            min-height: 100vh;
            height: 100%;
            ${mobile ? "overflow: hidden !important;" : null}
            ${mobile
              ? "background: transparent; margin-bottom: -120px !important;"
              : null}
            video {
              position: absolute;
              right: 0;
              bottom: 0;
              min-width: 100%;
              min-height: 100%;
              z-index: -1;
            }
            ::after {
              content: "";
              position: absolute;
              bottom: 0px;
              left: 0;
              width: 100%;
              height: 150px;
              background: linear-gradient(0deg, black, transparent);
              z-index: 0;
            }
            ::before {
              content: "";
              position: absolute;
              bottom: 0px;
              left: 0;
              width: 100%;
              height: 100%;
              background: linear-gradient(270deg, #3ab3cad4, #000000e3);
              z-index: 0;
            }
          `}
        >
          <div
            css={css`
              position: absolute;
              width: 100%;
              height: 100%;
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
                background: url("./dot.png");
                top: 80px;
                pointer-events: none;
              }
            `}
          >
            <div
              css={css`
                div {
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  margin-top: 50px;
                  position: relative;
                }
              `}
            >
              <Parallax y={[150, -140]}>
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
                <img alt={""} src={"./ico/logo/traken-logo-white.png"}></img>
              </Parallax>
            </div>
          </div>
          <video muted loop autoPlay playsInline id="myVideo">
            <source src="./tltm8e (1).mp4" type="video/mp4"></source>
          </video>
        </section>

        <section
          className={"slide-2"}
          css={css`
            display: flex;
            flex-direction: column;
            background: #020202;
            align-items: center;
            padding-bottom: 60px;
            padding-top: 80px;
            position: relative;
            h6,
            div {
              color: #c3c3c3;
            }
            .info-wrapper {
              max-width: 1400px;
              display: flex;
              flex-direction: column;
              align-items: center;
              @media (max-width: 992px) {
                padding: 0px 20px;
              }
              .products-wrap {
                display: flex;
                flex-wrap: wrap;
                @media (max-width: 992px) {
                  flex-direction: column;
                }
                > div {
                  display: flex;
                  flex-basis: 30%;
                  margin: 0px 20px;
                  flex-direction: column;
                  align-items: center;

                  .upper {
                    display: flex;
                    flex-direction: row;
                    max-height: 80px;
                    /* height: 200px; */
                    align-items: center;
                    position: relative;
                    @media (max-width: 992px) {
                    
                    margin: 50px 0px;
                    }
                      ::after {
                        content: "";
                        position: absolute;
                        width: 1px;
                        height: 100%;
                        background: #c3c3c3;
                        left: 110px;
                      }
                    .left {
                      max-width: 100px;
                      min-width: 100px;
                      display: flex;
                      align-items: center;
                      img {
                        width: 100%;
                        display: block;
                      }
                    }
                    .right {
                      padding-left: 40px;
                      > h2 {
                        font-size: 30px;
                        color: #40b7ce;
                      }

                    }
                  }

                  .down {
                    position: relative;
                      ::after {
                        content: "";
                        position: absolute;
                        width: 100%;
                        height: 1px;
                        background: #000000;
                        top: -25px;
                      }
                    h6 {
                        margin-top: 50px;
                        text-transform: uppercase;
                        color: #40b7ce;
                      }
                  }
                }
              }
              div {
                > .traken-desc {
                  font-size: 28px;
                  font-weight: 200;
                  text-align: center;
                  margin-bottom: 80px;
                  letter-spacing: 1px;
                  color: #fff;
                  > span {
                    font-weight: 800;
                  }
                }
              }
              .link-product {
                display: flex;
                margin-top: 40px;
                a {
                  display: inline-flex;
                      /* font-size: 14px; */
                      letter-spacing: 0px;
                      font-weight: 600;
                      line-height: 16px;
                      text-decoration: none !important;
                      text-transform: uppercase;
                      background-color: #369caf;
                      /* background: #40b9ce; */
                      border: none;
                      border-radius: 2px;
                      cursor: pointer;
                      justify-content: center;
                      padding: 16px 32px;
                      height: 48px;
                      text-align: center;
                      white-space: nowrap;
                      color: black;
                  :hover {
                    background: #40b9ce;
                    color: black;
                  }
              }
            }
          `}
        >
          <div className={"info-wrapper"}>
            <Parallax y={[30, -30]}>
              <h6 className={"traken-desc"}>
                <span>TRAKEN</span> is a data tracking, management and
                exploitation tool for smart electrical grids, that provides a
                distributed ledger to manage metering records, track physical
                objects and transfer value without a third party or manual
                reconciliation.{" "}
              </h6>
            </Parallax>

            <div className={"products-wrap"} ref={ref}>
              <Parallax disabled={inView || mobile} y={["150px", "-150px"]}>
                <>
                  <div className={"upper"}>
                    <div className={"left"}>
                      <img alt={""} src={"./ico/product/protocol1.png"}></img>
                    </div>
                    <div className={"right"}>
                      <h2>Protocol</h2>
                    </div>
                  </div>
                  <div className={"down"}>
                    <h6>
                      Interoperability and seamless flow of data between
                      different networks
                    </h6>
                    <p>
                      Protocol will provide interoperability and seamless flow
                      of data between different networks. Using Ricardian and
                      smart contracts such encrypted IDs of smart meters and
                      consumption data will engage with prosumer Self-Sovereign
                      Identity (SSI) in validated interactions, events and
                      transactions including PPEs. Smart contracts govern what
                      types of relationships can be established between
                      different identified entities within the system and how
                      those relationships can be interpreted based on
                      pre-determined composition.
                    </p>
                  </div>
                </>
              </Parallax>
              <Parallax disabled={inView || mobile} y={["300px", "-300px"]}>
                <>
                  <div className={"upper"}>
                    <div className={"left"}>
                      <img alt={""} src={"./ico/product/passport1.png"}></img>
                    </div>
                    <div className={"right"}>
                      <h2>Product passport</h2>
                    </div>
                  </div>
                  <div className={"down"}>
                    <h6>
                      Framework for standardized product passports generation
                      and protocol for recording of such data to DLT
                    </h6>
                    <p>
                      A product passport is a digital twin of a device in
                      blockchain space. It allows the device to be identified
                      and labeled, to enter into agreements and to be accounted
                      for tracking and measurement. We have created framework
                      for standardized product passports generation and protocol
                      for recording of such data to DLT;
                    </p>
                  </div>
                </>
              </Parallax>
              <Parallax disabled={inView || mobile} y={["600px", "-600px"]}>
                <>
                  <div className={"upper"}>
                    <div className={"left"}>
                      <img alt={""} src={"./ico/product/der1.png"}></img>
                    </div>
                    <div className={"right"}>
                      <h2>Distributed energy resource (DER)</h2>
                    </div>
                  </div>
                  <div className={"down"}>
                    <h6>validation, time tampering and storing of data</h6>
                    <p>
                      Data is an asset that directly translates to value, and
                      this value can be multiplied by fusing data shared among
                      stakeholders in a value chain. DER registry will integrate
                      distributed energy resources across all electricity
                      networks while increasing visibility and access to data.
                      This will enable real time validation, time tampering and
                      aggregation of stored data while expending capacity of a
                      two-way energy system.
                    </p>
                  </div>
                </>
              </Parallax>
            </div>
            <div className={"link-product"}>
              <Link to="./product/">Find out more</Link>
            </div>
          </div>
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
              background: url("./ico/slideicons/mreza-bg.png");
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
          <div
            css={css`
              margin-top: 100px;
              > img {
                width: 100%;
              }
            `}
          >
            <div>
              <h2>Challenges</h2>
              <h2>of electrical ecosystem</h2>
            </div>
            {mobile ? (
              <div
                css={css`
                  padding: 0px 20px;
                  > div {
                    margin: 35px 0px;
                    .c-left {
                    }
                    .c-right {
                      h6 {
                        color: #40b7ce;
                        margin-top: 25px;
                      }
                      p {
                        color: #c3c3c3;
                      }
                    }
                  }
                `}
              >
                <div>
                  <div className={"c-left"}>
                    <img alt={""} src={"./ico/chall/proverance.png"}></img>
                  </div>
                  <div className={"c-right"}>
                    <h6>Provenance</h6>
                    <p>
                      Electricity production is often source of heavy polluton
                      and the origin of the electricty becomes important feature
                      for pricing models
                    </p>
                  </div>
                </div>

                <div>
                  <div className={"c-left"}>
                    <img alt={""} src={"./ico/chall/integrity.png"}></img>
                  </div>
                  <div className={"c-right"}>
                    <h6>Integrity</h6>
                    <p>
                      The welfare of citizens, industry and economy, depends on
                      safe, sustainable and affordable electrical energy.
                    </p>
                  </div>
                </div>

                <div>
                  <div className={"c-left"}>
                    <img alt={""} src={"./ico/chall/simpl.png"}></img>
                  </div>
                  <div className={"c-right"}>
                    <h6>Simplification</h6>
                    <p>
                      Electrical grids consist of multiple parties existing on
                      same network infrastructure, all of them transacting in a
                      linear way, whie the overall system is heavily convulted.
                    </p>
                  </div>
                </div>

                <div>
                  <div className={"c-left"}>
                    <img alt={""} src={"./ico/chall/trans.png"}></img>
                  </div>
                  <div className={"c-right"}>
                    <h6>Transparency</h6>
                    <p>
                      The tracking of generation, distribution and consumption
                      of electricity should be within open and immutable sysyem,
                      visible to all stakeholders.
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <img alt={""} src={"./ico/slideicons/MREZA.png"}></img>
            )}
          </div>
        </section>

        <section>
          <div
            css={css`
              background: url("./white-bg.svg");
              background-position: 50%;
              background-size: cover;
              display: flex;
              justify-content: center;
              align-items: center;
              padding: 80px 0px;

              img {
                width: 100%;
                max-width: 900px;
              }
            `}
          >
            <img alt={""} src={"./slide53.png"}></img>
          </div>
        </section>

        <section
          css={css`
            background: #020202;
            display: flex;
            justify-content: center;
          `}
        >
          <TrakenList data={data.technology} direction={"left"}></TrakenList>
        </section>

        <section
          css={css`
            background: #020202;
            display: flex;
            justify-content: center;
          `}
        >
          <TrakenList data={data.metering} direction={"right"}></TrakenList>
        </section>

        <section
          css={css`
            background: #020202;
            display: flex;
            justify-content: center;
          `}
        >
          <TrakenList data={data.asset} direction={"left"}></TrakenList>
        </section>

        <section>
          <div
            css={css`
              background: url("./white-bg.svg");
              background-position: 50%;
              background-size: cover;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              padding: 80px 0px;

              .team-title {
                color: #40b7ce;
                font-size: 60px;
                font-weight: 200;
                margin-bottom: 70px;
              }
              .team {
                display: flex;
                flex-direction: row;
                @media (max-width: 992px) {
                  flex-direction: column;
                  padding: 0px 20px;
                }
                div {
                  max-width: 600px;
                  margin: 0px 25px;
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  img {
                    margin-bottom: 25px;
                    width: 100%;
                  }
                  h2 {
                    color: #40b7ce;
                    font-size: 30px;
                  }
                }
              }
              .link-team {
                display: flex;
                margin-top: 40px;
                a {
                  display: inline-flex;
                  font-size: 14px;
                  letter-spacing: 0px;
                  font-weight: 600;
                  line-height: 16px;
                  text-decoration: none !important;
                  text-transform: uppercase;
                  background-color: #40b9ce;
                  border: none;
                  border-radius: 2px;
                  cursor: pointer;
                  justify-content: center;
                  padding: 16px 32px;
                  height: 48px;
                  text-align: center;
                  white-space: nowrap;
                  color: white;
                  :hover {
                    background: #34deff;
                    color: white;
                  }
                }
              }
              > img {
                margin-top: 50px;
                max-width: 450px;
                width: 100%;
              }
            `}
          >
            <div className={"team-title"}>Project Team</div>
            <div className={"team"}>
              <div>
                <img alt={""} src={"./ico/slideicons/team-full.png"}></img>
              </div>
            </div>
            <div className={"link-team"}>
              <Link to="./team/">Meet our Team</Link>
            </div>
            <img
              alt={""}
              src={"./ico/slideicons/eit_climate-kic_eu_flag_black.png"}
            ></img>
            <img
              alt={""}
              src={"./ico/slideicons/reach-logo2.png"}
            ></img>
            <img
              alt={""}
              src={"./ico/slideicons/xerurope-logo.png"}
            ></img>
          </div>
        </section>
      </Layout>
    </>
  );
};
