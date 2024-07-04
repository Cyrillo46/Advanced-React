import people from "../../../data";

const List = ({ people }) => {
  console.log(people);
  return (
    <div>
      <h1>Hi</h1>
      {people.map((person) => (
        <h3>{person.name}</h3>
      ))}
    </div>
  );
};
export default List;
