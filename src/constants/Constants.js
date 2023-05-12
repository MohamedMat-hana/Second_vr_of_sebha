import {Dimensions} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
const {width, height} = Dimensions.get('window');
export const COLORS = {
  premeim:"#E4DCAD99",
  Yellow:"#FFD36E90",
  Brown:'#735F3299',
  background: '#0c0c0c',
  white: '#fff',
  black: '#000',
  error: '#f86e87',
  warning: '#fdac71',
  success: '#6adaa4',
  gray: '#D2D8D8',
  blackModal:'#44433d',
  white50:"#bbbbbb"
};

export const PADDING = {
  xsPadding: 5,
  smPadding: 10,
  mdPadding: 15,
  lgPadding: 20,
  xlPadding: 25,
};
export const MARGIN = {
  xsMargin: 10,
  smMargin: 20,
  mdMargin: 25,
  lgMargin: 30,
  xlMargin: 45,
};

export const RADIUS = {
  xsRadius: 10,
  smRadius: 15,
  mdRadius: 20,
  lgRadius: 25,
  xlRadius: 30,
};

export const FONTS = {
  h1: 30,
  h2: 25,
  h3: 20,
  h4: 18,
  h5: 16,
  h6: 14,
  h7: 18,
};

export const ICONS = {
  smIcon: 15,
  mIcon: 20,
  lIcon: 25,
  xlIcon: 30,
};

export const ProfilePhoto = {
  PhotoWidth: width * 0.17,
  PhotoHeight: height * 0.078,
};

export const IconsView = {
  IconWidth: width * 0.1,
  IconHeight: height * 0.05,
};
