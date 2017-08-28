/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type */
import {test} from "tap"

import reduceKeys from "./index"

test(({equal, end}) => {
  equal(
    reduceKeys((accumulation) => (current) => `${accumulation}/${current}`)(".")(["a", "b", "c"]),
    "./0/1/2"
  )

  end()
})

test(({equal, end}) => {
  equal(
    reduceKeys((accumulation) => (current) => `${accumulation}/${current}`)(".")({
      aaa: "a",
      bbb: "b",
      ccc: "c",
    }),
    "./aaa/bbb/ccc"
  )

  end()
})
