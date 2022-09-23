import React, {useState} from "react";

function NewTaskForm({addTask, categories}) {
  const [text, setText] = useState('')
  const [category, setCategory] = useState('Code')

  const handleSubmit = (e) => {
    e.preventDefault()
    addTask({ category, text})
  }
  
  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={text} onChange={(e) => setText(e.target.value)} />
      </label>
      <label>
        Category
        <select name="category" value={category} onChange={(e) => setCategory(e.target.value)} >
        {categories.map((c) => {
            return (
              <option key={c} value={c}>
                {c}
              </option>
            );
          })}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
