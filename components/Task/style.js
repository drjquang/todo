import { StyleSheet } from "react-native";
import colors from "../../contains/colors";

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    backgroundColor: colors.white,
    marginBottom: 15,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "space-between",
  },
  square: {
    width: 48,
    height: 36,
    borderRadius: 10,
    // backgroundColor: colors.second,
    alignItems: "center",
    justifyContent: "center",
  },
  even: { backgroundColor: colors.green },
  odd: { backgroundColor: colors.second },
  number: {
    color: colors.white,
    fontSize: 20,
  },
  content: {
    width: "80%",
    fontSize: 20,
  },
});

export default styles;
