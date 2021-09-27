
const NewGroup = ({ changeNewGroup, submitNewGroup }) => {


  return (
    <form>
      <input type="text" placeholder="New Group" onChange={changeNewGroup} />
      <button type="submit" onClick={submitNewGroup}>
        Add
      </button>
    </form>
  );
};

export default NewGroup;
