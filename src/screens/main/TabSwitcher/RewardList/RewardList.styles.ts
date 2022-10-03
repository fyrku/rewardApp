import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  listContainer: {
    paddingTop: 10,
    backgroundColor: '#fff',
  },
  itemContainer: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginVertical: 10,
  },
  avatar: {
    height: 40,
    width: 40,
    borderRadius: 20,
    marginRight: 15,
  },
  message: {
    fontWeight: 'bold',
    marginBottom: 10,
    fontSize: 15,
    lineHeight: 18,
  },
  rewardDescription: {
    fontWeight: 'bold',
    fontSize: 11,
    lineHeight: 15,
  },
  date: {
    fontWeight: 'bold',
    fontSize: 11,
    lineHeight: 15,
  },
});
