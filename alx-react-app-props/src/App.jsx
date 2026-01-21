import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WelcomeMessage from './components/WelcomeMessage'
import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import UserProfile from './components/UserProfile'
import ProfilePage from './components/ProfilePage';
import UserContext from './UserContext';



function App() {
  const [count, setCount] = useState(0)
  const userData = {
    name: "Jane Doe", 
    email: "jane.doe@example.com",
    age: 25,
    bio: "Loves hiking and photography"
  };


  return (
    <>
      <UserContext.Provider value={userData}>
        <div>
          <WelcomeMessage />
          <UserProfile />
          <ProfilePage />
          <Header />
          <MainContent />
          <Footer />
        </div>
      </UserContext.Provider>
      <div className="card">
        <button onClick={() => setCount(count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App
