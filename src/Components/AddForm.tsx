import { ChangeEvent, FC, memo, useState } from "react";
import Button from "../BasicComponents/Button";
import { GoPlus } from "react-icons/go";
import Input from "../BasicComponents/Input";
import { connect } from "react-redux";
import { userAdd } from "../action/user";

type AddFormProps = {
  type: string;
  onSubmit: (text: string) => void;
};

const AddForm: FC<AddFormProps> = ({ onSubmit, type }) => {
  const [showForm, updateShowForm] = useState(false);

  const [inputValue, setInputValue] = useState("");

  const handleShowForm = () => {
    updateShowForm(!showForm);
    setInputValue("");
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  const handleSubmit = () => {
    onSubmit(inputValue);
    setInputValue("");
    handleShowForm();
  };

  return (
    <form>
      {!showForm && (
        <Button theme="highlight" icon={<GoPlus />} onClick={handleShowForm}>
          Add A {type}
        </Button>
      )}
      {showForm && (
        <div className="flex flex-col items-start p-8 space-y-4 ">
          <h4>Create a {type}</h4>
          <Input
            autoFocus
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            className="rounded-md border bg-gray-200"
          />
          <div className="flex flex-row space-x-2">
            <Button onClick={handleSubmit}>Save</Button>
            <Button theme="secondary" onClick={handleShowForm}>
              Cancel
            </Button>
          </div>
        </div>
      )}
    </form>
  );
};

AddForm.defaultProps = {};

export default memo(AddForm);
const userFormMapper = () => ({ type: "User" });
export const AddUserForm = connect(userFormMapper, { onSubmit: userAdd })(
  AddForm
);
