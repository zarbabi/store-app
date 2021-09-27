const SelectGroup = ({ allGroups, setSelectGroup }) => {
  const selectGroupHandler = (e) => {
    setSelectGroup(e.target.value);
    console.log(e.target.value);
  };
  return (
    <>
      <div>
        <select onChange={selectGroupHandler}>
          {allGroups.map((group) => (
            <option key={group.id} value={group.groupName}>
              {group.groupName}
            </option>
          ))}
        </select>
      </div>
      <div>
        <input type="text" placeholder="New Product" />
        <button type="submit">Add</button>
      </div>
    </>
  );
};

export default SelectGroup;
