import { ButtonCustomColor, TypesModalAuth } from "core/enums/index";

/**
 * Interface describes item of custom Navigation
 *
 * @interface
 */

export interface INavItem {
  /**
   * Defines the path to new page
   */
  path: string;
  /**
   * Defines text in the link
   */
  text: string;
}

/**
 * Describes INavigationProps
 *
 * @interface
 */

export interface INavigationProps {
  /**
   * Defines list with links
   */
  list: INavItem[];
}

/**
 * Describes PopularListItem
 *
 * @interface
 */

export interface IButtonListProps {
  /**
   * Defines the path of the Link
   */
  path: string;
  /**
   * Defines the text of the Link
   */
  text: string;
}

/**
 * Describes PopularList props
 *
 * @interface
 */
export interface IPopularListProps {
  /**
   * Defines the popularList
   */
  popularList: IButtonListProps[];
}

/**
 * Describes SearchField props
 *
 * @interface
 */

export interface ISearchFieldProps {
  /**
   * Defines the value of the fieldText
   */
  fieldValue: string;
  /**
   * Defines the handler of onChange event
   */
  handler: (value: string) => void;
}

/**
 * Describes ButtonCustomProps
 *
 * @interface
 */
export interface IButtonCustom {
  /**
   * Defines handler of event`s click
   */
  onClickHandler?: () => void;
  /**
   * Defines inner text
   */

  text: string;
  /**
   * Defines bg-color
   */
  color?: ButtonCustomColor;
  type?: string;
}

export interface IProjectItemProps {
  img: string;
  linkPath?: string;
  avatar?: string;
  userName: string;
  category: string;
  quote: string;
}

export interface IFooterColumnLink {
  titleLink: string;
  desc: string;
}

export interface IFooterColumnProps {
  title: string;
  linkPath: string;
  links: IFooterColumnLink[];
}

export interface IBlockAuthProps {
  onclickSign: () => void;
  onClickJoin: () => void;
  onClickClose?: () => void;
}

export interface IModalAuthProps {
  isOpen: boolean;
  onClose: () => void;
  type: TypesModalAuth;
}

export interface IServiceItemProps {
  id: number;
  path?: string;
  img: string;
  title: string;
  desc: string;
}
