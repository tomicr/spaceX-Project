export type Launch = {
  mission_name: string;
  launch_year: number;
  details: number;
  id: string;
  links: LaunchLinks;
  rocket: Rocket;
  launchImg: string | undefined;
  launch_date_local: string;
};
export type Rocket = {
  rocket_name: string;
  rocket_type: string;
};

export type LaunchLinks = {
  mission_patch_small: string;
  flickr_images: string[];
};

export type LaunchDataVariables = {
  id: string | undefined;
};

export type DataLaunch = {
  launch: Launch;
};
