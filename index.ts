import reduceWithValueKey from "@unction/reducewithvaluekey";
import {ReducerFunctionType} from "./types";

export default function reduceKeys<A, B, C, D> (unction: ReducerFunctionType<A, B | C, D>) {
  return reduceWithValueKey((accumulated: A) => () => (key: B) => unction(accumulated)(key));
}
