import { useEffect } from 'react';
import './App.css';
import SearchBar from './SearchBar/SearchBar';
import LeftNav from './LeftNav/LeftNav';
import RightDisplay from './RightDisplay/RightDisplay';

const spaces = [
  {name: 'Inbox', count:5, icon: 'img/inbox.svg', colorClass: 'blue-icon'},
  {name: 'Today', count:3, icon: 'img/calendar.svg', colorClass: 'green-icon'},
  {name: 'Upcoming', count:4, icon: 'img/calendar_day.svg', colorClass: 'purple-icon'},
  {name: 'Projects', count:"", icon: 'img/caret-down.svg'}
];

const subspaces = [
  {name: 'New Brand', count:9, icon: 'img/dot.svg', colorClass: 'yellow-icon'},
  {name: 'Website Update', count:11, icon: 'img/person.svg', colorClass: 'blue-icon'},
  {name: 'Product Roadmap', count:11, icon: 'img/person.svg', colorClass: 'red-icon'},
  {name: 'Meeting Agenda', count:6, icon: 'img/person.svg', colorClass: 'green-icon'}
];

const tasks = [
  'Do 1 thing',
  'Do another thing',
  'Do last thing'
]


function App() {
  useEffect(()=>{
    console.log('setting title');
    document.title = 'Tyler HW 2'
  })

  return (
    <div className="App">
      <div className="grid-container">
        <SearchBar />
        <LeftNav spaces={spaces} subspaces={subspaces}/>
        <RightDisplay tasks={tasks} />
      </div>
    </div>
  );
}

export default App;
