import React, {
  Dispatch,
  SetStateAction,
  ReactNode,
  MutableRefObject,
  ComponentType,
  FunctionComponent
} from 'react';

//--Utility Types-----------------------------------------------------------------------------------

export type PageDetail = {
  title: string;
  element: FunctionComponent;
};

export type PageCollection = {
  collectionTitle: string;
  pages: PageDetail[];
};

export type PageDirectory = PageCollection[];

//--Component Props---------------------------------------------------------------------------------
export type SideBarSectionContainerProps = {
  children: ReactNode;
  title: string;
  defaultExpanded?: boolean;
};
