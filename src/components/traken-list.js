import React from "react";
import { css } from "@emotion/react";
import { useTrail, a } from "react-spring";
import { InView } from "react-intersection-observer";

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

const TrakenList = ({ children, data, direction = "left" }) => {
  const rootMarginValues = "4000px 0px -200px 0px";

  return (
    <div
      className={"list-wrapper"}
      css={css`
        @media (max-width: 992px) {
          flex-direction: ${direction === "left" ? "column" : "column-reverse"};;
        }
        max-width: 1200px;
        display: flex;
        align-items: center;
        padding: 80px 0px;
        > div {
          @media (max-width: 992px) {
          padding: 0px 15px !important;
          }
        }
        .col1,
        .col3 {
          padding-top: 50px;
        }
        .col2 {
          display: flex;
          flex-direction: column;
          align-self: end;
          h2 {
            color: #40b7ce;
            text-transform: uppercase;
            font-weight: 600;
            margin-bottom: 40px;
            text-align: ${direction === "left" ? "inherit" : "end"};
          }
          .content {
            display: flex;
            flex-direction: column;
            align-items: ${direction === "left" ? "baseline" : "flex-end"};
            .subtitle {
              color: #40b7ce;
            }
            span {
              text-align: left;
            }
            .spec-span {
              padding-left: 25px;
            }
          }
        }
      `}
    >
      {direction === "left" ? (
        <div className={"col1"}>
          <img alt={""} src={data.image.childImageSharp.fluid.src}></img>
        </div>
      ) : null}
      <div className={"col2"}>
        <h2>{data.title}</h2>
        <div className={"content"}>
          {typeof data.data[0] === "object" ? (
            <>
              {data.data.map((item) => (
                <>
                  <h6 class={"subtitle"}>{item.subtitle}</h6>
                  <>
                    {item.content.map((cont) => (
                      <InView rootMargin={rootMarginValues}>
                        {({ inView, ref }) => (
                          <div ref={ref}>
                            <Trail open={inView} heightVar={50}>
                              <span className={"spec-span"}>{cont}</span>
                            </Trail>
                          </div>
                        )}
                      </InView>
                    ))}
                  </>
                </>
              ))}
            </>
          ) : (
            <>
              {data.data.map((item) => (
                <InView rootMargin={rootMarginValues}>
                  {({ inView, ref }) => (
                    <div ref={ref}>
                      <Trail open={inView} heightVar={50}>
                        <span>{item}</span>
                      </Trail>
                    </div>
                  )}
                </InView>
              ))}
            </>
          )}
        </div>
      </div>
      {direction === "right" ? (
        <div className={"col3"}>
          <img alt={""} src={data.image.childImageSharp.fluid.src}></img>
        </div>
      ) : null}
    </div>
  );
};

export default TrakenList;
