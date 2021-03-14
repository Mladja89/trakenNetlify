import { graphql, useStaticQuery } from 'gatsby';

const usePhotos = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter:{extension:{regex:"/(jpeg|jpg|gif|png)/"},  sourceInstanceName:{eq:"images"}}) {
        edges {
          node {
            childImageSharp {
              fluid (quality: 90) {
               ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
      }
    }
  `);

  return data.allFile.edges
};

export default usePhotos;