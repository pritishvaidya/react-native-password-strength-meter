/* eslint import/no-unresolved: [2, { ignore: ['react-native'] }] */
import { StyleSheet, Dimensions } from 'react-native';

export const { width } = Dimensions.get('window');

export default StyleSheet.create({
  // Parent
  wrapper: {
    marginVertical: 10,
    marginHorizontal: 10,
  },
  label: {
    position: 'absolute',
    right: 0,
    top: 8,
    fontSize: 12,
  },
  // Bar Container
  barContainer: {
    height: 6,
    borderRadius: 3,
  },
  bar: {
    marginHorizontal: 2,
    height: 6,
    borderRadius: 3,
  },
  // Box Container
  boxContainerWrapper: {
    flexDirection: 'row',
  },
  boxContainer: {
    marginHorizontal: 2,
    height: 6,
    borderRadius: 3,
  },
  box: {
    height: 6,
    borderRadius: 3,
  },

});
