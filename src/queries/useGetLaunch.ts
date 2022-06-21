import { gql } from "@apollo/client";

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
