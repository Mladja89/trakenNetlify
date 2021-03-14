import React from "react";
import { css } from "@emotion/core";

const HeroCard = ({ children, title, image }) => {
  return (
    <div
      css={css`
        display: flex;
        width: 100%;
        justify-content: center;
        border-top: 100px solid #383c4d;
        :before {
          content: "";
          position: absolute;
          z-index: -1;
          width: 100vw;
          height: 180px;
          padding: 0px;
          margin: 0px;
          border-left: 100vw solid transparent;
          border-right: 0vw solid transparent;
          border-top: 26vw solid #383d4d;
          border-bottom: 0vw solid #383d4d;
        }
        .cards-wrapper {
          display: flex;
          max-width: 1000px;
        .left-card-content {
          background: #f8f8f9;
          padding: 40px;
          max-width: 65%;

          .title {
            font-size: 26px;
            font-weight: bold;
            color: #383d4d;
            font-family: Heebo;
            display: flex;
            flex-direction: column;
            margin-bottom: 25px;
            span {
              margin-bottom: 15px;
            }
          }
          .card-content {
            font-size: 16px;
            p {
              margin-bottom: 20px;
            }
          }
        }
        .right-card-content {
          background: #dfdfe0;
          display: flex;
          flex-direction: column;
          .img-wrapper {
            img {
              width: 100%;
              display: block;
            }
          }
        }
      }
      `}
    ><div className={"cards-wrapper"}>
      <div className={"left-card-content"}>
        <div className={"title"}>
          {title.map(titleRow => (
            <span key={titleRow}>{titleRow}</span>
          ))}
        </div>
        <div className={"card-content"}>{children}</div>
      </div>
      <div className={"right-card-content"}>
        <div className="img-wrapper">
          <img src={image}></img>
        </div>
      </div>
      </div>
    </div>
  );
};

export default HeroCard;
