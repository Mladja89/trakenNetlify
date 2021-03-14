import { graphql, useStaticQuery } from 'gatsby';

const useTeam = () => {
  const data = useStaticQuery(graphql`
    query {
      allTeamJson {
        edges {
         node {
           name
           desc
           info {
             edu
             mail
             li
           }
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

  return data.allTeamJson.edges
};

export default useTeam;