import {AnchorListItem} from "../nvb-header-b2c/SubMenu";

export const accountAuthenticatedListItems: AnchorListItem[] = [
  {
    label: 'Profiel',
    value: '/profiel/overzicht',
    analyticsLabel: 'JouwProfiel'
  },
  {
    label: 'Favorieten',
    value: '/vacature/zoeken/favorieten'
  },
  {
    label: 'Zoekopdrachten',
    value: '/vacature/zoeken/zoekopdrachten-beheren'
  },
  {
    label: 'E-mailinstellingen',
    value: '/account/e-mailinstellingen',
    analyticsLabel: 'JouwEmailInstellingen'
  },
  {
    label: 'Uitloggen',
    value: '/account/uitloggen'
  }
]
