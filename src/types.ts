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

export interface ComponentPropDefs {
  name: string;
  type: 'ddl' | 'text' | 'number' | 'boolean';
  values?: string[];
  defaultValue?: string | number | boolean;
}

export interface CodeConfigType {
  component: React.JSX.ElementType;
  centered?: boolean;
  maxWidth?: number;
  code: string;
  propDefs: ComponentPropDefs[];
  title: string;
  subTitle: string;
}
