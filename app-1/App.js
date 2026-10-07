import { StatusBar } from 'expo-status-bar';
import { Button } from 'react-native';
import { TextInput } from 'react-native';
import { StyleSheet, Text, View, ScrollView} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Gandalf </Text>
      <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque varius augue sit amet metus scelerisque, vitae pretium ipsum venenatis. Suspendisse dapibus cursus volutpat. Etiam velit est, faucibus non lacus vitae, ornare molestie turpis. Suspendisse ornare ante in lacus cursus, at varius nisl luctus. Etiam pellentesque libero vitae neque aliquet ultrices. Vestibulum rutrum mauris non turpis placerat, ac tempor massa egestas. Curabitur rhoncus orci eget lectus hendrerit feugiat. Morbi quis aliquet nunc. Nam sed massa egestas, tristique odio sed, finibus lectus. Sed consequat lacus at tincidunt semper. Fusce sem nulla, convallis ut pellentesque quis, sagittis non orci. Donec cursus dolor libero, sit amet convallis ligula sollicitudin ac.

Curabitur faucibus vitae ligula in eleifend. Vestibulum at auctor sapien. Vestibulum bibendum id ex vel tempor. Vivamus urna neque, maximus vel faucibus sed, porttitor a nunc. Aenean ac urna dapibus, scelerisque mi sit amet, efficitur risus. Suspendisse potenti. Maecenas in venenatis libero. Integer eu egestas leo, vel feugiat tortor. Mauris urna orci, porta eu malesuada ultrices, fermentum sit amet sapien. Nulla commodo justo et orci fringilla, nec interdum erat imperdiet. Integer eleifend, turpis eu pharetra fringilla, elit libero elementum erat, ut ultricies dolor eros at eros. Cras porta, felis et dictum accumsan, ipsum diam tincidunt elit, ac ornare risus ex at leo.</Text>
      <Button title='Magia'/> 
      <Image source={{ URL: 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/1-gandalf-the-grey-mike-scott.jpg' }} style={{ width: 400, height: 900 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  title:{
    fontSize: 40,
    fontWeight: 'bold',
    paddingBottom: 150,
    color: '#0a0a0a',
  },

  srcst:{
    backgroundColor: '#dfdfdf',
    maxHeight: 400,
  },

  text: {
    color: '#0a0a0a',
  },

  container: {
    flex: 1,
    backgroundColor: '#d1daab',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 200,

  },
});
