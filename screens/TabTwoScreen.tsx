import * as React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function TabTwoScreen() {
  const [readMore, setReadMore] = React.useState(true);

  const description = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
 aliquid hic pariatur eligendi dolorem illo corporis, laboriosam unde
 fugiat. Fugiat autem illum  et doloribus, rem sint iste quisquam iure
 consectetur? Lorem ipsum dolor sit amet consectetur adipisicing elit.
 Corporis, odio ab maiores quae asperiores ut eum natus illo, incidunt
 temporibus recusandae eius accusantium. Culpa voluptas tenetur omnis
 molestias perspiciatis laborum! Lorem ipsum dolor sit amet consectetur
 adipisicing elit. Voluptatibus aliquid hic pariatur eligendi dolorem
 illo corporis, laboriosam unde fugiat. Fugiat autem illum et doloribus,
 rem sint iste quisquam iure consectetur? Lorem ipsum dolor sit amet
 consectetur adipisicing elit. Corporis, odio ab maiores quae asperiores
 ut eum natus illo, incidunt temporibus recusandae eius accusantium.
 Culpa voluptas tenetur omnis molestias perspiciatis laborum!`;

  const descriptionSubString = description.substring(0, 35);

  const handlerClickText = () => setReadMore(!readMore);

  return (
    <View style={styles.container}>
      <Text>{readMore ? `${descriptionSubString}...` : description}</Text>

      <Text style={{ color: "blue" }} onPress={handlerClickText}>
        {readMore ? `read more` : `read less`}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
