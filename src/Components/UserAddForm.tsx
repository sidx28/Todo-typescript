import { ChangeEvent, FC, memo, useState } from "react";
import Button from "../BasicComponents/Button";
import { GoPlus } from "react-icons/go";
import Input from "../BasicComponents/Input";
import { connect } from "react-redux";
import { todoAdd } from "../action/todos";

type UserAddFormProps = { onSubmit: (todoText: string) => void };

const UserAddForm: FC<UserAddFormProps> = ({ onSubmit }) => {
  const [showTodoForm, updateShowTodoForm] = useState(false);

  const [inputValue, setInputValue] = useState("");

  const handleShowTodoForm = () => {
    updateShowTodoForm(!showTodoForm);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  const handleSubmit = () => {
    onSubmit(inputValue);
    setInputValue("");
    handleShowTodoForm();
  };

  return (
    <form>
      {!showTodoForm && (
        <Button
          theme="highlight"
          icon={<GoPlus />}
          onClick={handleShowTodoForm}
        >
          Add A Todo
        </Button>
      )}
      {showTodoForm && (
        <div className="flex flex-col items-start p-8 space-y-4 ">
          <h4>Create a Todo</h4>
          <Input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            className="rounded-md border bg-gray-200"
          />
          <div className="flex flex-row space-x-2">
            <Button onClick={handleSubmit}>Save</Button>
            <Button theme="secondary" onClick={handleShowTodoForm}>
              Cancel
            </Button>
          </div>
        </div>
      )}
    </form>
  );
};

UserAddForm.defaultProps = {};

export default connect(undefined, { onSubmit: todoAdd })(memo(UserAddForm));
