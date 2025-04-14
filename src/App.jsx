import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Stuffs from './Stuffs.jsx';
import MyDemo from './MyDemo.jsx';
import Clock from "./Clock.jsx"
function App(){
  
  return(
    <>
    <Clock/>
      <Header/>
      <Footer/>
      <MyDemo/>
      <Stuffs name="Bob Smith" title="CEO"/>
      <Stuffs name = "Sue Jones" title="CFO"/>
      <Stuffs name = "Catherine Jones" title="Teacher"/>
    </>
  );
}
export default App
