import { ChangeEvent, FC, memo, useState } from "react";
import Button from "../BasicComponents/Button";
import { GoPlus } from "react-icons/go";
import Input from "../BasicComponents/Input";
import { connect } from "react-redux";
import { todoAdd } from "../action/todos";
import { useParams } from "react-router-dom";

type AddTodoFormProps = {
  type: string;
  userName: string;
  onSubmit: (text: string, userName: string) => void;
};

const AddTodoForm: FC<AddTodoFormProps> = ({ onSubmit, type, userName }) => {
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
    onSubmit(inputValue, userName);
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

AddTodoForm.defaultProps = {};

const todoFormMapper = () => ({ type: "Todo" });

export default connect(todoFormMapper, { onSubmit: todoAdd })(
  memo(AddTodoForm)
);
