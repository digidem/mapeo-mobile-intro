import { ScreenType } from './IntroScreen'

const introScreens: ScreenType[] = [
  {
    backgroundColor: '#03a847',
    title: 'Welcome to Mapeo',
    description:
      'Mapeo is for mapping your territory and documenting evidence of deforestation and contamination.',
    image: require('../assets/mapeo-logo-transparent.png'),
    moreLink: 'Who built Mapeo?',
    moreText: `
Mapeo was developed by Digital Democracy in close collaboration with indigenous
partners in the Amazon rainforest, including Achuar, Cocama, Harakbut, Kofan,
Kichwa, Matsiguenka, Siekopai, Wapichana, Waorani and Yine peoples.

For more information and case studies about how it is being used see: www.mapeo.world
`,
  },
  {
    backgroundColor: '#13467d',
    title: 'Collecting data',
    description:
      'Head out to your community protected area and press the orange ＋ button to record a GPS point.',
    image: require('../assets/mapeo-map-screen.png'),
  },
  {
    backgroundColor: '#45228f',
    title: 'Choose a category',
    description:
      'You can record points along the boundary of your conserved areas, or important points inside the area.',
    image: require('../assets/wcmc-categories-screen.png'),
  },
  {
    backgroundColor: '#d3a4ed',
    title: 'Add photos and details',
    description:
      'Add a description of the point. You can also add photos and other details. Then save the point, pressing the orange tick.',
    image: require('../assets/mapeo-new-observation-screen.png'),
  },
  {
    backgroundColor: '#f0a5dc',
    title: 'Sync with Mapeo Desktop',
    description:
      'Back in your community you can sync your points with Mapeo Desktop to get them onto a laptop, and use them to draw the conservation boundary.',
    image: require('../assets/mapeo-sync-screen.png'),
  },

  {
    backgroundColor: '#fc9f14',
    title: 'Enjoy Mapeo!',
    description: 'Tap the tick to start using Mapeo.',
    image: require('../assets/undraw_High_five_u364.png'),
  },
]

export default introScreens
