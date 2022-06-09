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

export const LAUNCH = gql`
  query Launch($id: ID!) {
    launch(id: $id) {
      links {
        mission_patch_small
        flickr_images
      }
      id
      mission_name
      details
      launch_year
      launch_date_local
      rocket {
        rocket_name
        rocket_type
      }
    }
  }
`;
