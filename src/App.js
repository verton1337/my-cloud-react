
import React, {useState, useEffect} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import EditPage from "./pages/EditPage";
import MainPage from "./pages/MainPage";
import { ContentContext } from "./context";
import axios from 'axios'

function App() {
  const [content, setContent] = useState([])

    async function fetchContent(){
        const response = await axios.get("https://jsonplaceholder.typicode.com/photos?_limit=16")
        setContent(response.data)

    }
    useEffect(
        ()=>{fetchContent()},
        [])
  return (
    <ContentContext.Provider value={{content, setContent}}>      
      <Header />
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<MainPage/>}> </Route>
          <Route path="/edit/:id" element={<EditPage/>}> </Route>
          <Route path="*" element={<MainPage />}></Route>
      </Routes>
      </BrowserRouter>
    </ContentContext.Provider>
  );
}

export default App;
