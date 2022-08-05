import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {createPostAsync} from './postSlice';

function PostForm() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  function submitHandler(e:any) {
    e.preventDefault();
    const formData = {
      post: {
        title: title,
        body: body,
      }
    }
    dispatch(createPostAsync(formData));
    resetState();
  }

  function resetState() {
    setTitle('');
    setBody('');
  }
  
  return <div>
    <h1 className="text-center">Write An Article</h1>
    <form>
      <div className="form-group">
        <input
          type="text"title='...'
          placeholder ="Add a title..."
          className="form-control text-start my-4 w-50 py-3"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="form-control text-start my-4 w-50"
          name="body"
          placeholder= "Add a body..."
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <button
          type="submit"
          className= "btn-danger btn my-4 w-50 py-3"
          onClick={(e) => submitHandler(e)}>Submit</button>
      </div>
    </form>
  </div>;
}

export default PostForm;
