
import reduceKeys from "./index.ts";

test(() => {
  expect(
    reduceKeys((accumulation) => (current) => `${accumulation}/${current}`)(".")(["a", "b", "c"])
  ).toBe("./0/1/2");
});

test(() => {
  expect(
    reduceKeys((accumulation) => (current) => `${accumulation}/${current}`)(".")({
      aaa: "a",
      bbb: "b",
      ccc: "c",
    })
  ).toBe("./aaa/bbb/ccc");
});
