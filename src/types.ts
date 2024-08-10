export interface FlatRoute {
  path: string;
  label: string;
  clickable?: boolean;
}

export interface Route extends FlatRoute {
  children?: Route[];
}

export interface RouteMetadata extends FlatRoute {
  order?: number;
  children?: RouteMetadata[];
}
