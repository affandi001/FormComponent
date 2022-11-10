
// Form.tsx
import React, { useState } from "react";
import Input from "../Common/inputfield";
import Button from "../Common/Button";


function Form() {
  const [nameInput, setNameInput] = useState("");
  const onChange = (str: string) => {
    setNameInput(str);
  };

  return (
    <>
    <form>
      <Input
        onChange={onChange}
        name="name"
        placeholder="Enter your name"
        value={nameInput} />
    </form>
    <Button value="Complete Checkout" />
    </>
  );
}

export default Form;