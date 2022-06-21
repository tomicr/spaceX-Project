import { gql } from "@apollo/client";

export const LAUNCHES = gql`
  query Launches($limit: Int, $offset: Int, $launch_year: String) {
    launchesPast(
      limit: $limit
      offset: $offset
      find: { launch_year: $launch_year }
    ) {
      links {
        mission_patch_small
      }
      mission_name
      launch_year
      details
      id
    }
  }
`;
