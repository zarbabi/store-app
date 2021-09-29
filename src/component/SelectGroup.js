import React from "react";

const SelectGroup = ({
  allGroups,
  setSelectGroup,
  SubmitNewProduct,
  setSelectProduct,
  selectProduct,
}) => {
  const selectGroupHandler = (e) => {
    setSelectGroup(e.target.value);
  };

  const selectProductHandler = (e) => {
    setSelectProduct(e.target.value);
  };

  return (
    <div  className="formControl" >
      <div >
        <select onChange={selectGroupHandler}>
          <option value="Default">Select</option>
          {allGroups.map((group) => (
            <option key={group.groupName}>{group.groupName}</option>
          ))}
        </select>
      </div>
      <div>
        <input
          type="text"
          placeholder="New Product"
          value={selectProduct}
          onChange={selectProductHandler}
          id="selectProduct"
        />
        <button type="submit" onClick={SubmitNewProduct}>
          Add
        </button>
      </div>
    </div>
  );
};

export default SelectGroup;
