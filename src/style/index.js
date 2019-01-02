/* eslint import/no-unresolved: [2, { ignore: ['react-native'] }] */
import { StyleSheet, Dimensions } from 'react-native';

export const { width } = Dimensions.get('window');

export default StyleSheet.create({
  // Parent
  containerWrapper: {
    marginVertical: 10,
  },
  // Input
  inputWrapper: {
    borderBottomWidth: 0.3,
    borderBottomColor: '#e6e6e6',
    paddingBottom: 5,
    marginVertical: 5,
    marginHorizontal: 10,
    paddingRight: 30,
  },
  input: {
    fontSize: 16,
  },
  imageWrapper: {
    position: 'absolute',
    right: 0,
    bottom: 5,
  },
  image: {
    height: 20,
    resizeMode: 'contain',
    tintColor: '#c0c0c0',
  },
  // Password Display Components
  wrapper: {
    marginVertical: 5,
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
