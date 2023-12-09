import people from "../../../data";

const List = ({ people }) => {
  console.log(people);
  return <div>Hello{people.map((person) => person.name)}</div>;
};
export default List;
