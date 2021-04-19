import React from "react";
import Layout from "../components/layout";
import { css } from "@emotion/core";
import useTeam from "../hooks/use-team";

const Team = () => {
  const team = useTeam();
  
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
              {team.map((member) => {
                return (
                  <div key={member.name}>
                    <div className={"left"}>
                      <img
                        src={member.image.src.childImageSharp.fluid.src}
                      ></img>
                    </div>

                    <div className={"right"}>
                      <h2>
                        <span>
                          <a href={member.linkedin}></a>
                        </span>
                        {member.name}
                      </h2>
                      <h6>{member.title}</h6>

                      {member.desc.map((p) => {
                        return <p>{p}</p>;
                      })}
                    </div>
                  </div>
                );
              })}
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

export default Team;
