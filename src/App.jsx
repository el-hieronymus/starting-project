import PostsList from './components/PostsList';
import MainHeader from './components/MainHeader';

import { useState } from 'react';

function App() {
  const [postFormVisibility, setPostFormVisibility] = useState(false);

  function openPostFormHandler() {
    setPostFormVisibility(true);
  }
  
  function closePostFormHandler() {
    setPostFormVisibility(false);
  }

 return (
  <>
    <MainHeader onNewPost={openPostFormHandler} />
    <main>
      <PostsList
       onNewPost={postFormVisibility} 
       isStopPosting={closePostFormHandler} />
    </main>
  </>
  );
}

export default App;
