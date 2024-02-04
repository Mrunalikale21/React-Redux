import { useState } from 'react'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import Header from '../components/Header'
import Footer from '../components/CreatePost'
import Sidebar from '../components/Sidebar'
import PostListProvider from '../store/post-list-store'
import { Outlet } from 'react-router-dom'

function App() {
  const [selectedTab, setSelectedTab] = useState("Home")

  return (
    
    <PostListProvider>
    <div className='app-container'>
      <Sidebar selectedTab={selectedTab}
      setSelectedTab={setSelectedTab}></Sidebar>
      <div className='content'>
      <Header></Header>
     <Outlet></Outlet>
      <Footer></Footer>
      </div>
      </div>
      </PostListProvider>
      
      
    
  )
}

export default App