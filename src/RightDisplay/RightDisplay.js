import AddTask from '../AddTask/AddTask';
import Task from '../Task/Task'
import './RightDisplay.css'

// strikethrough text
const completeTask = (i) => {
    console.log('task' + i + ' COMPLETED');
    return true;
};

// take tasks from Left Space --> populate tasks
const RightDisplay = ({ tasks }) => {
    return (
        <>
            <div className="item3">
                <section id="right-content-section">
                    <h1>Inbox (to replace)</h1>
                    <ul className='right-display-list'>
                        {
                            tasks.map((task, i) => {
                                return (
                                    <Task
                                        key={i}
                                        taskDescription={task}
                                        value={task}
                                        onCheckFn={(i) => {
                                            console.log('clicked' + i);
                                            completeTask(i);
                                        }
                                        } />
                                )
                            })
                        }
                        <AddTask />
                    </ul>
                </section>
            </div>
        </>
    )
};

export default RightDisplay;