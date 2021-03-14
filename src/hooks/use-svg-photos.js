import { graphql, useStaticQuery } from "gatsby";

const useSvgPhotos = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          extension: { regex: "/(svg)/" }
          sourceInstanceName: { eq: "images" }
        }
      ) {
        edges {
          node {
					relativePath
            
            childImageSharp {
              id
              fluid {
                base64
              }
              fixed {
                base64
              }
              original {
                src
              }
              internal {
                content
              }
            }
          }
        }
      }
    }
  `);
  
  return data
};

export default useSvgPhotos;
