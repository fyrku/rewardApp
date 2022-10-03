import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#000',
    alignItems: 'center',
    paddingHorizontal: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  title: {
    color: '#fff',
    marginVertical: 30,
    fontSize: 17,
    letterSpacing: 0.6,
  },
  giveButton: {
    width: '80%',
    height: 50,
    borderRadius: 25,
    backgroundColor: '#fff',
    marginBottom: 200,
  },
  crossButton: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    backgroundColor: '#000',
  },
});
