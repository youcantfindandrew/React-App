import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Stuff from './Stuff.jsx';
import MyDemo from './MyDemo.jsx';
import Clock from "./Clock.jsx"
function App(){
  
  return(
    <>
    <Clock/>
      <Header/>
      <Footer/>
      <MyDemo/>
      <Stuff name="Bob Smith" title="CEO"/>
      <Stuff name = "Sue Jones" title="CFO"/>
      <Stuff name = "Catherine Jones" title="Teacher"/>
    </>
  );
}
export default App
