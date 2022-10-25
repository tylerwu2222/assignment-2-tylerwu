import MainTaskCount from "../MainTaskCount/MainTaskCount";
import './SearchBar.css';

const dummyTasks = [30, 5]

const SearchBar = (searchTerm) => {
    return (
        <div className="item1">
            <span className="centered-span">
                <img src="img\menu.svg" id="menu-bars" className="top-nav-icon"></img>
                <span className="search-container">
                    <img src="img\search.svg" id="search-icon" className="top-nav-icon" />
                    <input type="text" id="search-bar" placeholder="Quick Find" size="20" />
                </span>
            </span>
            <MainTaskCount allCount={dummyTasks[0]} spaceCount={dummyTasks[1]} />
        </div>
    )
}

export default SearchBar;