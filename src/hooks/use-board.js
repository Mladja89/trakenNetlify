import { graphql, useStaticQuery } from 'gatsby';

const useBoard = () => {
  const data = useStaticQuery(graphql`
    query {
      allBoardJson {
        edges {
         node {
           name
           desc
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
  `);

  return data.allBoardJson.edges
};

export default useBoard;