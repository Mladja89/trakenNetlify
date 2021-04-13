import React, { useState, useEffect } from "react";
import Layout from "../components/layout";
import { Link } from "gatsby";
import { css } from "@emotion/core";
import { Parallax } from "react-scroll-parallax";
// import { throttle } from "lodash";
import { useTrail, a } from "react-spring";
import { InView, useInView } from "react-intersection-observer";

function Trail({ open, children, heightVar = 30, ...props }) {
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    height: open ? heightVar : 0,
    from: { opacity: 0, x: 20, height: 0 },
  });
  return (
    <div className="trails-main" {...props}>
      <div>
        {trail.map(({ x, height, ...rest }, index) => (
          <a.div
            key={items[index]}
            className="trails-text"
            style={{
              ...rest,
              transform: x.interpolate((x) => `translate3d(0,${x}px,0)`),
            }}
          >
            <a.div style={{ height }}>{items[index]}</a.div>
          </a.div>
        ))}
      </div>
    </div>
  );
}

export default () => {
  const rootMarginValues = "4000px 0px -200px 0px";
  const [mobile, setMobile] = useState(false);
  const { ref, inView, entry } = useInView({
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
        // true for mobile device
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
            /* overflow: hidden;
            margin-bottom: -40px; */
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
              /* background: url("/hero.png"); */
              /* background-repeat: no-repeat;
              background-position: 50% 50%;
              background-size: cover; */

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
                background: url("/dot.png");
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
                <img src={"/ico/logo/traken-logo-white.png"}></img>
              </Parallax>
            </div>
          </div>
          <video muted loop autoPlay playsInline id="myVideo">
            <source src="/tltm8e (1).mp4" type="video/mp4"></source>
          </video>
          {/* <Image fluid={hero.node.childImageSharp.fluid}></Image> */}
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
            /* ::before {
              content: "";
              position: absolute;
              background: url("/hero-media-illustration-dark-2.png");
              width: 400px;
              height: 400px;
              left: 0px;
              opacity: 0.1;
            }
            ::after {
              content: "";
              position: absolute;
              background: url("/hero-media-illustration-dark-2.png");
              width: 400px;
              height: 400px;
              right: 0px;
              opacity: 0.1;
              bottom: 0;
            } */
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
                        /* left: 50%;
                        transform: translate(-50%, 0); */
                      }
                    h6 {
                        margin-top: 50px;
                        text-transform: uppercase;
                        color: #40b7ce;
                      }
                  }

                  /* div {
                    line-height: 1.5;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    img {
                      margin-right: 30px;
                      min-height: 112px;
                      margin-bottom: 50px;
                    }

                  } */
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
                  border: 1px solid #40b7ce;
                  border-radius: 50px;
                  padding: 20px 80px;
                  font-size: 25px;
                  text-decoration: none;
                  color: #40b7ce;
                  :hover {
                    background: #40b7ce;
                    color: black;
                  }
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
                      <img src={"/ico/product/protocol1.png"}></img>
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
                      <img src={"/ico/product/passport1.png"}></img>
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
                      <img src={"/ico/product/der1.png"}></img>
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
              <Link to="/product/">Find out more</Link>
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
            <img src={"/ico/slideicons/MREZA.png"}></img>
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

              img {
                width: 100%;
                max-width: 900px;
              }
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
              @media (max-width: 992px) {
                flex-direction: column;
              }
              .tech-right {
                display: flex;
                flex-direction: column;
                align-items: baseline;
                span {
                  padding-left: 30px;
                }
              }
              > div:nth-of-type(1) {
                display: flex;
                align-items: center;
              }
              h2 {
                color: #40b7ce;
                text-transform: uppercase;
                font-weight: 600;
              }
              div > h6 {
                color: #40b7ce;
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
            <div className={"tech-right"}>
              <h2>Technology stack</h2>

              <div>
                <h6>Hybrid blockchain network </h6>
                <InView rootMargin={rootMarginValues}>
                  {({ inView, ref, entry }) => (
                    <div ref={ref}>
                      <Trail open={inView}>
                        <span>> Private permissioned blockchain</span>
                        <span>
                          > Public chain that could be deployed on other chain
                          or chains simultaneously providing interoperability
                        </span>
                      </Trail>
                    </div>
                  )}
                </InView>
              </div>

              <div>
                <h6>Gateway Protocol</h6>
                <InView rootMargin={rootMarginValues}>
                  {({ inView, ref, entry }) => (
                    <div ref={ref}>
                      <Trail open={inView}>
                        <span>
                          > Protocol defines identities, how it is generated,
                          how it is stored and the way it interacts
                        </span>
                      </Trail>
                    </div>
                  )}
                </InView>
              </div>

              <div>
                <h6>Smart contracts</h6>
                <InView rootMargin={rootMarginValues}>
                  {({ inView, ref, entry }) => (
                    <div ref={ref}>
                      <Trail open={inView}>
                        <span>
                          > Executes on its own based on the instructions
                          provided in the computer code
                        </span>
                        <span>
                          > Immutable, self-verifying and auto-enforcing
                        </span>
                      </Trail>
                    </div>
                  )}
                </InView>
              </div>

              <div>
                <h6>Ricardian contracts</h6>
                <InView rootMargin={rootMarginValues}>
                  {({ inView, ref, entry }) => (
                    <div ref={ref}>
                      <Trail open={inView}>
                        <span>
                          > Available in printable form, program parsable with
                          all forms equivalent in terms of manifest
                        </span>
                        <span>> Readable by humans and machines</span>
                        <span>> Signed by the issuer and both parties</span>
                      </Trail>
                    </div>
                  )}
                </InView>
              </div>

              <div>
                <h6>Data Pipeline</h6>
                <InView rootMargin={rootMarginValues}>
                  {({ inView, ref, entry }) => (
                    <div ref={ref}>
                      <Trail open={inView}>
                        <span>
                          > How it communicates with end points that insert data
                          into the system such as Skada from various
                          manufacturers
                        </span>
                        <span>
                          > How metadata is stored so that it can be replicated
                          on other systems
                        </span>
                      </Trail>
                    </div>
                  )}
                </InView>
              </div>
            </div>
          </div>
        </section>

        <section
          css={css`
            background: #020202;
            display: flex;
            justify-content: center;
            .electric-wrap {
              @media (max-width: 992px) {
                flex-direction: column-reverse;
                }
              > div {
                flex-direction: column;
                display: flex;
                align-items: flex-end;
                .content {
                  display: flex;
                  flex-direction: column;
                  align-items: flex-end;
                }
              }
              > div:nth-of-type(2) {
                display: flex;
                justify-content: center;
                padding-top: 60px;
              }
            }
            > div {
              display: flex;
              flex-direction: row;
              padding: 80px 0px;
              max-width: 1000px;
              text-align: end;
              }

              h2 {
                color: #40b7ce;
                text-transform: uppercase;
                font-weight: 600;
                margin-bottom: 40px;
              }
              div > h6 {
                color: #40b7ce;
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
          <div class={"electric-wrap"}>
            <div>
              <div>
                <h2>Electric metering becomes immutable and transparent</h2>
              </div>
              <div className={"content"}>
                <InView rootMargin={rootMarginValues}>
                  {({ inView, ref, entry }) => (
                    <div ref={ref}>
                      <Trail open={inView} heightVar={50}>
                        <span> Operational performances tracking {`<`}</span>
                      </Trail>
                    </div>
                  )}
                </InView>
                <InView rootMargin={rootMarginValues}>
                  {({ inView, ref, entry }) => (
                    <div ref={ref}>
                      <Trail open={inView} heightVar={50}>
                        <span> Custom reporting intervals {`<`}</span>
                      </Trail>
                    </div>
                  )}
                </InView>
                <InView rootMargin={rootMarginValues}>
                  {({ inView, ref, entry }) => (
                    <div ref={ref}>
                      <Trail open={inView} heightVar={50}>
                        <span> Real time service management {`<`}</span>
                      </Trail>
                    </div>
                  )}
                </InView>
                <InView rootMargin={rootMarginValues}>
                  {({ inView, ref, entry }) => (
                    <div ref={ref}>
                      <Trail open={inView} heightVar={50}>
                        <span> Mobispanty of consumer accounts {`<`}</span>
                      </Trail>
                    </div>
                  )}
                </InView>
                <InView rootMargin={rootMarginValues}>
                  {({ inView, ref, entry }) => (
                    <div ref={ref}>
                      <Trail open={inView} heightVar={50}>
                        <span> Consumption patterns tracking {`<`}</span>
                      </Trail>
                    </div>
                  )}
                </InView>
                <InView rootMargin={rootMarginValues}>
                  {({ inView, ref, entry }) => (
                    <div ref={ref}>
                      <Trail open={inView} heightVar={50}>
                        <span> Supply chain transparency {`<`}</span>
                      </Trail>
                    </div>
                  )}
                </InView>
                <InView rootMargin={rootMarginValues}>
                  {({ inView, ref, entry }) => (
                    <div ref={ref}>
                      <Trail open={inView} heightVar={50}>
                        <span> New business models {`<`}</span>
                      </Trail>
                    </div>
                  )}
                </InView>
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
            .electric-wrap {
              @media (max-width: 992px) {
                flex-direction: column-reverse;
                }
              > div {
                flex-direction: column;
                display: flex;
                align-items: flex-start;
                .content {
                  display: flex;
                  flex-direction: column;
                  align-items: flex-start;
                }
              }
              > div:nth-of-type(1) {
                display: flex;
                justify-content: center;
                padding-top: 60px;
              }
            }
            > div {
              display: flex;
              flex-direction: row;
              padding: 80px 0px;
              max-width: 1000px;
              /* text-align: end; */
              }

              h2 {
                color: #40b7ce;
                text-transform: uppercase;
                font-weight: 600;
                margin-bottom: 40px;
              }
              div > h6 {
                color: #40b7ce;
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
          <div class={"electric-wrap"}>
            <div>
              <img src={"/ico/slideicons/slide10.png"}></img>
            </div>
            <div>
              <div>
                <h2>Electric energy becomes a liquid asset</h2>
              </div>
              <div className={"content"}>
                <InView rootMargin={rootMarginValues}>
                  {({ inView, ref, entry }) => (
                    <div ref={ref}>
                      <Trail open={inView} heightVar={50}>
                        <span> > Peer-to-Peer trading</span>
                      </Trail>
                    </div>
                  )}
                </InView>
                <InView rootMargin={rootMarginValues}>
                  {({ inView, ref, entry }) => (
                    <div ref={ref}>
                      <Trail open={inView} heightVar={50}>
                        <span> > Real time trading or production permits</span>
                      </Trail>
                    </div>
                  )}
                </InView>
                <InView rootMargin={rootMarginValues}>
                  {({ inView, ref, entry }) => (
                    <div ref={ref}>
                      <Trail open={inView} heightVar={50}>
                        <span> > Transparency and provenance</span>
                      </Trail>
                    </div>
                  )}
                </InView>
                <InView rootMargin={rootMarginValues}>
                  {({ inView, ref, entry }) => (
                    <div ref={ref}>
                      <Trail open={inView} heightVar={50}>
                        <span> > Origin tracking</span>
                      </Trail>
                    </div>
                  )}
                </InView>
                <InView rootMargin={rootMarginValues}>
                  {({ inView, ref, entry }) => (
                    <div ref={ref}>
                      <Trail open={inView} heightVar={50}>
                        <span> > New financing models</span>
                      </Trail>
                    </div>
                  )}
                </InView>
                <InView rootMargin={rootMarginValues}>
                  {({ inView, ref, entry }) => (
                    <div ref={ref}>
                      <Trail open={inView} heightVar={50}>
                        <span> > Democratizing investment</span>
                      </Trail>
                    </div>
                  )}
                </InView>
                <InView rootMargin={rootMarginValues}>
                  {({ inView, ref, entry }) => (
                    <div ref={ref}>
                      <Trail open={inView} heightVar={50}>
                        <span> > Realization of non-financial value</span>
                      </Trail>
                    </div>
                  )}
                </InView>
              </div>
            </div>
          </div>
        </section>

        {/* <section
          css={css`
            background: #020202;
            display: flex;
            justify-content: center;
            > div {
              display: flex;
              flex-direction: row;
              padding: 80px 0px;
              @media (max-width: 992px) {
                flex-direction: column-reverse;
              }
              > div:nth-of-type(1) {
                display: flex;
                align-items: center;
              }
              h2 {
                color: #40b7ce;
                text-transform: uppercase;
                font-weight: 600;
              }
              div > h6 {
                color: #40b7ce;
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
              <h2></h2>
              <div>
                <h6> CONSUMER BENEFITS ARE AMAZING</h6>
                <ul>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
              </div>
            </div>
          </div>
        </section> */}

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
                  border: 1px solid #40b7ce;
                  border-radius: 50px;
                  padding: 20px 80px;
                  font-size: 25px;
                  text-decoration: none;
                  color: #40b7ce;
                  :hover {
                    background: #40b7ce;
                    color: white;
                  }
                }
              }
              > img {
                margin-top: 150px;
                max-width: 450px;
                width: 100%;
              }
            `}
          >
            <div className={"team-title"}>Project Team</div>
            <div className={"team"}>
              <div>
                <img src={"/ico/slideicons/team-full.png"}></img>
              </div>
            </div>
            <div className={"link-team"}>
              <Link to="/team/">Meet our Team</Link>
            </div>
            <img
              src={"/ico/slideicons/eit_climate-kic_eu_flag_black.png"}
            ></img>
          </div>
        </section>
      </Layout>
    </>
  );
};
