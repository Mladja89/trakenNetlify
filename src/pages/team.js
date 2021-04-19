import React from "react";
import Layout from "../components/layout";
import CasusSection from "../components/casus-section";
import HeroCard from "../components/hero-card";
import Subheader from "../components/subheader";
import Bluedot from "../components/blue-dot";
import Image from "gatsby-image";
import { css } from "@emotion/core";
import useTeam from "../hooks/use-team";
import useBoard from "../hooks/use-board";
import usePartner from "../hooks/use-partner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Team = () => {
  const BLUE_DOT_HEIGHT = 180 * 2;

  const team = useTeam();
  const board = useBoard();
  const partner = usePartner();

  return (
    <>
      <Layout>
        <section>
          <div
            css={css`
              background: url("/black-bg.svg");
              background-position: 50%;
              background-size: cover;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              padding: 160px 0px;

              .team-title {
                color: #40b7ce;
                font-size: 60px;
                font-weight: 200;
                margin-bottom: 70px;
              }
              .team {
                display: flex;
                flex-direction: column;
                max-width: 992px;
                @media (max-width: 992px) {
                  flex-direction: column; 
                  padding: 0px 20px;
                }
                > div {
                  /* max-width: 400px; */
                  /* margin: 0px 25px; */
                  margin-bottom: 60px;
                  display: flex;
                  flex-direction: row;
                  align-items: center;
                  @media (max-width: 992px) {
                  flex-direction: column;
                  }
                  .left {
                    min-width: 350px;
                    @media (max-width: 992px) {
                      min-width: 0px;
                    }
                    display: flex;
                    align-self: baseline;
                    padding-top: 60px;
                    img {
                      width: 100%;
                      height: 100%;
                      display: block;
                    }
                  }
                  .right {
                    padding-left: 40px;
                    @media (max-width: 992px) {
                      padding-left: 0px;
                    }
                    h2 {
                      display: flex;
                      flex-direction: row;
                      align-items: baseline;
                      span {
                        a {
                          max-width: 20px;
                          display: flex;
                          min-width: 25px;
                          height: 25px;
                          background: url("/ico/social/team-li-1.svg");
                          background-repeat: no-repeat;
                          margin-right: 15px;
                          :hover {
                          background: url("/ico/social/team-li-2.svg");

                          }
                          img {
                            width: 100%;
                            display: block;
                          }
                        }
                      }
                    }
                    p {
                      color: #c3c3c3;
                    }
                  }
                  img {
                    margin-bottom: 25px;
                    width: 100%;
                  }
                  h2 {
                    color: #40b7ce;
                    font-size: 30px;
                  }
                  h6 {
                    color: #40b7ce;
                    text-transform: uppercase;
                  }
                }
              }
              > img {
                margin-top: 150px;
                max-width: 450px;
                width: 100%;
                background: white;
                padding: 20px 20px;
                border-radius: 5px;
              }
            `}
          >
            <div className={"team-title"}>Project Team</div>
            <div className={"team"}>
              <div>
                <div className={"left"}>
                  <img src={"/ico/slideicons/team1.png"}></img>
                </div>
                <div className={"right"}>
                  <h2>
                    <span>
                      <a href="https://www.linkedin.com/in/strahinjavuk/">
                        {/* <img src="/ico/social/linkedin.svg"></img> */}
                      </a>
                    </span>
                    Strahinja Vukoičić
                  </h2>
                  <h6>Executive Director and Technology Lead</h6>
                  <p>
                    Holds a BSc in Nanoelectronics and Optoelectronics, and an
                    MSc in Signal Processing and Automation from Faculty of
                    Electrical Engineering, University of Belgrade. As a serial
                    entrepreneur, he founded and developed 5 innovative
                    companies since 2008, 2 engineering companies and 3
                    startups, made his first exit in 2015 from a company that
                    now has over 600 employees and offices on 3 continents. As
                    an engineer and a project manager he developed software and
                    hardware solutions for multiple smart city and IoT projects
                    including residential and commercial spaces, industrial
                    zones, manufacturing facilities for Michelin and UNESCO
                    protected sites. He has developed and managed multiple
                    software development projects and teams ranging from mobile
                    apps to custom multi-modal ERP/CRM systems.
                  </p>
                  <p>
                    VENTURES: (HTEC GROUP www.htecgroup.com in 2008, MOONSTRUCK
                    www.moonstruck.io in 2011, C2 Communication & Control in
                    2013, HONORARCI www.honorarci.rs in 2015, TRAKEN TECH
                    www.traken.co in 2019).
                  </p>
                </div>
              </div>
              <div>
                <div className={"left"}>
                  <img src={"/ico/slideicons/team2.png"}></img>
                </div>
                <div className={"right"}>
                  <h2>
                    <span>
                      <a href="https://www.linkedin.com/in/msc-nemanja-petrovic-b6325792/">
                        
                      </a>
                    </span>
                    Nemanja Petrović
                  </h2>
                  <h6>Business Strategy Advisor</h6>
                  <p>
                    Graduated international business and administration at
                    Grenoble Graduate school of business, MSc in urban and
                    environmental management at UN University for peace. He is a
                    former principal of Stork Venture Capital, managing the
                    innovation processes inside tech portfolio companies,
                    identifying strategies and business opportunities with vast
                    knowledge on smart cities, sustainable energy and
                    Blockchain. He supported multiple blockchain startups
                    dealing with secondary markets, crypto ecosystems, KYC etc.
                    with business development and fund raising. Worked as senior
                    advisor to public institutions including the Ministry of
                    economy of Serbia in the EUBID project for the capacity
                    building of business incubators and science technology parks
                    financed by European delegation and implemented by GFA
                    consulting GmbH; He has designed, developed and managed
                    multiple projects supporting innovation, technology and
                    entrepreneurship.
                  </p>
                </div>
              </div>
              <div>
                <div className={"left"}>
                  <img src={"/ico/slideicons/team3.png"}></img>
                </div>
                <div className={"right"}>
                  <h2>
                    <span>
                      <a href="https://www.linkedin.com/in/pavlebatuta/ ">
                        
                      </a>
                    </span>
                    Pavle Batuta
                  </h2>
                  <h6>Blockchain Development Expert and Software Architect</h6>
                  <p>
                    Holds a BSc in Computer Science from School of Electrical
                    Engineering and Computing, University of Belgrade. He is an
                    expert in Blockchain development with focus on software
                    architecture and physical implementation of Blockchain
                    modules within complex business intelligence systems, ERPs,
                    CRMs, etc. With more than 4 years in Blockchain based
                    projects, he was actively working on several commercial
                    implementations of decentralized ledgers. He is a lecturer
                    and mentor in the crypto/blockchain community.
                  </p>
                </div>
              </div>
            </div>
            <img
              src={"/ico/slideicons/eit_climate-kic_eu_flag_black.png"}
            ></img>
          </div>
        </section>
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
                <span>Your easy access to</span>
                <span>legal services</span>
              </Bluedot>
            </div>
            <HeroCard title={["We digitalise law"]} image={"/testimg.png"}>
              <div>
                <p>
                  Our vision something short about us, this is a placeholder
                  text digitalized access to legal services that have the
                  flexibility to develop along with your company size. We want
                  to put you in control with an online product brought to your
                  office by our experienced lawers and computer scientist.
                </p>
                <p>
                  Through the expertise of our fully qualified and specialized
                  lawers, and highly experienced computer scientist.
                </p>
              </div>
            </HeroCard>
          </div>
        </CasusSection>

        <CasusSection flexDr={"column"}>
          <Subheader>
            <span>Unser team</span>
            <span>Die Köpfe hinter CASUS</span>
          </Subheader>

          <div
            className={"people-wrapper"}
            css={css`
              display: flex;
              flex-wrap: inherit;
              width: 100%;
              justify-content: center;
              .member-card-wrapper {
                display: flex;
                flex-direction: column;
                min-width: 300px;
                margin: 0px 30px;
                margin-bottom: 40px;
                .member-info {
                  display: flex;
                  flex-direction: column;
                  font-family: Heebo;
                  font-size: 13px;
                  letter-spacing: 0.4px;
                  line-height: 2;
                  .member-name {
                    color: #383c4d;
                    font-weight: bold;
                    font-size: 16px;
                    margin: 5px 0px;
                  }
                  .member-inner-info {
                    display: flex;
                    align-content: center;
                    justify-content: center;
                    > span {
                      display: flex;
                      align-items: center;
                    }
                    > div {
                      margin-left: auto;
                      font-size: 20px;
                      a {
                        margin-left: 10px;
                      }
                    }
                  }
                }
              }
            `}
          >
            {team.map(member => {
              return (
                <div
                  className="member-card-wrapper"
                  key={member.node.image.src.id}
                >
                  <Image
                    css={css`
                      width: 100%;
                      * {
                        margin-top: 0;
                      }
                    `}
                    fluid={member.node.image.src.childImageSharp.fluid}
                    alt={member.node.name}
                  />
                  <div className="member-info">
                    <span className="member-name">{member.node.name}</span>
                    <span>{member.node.desc}</span>
                    <div className="member-inner-info">
                      <span>{member.node.info.edu}</span>
                      <div>
                        <a href={`mailto: ${member.node.info.mail}`}>
                          <FontAwesomeIcon icon={faEnvelope} color={"#383c4d"} />
                        </a>
                        <a href={member.node.info.li} target="_blank">
                          <FontAwesomeIcon
                            icon={faLinkedin}
                            color={"#383c4d"}
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </CasusSection>

        <CasusSection flexDr={"column"} color={"#F8F8F9"}>
          <Subheader>
            <span>Unser partner</span>
            <span>
              Wir knüpfen unser <br></br> Anwaltsnetzwerk sorgfältig
            </span>
          </Subheader>
          <div
            css={css`
              max-width: 760px;
              color: #60636f;
              font-family: Heebo;
              font-size: 18px;
              letter-spacing: 0.16px;
              line-height: 29.12px;
              text-align: center;
            `}
          >
            Wir wählen unsere Partner sorgfältig aus. Nur Anwältinnen mit
            fundierter Expertise, guter Kommunikation und langjähriger Erfahrung
            sind Teil unseres Anwaltsnetzwerks. Unsere Partner sind mittelgrosse
            Kanzleien mit starker lokaler Verankerung, die Sie und Ihr Anliegen
            ins Zentrum Ihrer Tätigkeit rücken. Unsere Anwälte kümmern sich
            professionell und persönlich um Ihre Rechtsfrage und beraten Sie in
            allen Rechtsgebieten.
          </div>
          <div
            css={css`
              display: flex;
              width: 100%;
              padding: 0px 250px;
              justify-content: space-between;
            `}
          >
            {partner.map(partner => {
              return (
                <div
                  key={partner.node.image.src.id}
                  css={css`
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-end;
                    margin: 50px 0px;
                    position: relative;

                    :after {
                      content: "";
                      height: 1px;
                      width: 100%;
                      position: absolute;
                      background: #d7d8db;
                      bottom: 100px;
                    }
                  `}
                >
                  <Image
                    css={css`
                      width: 100%;
                      margin-bottom: 90px;

                      * {
                        margin-top: 0;
                      }
                    `}
                    fluid={partner.node.image.src.childImageSharp.fluid}
                    alt={partner.node.name}
                  />
                  <span
                    css={css`
                      color: #393d4c;
                      font-family: Heebo;
                      font-size: 18px;
                      font-weight: 500;
                      letter-spacing: 0.16px;
                    `}
                  >
                    {partner.node.name}
                  </span>
                  <a
                    target="_blank"
                    href={`https://${partner.node.website}`}
                    css={css`
                      text-decoration: none;
                    `}
                  >
                    <span
                      css={css`
                        color: #3479f6;
                        font-family: Heebo;
                        font-size: 14px;
                        font-weight: 500;
                        letter-spacing: 0.13px;
                        line-height: 33px;
                      `}
                    >
                      {partner.node.website}
                    </span>
                  </a>
                </div>
              );
            })}
          </div>
        </CasusSection>

        <CasusSection flexDr={"column"}>
          <Subheader>
            <span>Unser advisory board</span>
            <span>
              Diese Persönlichkeiten <br></br> unterstützen CASUS
            </span>
          </Subheader>
          <div
            className={"people-wrapper"}
            css={css`
              display: flex;
              flex-wrap: inherit;
              width: 100%;
              justify-content: center;
              .member-card-wrapper {
                display: flex;
                flex-direction: column;
                min-width: 300px;
                margin: 0px 30px;
                margin-bottom: 40px;
                .member-info {
                  display: flex;
                  flex-direction: column;
                  font-family: Heebo;
                  font-size: 13px;
                  letter-spacing: 0.4px;
                  line-height: 2;
                  .member-name {
                    color: #383c4d;
                    font-weight: bold;
                    font-size: 16px;
                    margin: 5px 0px;
                  }
                  .member-inner-info {
                    display: flex;
                    align-content: center;
                    justify-content: center;
                    > span {
                      display: flex;
                      align-items: center;
                    }
                    > div {
                      margin-left: auto;
                      font-size: 20px;
                      a {
                        margin-left: 10px;
                      }
                    }
                  }
                }
              }
            `}
          >
            {board.map(member => {
              return (
                <div
                  className="member-card-wrapper"
                  key={member.node.image.src.id}
                >
                  <Image
                    css={css`
                      width: 100%;
                      * {
                        margin-top: 0;
                      }
                    `}
                    fluid={member.node.image.src.childImageSharp.fluid}
                    alt={member.node.name}
                  />
                  <div className="member-info">
                    <span className="member-name">{member.node.name}</span>
                    <span>{member.node.desc}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </CasusSection> */}
      </Layout>
    </>
  );
};

export default Team;
