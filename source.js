import reduceWithValueKey from "@unction/reducewithvaluekey"

export default function reduceKeys (unction: AccumulatedType => KeyType => AccumulatedType): Function {
  return reduceWithValueKey(
    (accumulated: AccumulatedType): Function =>
      (): Function =>
        (key: KeyType): AccumulatedType => unction(accumulated)(key)
  )
}
