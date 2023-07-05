import { data } from "../../../data.js";

const UseStateArray = () => {
  const [people, setPeople] = useState(data);

  return (
    <div>
      {people.map((person) => {
        const { id, name } = person;
        return <h4 key={id}>{name}</h4>;
      })}
    </div>
  );
};

export default UseStateArray;
