import {LinkItem} from "../iol-header-b2c/AnchorList";

export const accountUnauthenticatedListItems: LinkItem[] = [
  {
    value: '/account/login?login_type=direct',
    label: 'Inloggen'
  },
  {
    value: '/profiel/registeren',
    label: 'Profiel maken',
    analyticsLabel: 'ProfielMaken'
  },
  {
    value: '/adverteren',
    label: 'Adverteren'
  }
]
