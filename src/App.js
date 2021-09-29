import { useState } from "react";
import "./App.css";
import NewGroup from "./component/NewGroup";
import Product from "./component/Product";
import SelectGroup from "./component/SelectGroup";

function App() {
  const [newGroup, setNewGroup] = useState("");
  const [allGroups, setAllGroups] = useState([
    { groupName: "Mobile", id: 1 },
    { groupName: "Computer", id: 2 },
  ]);
  const [selectGroup, setSelectGroup] = useState("");
  const [product, setProduct] = useState([
    { productName: "test", id: 10, groupName: "Mobile" },
  ]);
  const [selectProduct, setSelectProduct] = useState("");

  // useEffect(() => {}, allGroups);
  const changeNewGroupHandler = (e) => {
    setNewGroup({
      groupName: e.target.value,
      id: Math.floor(Math.random() * 1000),
    });
  };
  const submitNewGroupHandler = (e) => {
    e.preventDefault();
    // if (!selectGroup) {
    //   alert("Please Enter Group!");
    //   return;
    // }
    setAllGroups([...allGroups, newGroup]);
    setNewGroup("");
  };

  const submitNewProductHandler = (e) => {
    e.preventDefault();
    if (!selectGroup) {
      alert("Please Select Group!");
      return;
    }

    if (!selectProduct) {
      alert("Please Enter Product");
      return;
    }
    setProduct([
      ...product,
      {
        productName: selectProduct,
        id: Math.floor(Math.random() * 1000),
        groupName: selectGroup,
      },
    ]);
    setSelectProduct("");
  };
  return (
    <div className="App">
      <header>
        <p>Store</p>
      </header>
      <div className="container">
        <div className="boxGroup">
          <NewGroup
            submitNewGroup={submitNewGroupHandler}
            changeNewGroup={changeNewGroupHandler}
          />
         
          <SelectGroup
            allGroups={allGroups}
            setSelectGroup={setSelectGroup}
            SubmitNewProduct={submitNewProductHandler}
            setSelectProduct={setSelectProduct}
            selectGroup={selectGroup}
            selectProduct={selectProduct}
          />
        </div>

        <Product
          product={product}
          selectGroup={selectGroup}
          // setProduct={setProduct}
        />
      </div>
    </div>
  );
}

export default App;
