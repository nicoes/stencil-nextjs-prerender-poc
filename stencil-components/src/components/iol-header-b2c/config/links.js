
/* eslint-disable sort-keys, dot-notation, quote-props, prettier/prettier */
export const links = {
  'home': 'https://www.intermediair.nl',

  'Inloggen': 'https://www.intermediair.nl/account/login?login_type=direct',
  'Adverteren': 'https://www.intermediair.nl/adverteren',
  'Uitloggen': 'https://www.intermediair.nl/account/uitloggen',

  'Topics': 'https://www.intermediair.nl/topics',
  'Werk en carrière': 'https://www.intermediair.nl/werk-en-carriere',
  'Werk-privébalans': 'https://www.intermediair.nl/werk-privebalans',
  'Personal finance': 'https://www.intermediair.nl/personal-finance',
  'Persoonlijke groei': 'https://www.intermediair.nl/persoonlijke-groei',
  'Emancipatie en diversiteit': 'https://www.intermediair.nl/emancipatie-en-diversiteit',
  'Zzp': 'https://www.intermediair.nl/zzp',
  'Archief': 'https://www.intermediair.nl/archief',

  'Testen en tools': 'https://www.intermediair.nl/testen-tools',

  'Opleidingen': 'https://www.intermediair.nl/opleidingen/zoeken',
  'Individueel': 'https://www.intermediair.nl/opleidingen/zoeken',
  'In-company training': 'https://opleidingen.intermediair.nl/in-company',
  'Online leren': 'https://www.intermediair.nl/opleidingen/online-leren',
  'Bladeren': 'https://www.intermediair.nl/opleidingen/bladeren',

  'Vacatures': 'https://www.intermediair.nl/vacature/zoeken',
  'Jouw profiel': 'https://www.intermediair.nl/profiel/overzicht',
  'Jouw mailinstellingen': 'https://www.intermediair.nl/account/e-mailinstellingen',
  'Jouw account': 'https://www.intermediair.nl/account',

  'Zoekopdrachten': 'https://www.intermediair.nl/vacature/zoeken/zoekopdrachten-beheren',
  'Favorieten': 'https://www.intermediair.nl/vacature/zoeken/favorieten',

  'Vacatures-Plaats': 'https://www.intermediair.nl/vacatures/plaats',
  'Vacatures-Amsterdam': 'https://www.intermediair.nl/vacatures/plaats/amsterdam',
  'Vacatures-Utrecht': 'https://www.intermediair.nl/vacatures/plaats/utrecht',
  'Vacatures-Rotterdam': 'https://www.intermediair.nl/vacatures/plaats/rotterdam',
  'Vacatures-Delft': 'https://www.intermediair.nl/vacatures/plaats/delft',
  'Vacatures-Hilversum': 'https://www.intermediair.nl/vacatures/plaats/hilversum',
  'Vacatures-Zeist': 'https://www.intermediair.nl/vacatures/plaats/zeist',
  'Vacatures-DenHaag': 'https://www.intermediair.nl/vacatures/plaats/s-gravenhage'
}

