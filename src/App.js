
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes, useParams } from 'react-router-dom';
import './App.css';
import Container from './components/Container/Container';
import { fetchResultData } from './store/actions';

function App() {
  const dispatch = useDispatch()


  useEffect(() => {
     dispatch(fetchResultData())
  } ,[dispatch ])

  return (
    <div className="App">
      <Routes>
          <Route  path='/*' element={<Container />} />    
      </Routes>
      
    </div>
  );
}

export default App;
