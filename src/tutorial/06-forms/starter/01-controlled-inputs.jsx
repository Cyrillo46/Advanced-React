import useState from 'react'

const ControlledInputs = () => {
const [value, setValue] = useState()
  return (
    // - setup state values
// - add value and onChange to each input
// - setup onSubmit
    <>
      <form action="">
        <div>
          <h4>Controlled Inputs</h4>
          <label htmlFor=""></label>
          <input type="text"  value="" onChange={}/>
        </div>
        <div>
          <h4></h4>
          <label htmlFor="email"></label>
          <input type="email" />
        </div>
        <button type="submit"></button>
      </form>
      <h2>Submit</h2>
    </>
  );
};
export default ControlledInputs;
