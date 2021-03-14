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
        </CasusSection>
      </Layout>
    </>
  );
};

export default Team;
