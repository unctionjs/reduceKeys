import reduceWithValueKey from "@unction/reducewithvaluekey";
export default function reduceKeys(unction) {
  return reduceWithValueKey(accumulated => () => key => unction(accumulated)(key));
}