export const menuLinks = [
  {
    dataAnalyticsAction: 'ClickOnHeaderLink',
    dataAnalyticsLabel: 'Topics',
    href: links['Topics'],
    text: 'Topics',
    list: [
      {
        dataAnalyticsAction: 'ClickOnHeaderTopicsLink',
        dataAnalyticsLabel: 'WerkEnCarrière',
        href: links['Werk en carrière'],
        text: 'Werk en carrière'
      },
      {
        dataAnalyticsAction: 'ClickOnHeaderTopicsLink',
        dataAnalyticsLabel: 'WerkPrivébalans',
        href: links['Werk-privébalans'],
        text: 'Werk-privébalans'
      },
      {
        dataAnalyticsAction: 'ClickOnHeaderTopicsLink',
        dataAnalyticsLabel: 'PersonalFinance',
        href: links['Personal finance'],
        text: 'Personal finance'
      },
      {
        dataAnalyticsAction: 'ClickOnHeaderTopicsLink',
        dataAnalyticsLabel: 'PersoonlijkeGroei',
        href: links['Persoonlijke groei'],
        text: 'Persoonlijke groei'
      },
      {
        dataAnalyticsAction: 'ClickOnHeaderTopicsLink',
        dataAnalyticsLabel: 'EmancipatieEnDiversiteit',
        href: links['Emancipatie en diversiteit'],
        text: 'Emancipatie en diversiteit'
      },
      {
        dataAnalyticsAction: 'ClickOnHeaderTopicsLink',
        dataAnalyticsLabel: 'Zzp',
        href: links['Zzp'],
        text: 'Zzp'
      },
      {
        dataAnalyticsAction: 'ClickOnHeaderTopicsLink',
        dataAnalyticsLabel: 'Archief',
        href: links['Archief'],
        text: 'Archief'
      }
    ]
  },
  {
    dataAnalyticsAction: 'ClickOnHeaderLink',
    dataAnalyticsLabel: 'TestenEnTools',
    href: links['Testen en tools'],
    text: 'Testen en tools'
  },
  {
    dataAnalyticsAction: 'ClickOnHeaderLink',
    dataAnalyticsLabel: 'Opleidingen',
    href: links['Opleidingen'],
    text: 'Opleidingen',
    list: [
      {
        dataAnalyticsAction: 'ClickOnHeaderOpleidingenLink',
        dataAnalyticsLabel: 'Individueel',
        href: links['Individueel'],
        text: 'Individueel'
      },
      {
        dataAnalyticsAction: 'ClickOnHeaderOpleidingenLink',
        dataAnalyticsLabel: 'InCompanyTraining',
        href: links['In-company training'],
        text: 'In-company training',
        lang: 'en'
      },
      {
        dataAnalyticsAction: 'ClickOnHeaderOpleidingenLink',
        dataAnalyticsLabel: 'OnlineLeren',
        href: links['Online leren'],
        text: 'Online leren'
      },
      {
        dataAnalyticsAction: 'ClickOnHeaderOpleidingenLink',
        dataAnalyticsLabel: 'Bladeren',
        href: links['Bladeren'],
        text: 'Bladeren'
      }
    ]
  },
  {
    dataAnalyticsAction: 'ClickOnHeaderLink',
    dataAnalyticsLabel: 'Vacatures',
    href: links['Vacatures'],
    text: 'Vacatures',
    list: [
      {
        href: links['Vacatures'],
        text: 'Zoeken',
        dataAnalyticsAction: 'ClickOnHeaderWerkZoekendenLink',
        dataAnalyticsLabel: 'Vacatures'
      },
      {
        href: links['Zoekopdrachten'],
        text: 'Zoekopdrachten',
        dataAnalyticsAction: 'ClickOnHeaderWerkZoekendenLink',
        dataAnalyticsLabel: 'Zoekopdrachten'
      },
      {
        href: links['Favorieten'],
        text: 'Favorieten',
        dataAnalyticsAction: 'ClickOnHeaderWerkZoekendenLink',
        dataAnalyticsLabel: 'Favorieten'
      },
      {
        text: 'Vacatures in',
        href: links['Vacatures-Plaats'],
        dataAnalyticsAction: 'ClickOnHeaderWerkZoekendenLink',
        dataAnalyticsLabel: 'Vacatures in',
        subList: [
          {
            href: links['Vacatures-Amsterdam'],
            text: 'Amsterdam',
            dataAnalyticsAction: 'ClickOnHeaderWerkZoekendenLink',
            dataAnalyticsLabel: 'Amsterdam'
          },
          {
            href: links['Vacatures-Utrecht'],
            text: 'Utrecht',
            dataAnalyticsAction: 'ClickOnHeaderWerkZoekendenLink',
            dataAnalyticsLabel: 'Utrecht'
          },
          {
            href: links['Vacatures-Rotterdam'],
            text: 'Rotterdam',
            dataAnalyticsAction: 'ClickOnHeaderWerkZoekendenLink',
            dataAnalyticsLabel: 'Rotterdam'
          },
          {
            href: links['Vacatures-Delft'],
            text: 'Delft',
            dataAnalyticsAction: 'ClickOnHeaderWerkZoekendenLink',
            dataAnalyticsLabel: 'Delft'
          },
          {
            href: links['Vacatures-Hilversum'],
            text: 'Hilversum',
            dataAnalyticsAction: 'ClickOnHeaderWerkZoekendenLink',
            dataAnalyticsLabel: 'Hilversum'
          },
          {
            href: links['Vacatures-Zeist'],
            text: 'Zeist',
            dataAnalyticsAction: 'ClickOnHeaderWerkZoekendenLink',
            dataAnalyticsLabel: 'Zeist'
          },
          {
            href: links['Vacatures-DenHaag'],
            text: 'Den Haag',
            dataAnalyticsAction: 'ClickOnHeaderWerkZoekendenLink',
            dataAnalyticsLabel: 'DenHaag'
          }
        ]
      }
    ]
  }
]

export const accountLinks = [
  {
    dataAnalyticsAction: 'ClickOnHeaderProfileLink',
    dataAnalyticsLabel: 'JouwProfiel',
    href: links['Jouw profiel'],
    hrefNotAuthenticated: links['Inloggen'],
    text: 'Jouw profiel',
    extraUrls: ['https://www.intermediair.nl/account/login?login_type=direct']
  },
  {
    dataAnalyticsAction: 'ClickOnHeaderAccountLink',
    dataAnalyticsLabel: 'JouwEmailInstellingen',
    href: links['Jouw mailinstellingen'],
    text: 'Jouw mailinstellingen'
  },
  {
    dataAnalyticsAction: 'ClickOnHeaderAccountLink',
    dataAnalyticsLabel: 'JouwAccount',
    href: links['Jouw account'],
    text: 'Jouw account'
  },
  {
    dataAnalyticsAction: 'ClickOnHeaderAccountLink',
    dataAnalyticsLabel: 'Uitloggen',
    href: links['Uitloggen'],
    text: 'Uitloggen'
  }
]

const registerLink = {
  href: 'https://www.intermediair.nl/profiel/registreren',
  isExternal: false,
  text: 'Profiel maken'
}
