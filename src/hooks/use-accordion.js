import { graphql, useStaticQuery } from 'gatsby';

const useAccordion = () => {
  const data = useStaticQuery(graphql`
    query {
      allAccordionJson {
        edges {
         node {
           title
           content
           image {
            src {
              childImageSharp {
                fluid (quality: 100)  {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
         }
       }
       }
    }
  `);

  return data.allAccordionJson.edges
};

export default useAccordion;