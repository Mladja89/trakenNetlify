import React, { useState, useEffect } from "react";
import { css } from "@emotion/core";
import Image from "gatsby-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const CasusAccordion = props => {
  const [data, setData] = useState(props.accordionData);
  const [photo, setPhoto] = useState(data[0].node.image.src);
  const [active, setActive] = useState(0);

  const handleIndexClick = e => {
    const index = +e.target.dataset.index;
    setActive(index);
    setPhoto(data[index].node.image.src);
  };

  return (
    <div
      className="selectable-wrapper"
      css={css`
        display: flex;
        width: 100%;
        justify-content: center;
        padding: 0px 100px;
        > div:nth-of-type(1) {
          width: 60%;
        }
        > div:nth-of-type(2) {
          width: 40%;
          /* justify-content: center; */
          align-items: center;
          display: flex;
          flex-direction: column;
        }
      `}
    >
      <div
        className="img-wrapper"
        css={css`
          width: 100%;
        `}
      >
        <Image
          css={css`
            width: 100%;
            * {
              margin-top: 0;
            }
          `}
          objectFit="cover"
          objectPosition="50% 50%"
          fluid={photo.childImageSharp.fluid}
        />
        {/* <img src={photo.childImageSharp.fluid.src} /> */}
      </div>
      <div>
        {data.map((item, index) => (
          <div
            css={css`
              max-width: 300px;
              color: #383c4d;
              font-family: Heebo;
              border-bottom: 1px solid #f0f0f1;
              padding: 20px 0;
              .title {
                font-size: 18px;
                font-weight: bold;
                position: relative;
                cursor: pointer;
                display: inline-flex;
                padding-left: 20px;
                :hover {
                    color: #5d627b;
                }
                .active& {
                  color: #007bfe;
                }
              }
              .content {
                padding-left: 30px;
                height: 0px;
                /* max-height: 0px; */
                transform-origin: top;
                overflow: hidden;
                font-size: 15px;
                /* transition: height 0s ease-in;
                transition: max-height 0.35s ease-in-out; */
                .active& {
                  margin-top: 12px;
                  /* max-height: 200px; */
                  height: auto;
                }
              }
            `}
            key={item.node.title}
            className={index === active ? "active" : ""}
          >
            <FontAwesomeIcon
              icon={faChevronRight}
              rotation={index === active ? 90 : 0}
              color={index === active ? "#007bfe" : "#383c4d"}
            />
            <div
              className="title"
              data-index={index}
              onClick={handleIndexClick}
            >
              {item.node.title}
            </div>
            <div className="content">{item.node.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CasusAccordion;
