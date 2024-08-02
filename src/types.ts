export interface FlatRoute {
  path: string;
  label: string;
}

export interface Route extends FlatRoute {
  children?: Route[];
}

export interface RouteMetadata extends FlatRoute {
  order?: number;
  children?: RouteMetadata[];
}
