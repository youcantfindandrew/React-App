//import PropTypes from 'prop-types';
function Stuff({name = "Employee Man",
    title = "Worker",}){
    return(
        <div className="myCard">
        <img src="https://placehold.co/150x150" className="cardPic" ></img>
        <i><h3>{name}</h3></i>
        <p>{title}</p>
        </div>
    );
}
export default Stuff
