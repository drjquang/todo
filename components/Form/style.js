import { StyleSheet } from "react-native";
import colors from "../../contains/colors";

const styles = StyleSheet.create({
  addTask: {
    bottom: 30,
    paddingHorizontal: 20,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    height: 44,
    width: "80%",
    backgroundColor: colors.background,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: colors.primary,
    paddingHorizontal: 20,
    paddingVertical: 10,
    color: colors.text,
  },
  iconWrapper: {
    height: 44,
    width: 44,
    borderRadius: 44,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: colors.background,
  },
  icon: {
    fontSize: 24,
    color: colors.white,
  },
});

export default styles;
