import {LinkItem} from "../iol-header-b2c/AnchorList";

const mainMenuLinks: Record<string, LinkItem> = {
  TOPICS: {
    value: '/topics',
    label: 'Topics'
  },
  TESTEN_EN_TOOLS: {
    value: '/testen-tools',
    label: 'Testen en tools',
    analyticsLabel: 'TestenEnTools'
  },
  OPLEIDINGEN: {
    value: '/opleidingen',
    label: 'Opleidingen'
  },
  VACATURES: {
    value: '/vacature/zoeken',
    label: 'Vacatures'
  },
  JOUW_PROFIEL: {
    value: '/account/login?login_type=direct',
    label: 'Jouw profiel',
    analyticsLabel: 'JouwProfiel',
  }
}

export default mainMenuLinks
