import _ from "lodash";

export default function totalPaid([...payments]) {
  let total = [...payments].map(Number);
  return _.sum(total);
}
