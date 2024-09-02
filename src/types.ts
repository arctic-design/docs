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

export type ComponentPropType =
  | 'ddl'
  | 'text'
  | 'number'
  | 'boolean'
  | 'segment';

export interface ComponentPropDefs {
  name: string;
  type: ComponentPropType;
  values?: string[];
  defaultValue?: string | number | boolean;
}

export interface CodeConfigType {
  component: React.JSX.ElementType;
  centered?: boolean;
  maxWidth?: number;
  code: string;
  propDefs: ComponentPropDefs[];
}

export type MetaType = {
  title: string;
  subTitle: string;
  slug: string;
};

export interface Document {
  id: string;
  title: string;
  content: string;
  parent?: string;
}

export type SearchableDocument = {
  id: string;
  slug: string;
  content: string;
  parentTitle: string;
  parentSlug: string;
};
