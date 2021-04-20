import { graphql, useStaticQuery } from "gatsby";

const useData = () => {
  const data = useStaticQuery(graphql`
    query {
      allDataJson {
        nodes {
          technology {
            title
            image {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
            mobile_image
            data {
              subtitle
              content
            }
          }
          metering {
            title
            image {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
            mobile_image
            data
          }
          asset {
            title
            image {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
            mobile_image
            data
          }
        }
      }
    }
  `);

  return data.allDataJson.nodes[0];
};

export default useData;
