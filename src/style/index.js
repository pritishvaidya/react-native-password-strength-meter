/* eslint import/no-unresolved: [2, { ignore: ['react-native'] }] */
import { StyleSheet, Dimensions } from 'react-native';

export const { width } = Dimensions.get('window');

export default StyleSheet.create({
  wrapper: {
    marginHorizontal: 10,
  },
  barContainer: {
    height: 6,
    borderRadius: 3,
  },
  bar: {
    height: 6,
    borderRadius: 3,
  },
  label: {
    position: 'absolute',
    right: 0,
    top: 8,
    fontSize: 12,
  },
});
