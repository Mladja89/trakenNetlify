import { graphql, useStaticQuery } from 'gatsby';

const usePartner = () => {
  const data = useStaticQuery(graphql`
    query {
      allPartnerJson {
        edges {
         node {
           name
           desc
           website
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

  return data.allPartnerJson.edges
};

export default usePartner;