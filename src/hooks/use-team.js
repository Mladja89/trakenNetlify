import { graphql, useStaticQuery } from "gatsby";

const useTeam = () => {
  const data = useStaticQuery(graphql`
    query {
      allTeamJson {
        nodes {
          name
          title
          linkedin
          desc
          image {
            src {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
          }
        }
      }
    }
  `);

  return data.allTeamJson.nodes;
};

export default useTeam;
