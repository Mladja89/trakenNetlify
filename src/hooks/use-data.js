import { graphql, useStaticQuery } from "gatsby";

const useData = () => {
  const data = useStaticQuery(graphql`
    query {
      allDataJson {
        edges {
          node {
            business {
              title
              content
              icon
            }
            losungen {
              icon
              title
              content
            }
            pricing {
              title
              subtitle
              content
              button
            }
            timeline {
              title
              content
              image {
                src {
                  childImageSharp {
                    fluid {
                      ...GatsbyImageSharpFluid_tracedSVG
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  return data.allDataJson.edges[0].node;
};

export default useData;
