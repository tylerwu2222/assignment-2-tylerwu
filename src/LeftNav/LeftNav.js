import Space from "../Space/Space";
import './LeftNav.css'
import '../App.css'

const openSpace = (task) => {
    return task
}

const LeftNav = ({ spaces, subspaces }) => {
    return (
        <>
            <div className="item2">
                <section id="left-nav-section">
                    <ul className="left-nav-list left-nav-list-main">
                        {
                            spaces.map(space => {
                                return (
                                    <Space onClickFn={() => openSpace(space)} name={space.name} icon={space.icon} count={space.count} colorClass={space.colorClass} />
                                )
                            })
                        }
                        <hr className="left-nav-hr"></hr>
                        <li>
                            <span id="work-span">
                                <img src="img\caret-down.svg" className="left-nav-icon caret" />
                                <img src="img\dot.svg" className="grey-icon left-nav-icon" />
                                Work
                            </span>
                            <ul className="left-nav-list left-nav-dropdown">

                                {
                                    subspaces.map((subspace, i) => {
                                        return (
                                            <Space key={i} onClickFn={() => { }} name={subspace.name} icon={subspace.icon} count={subspace.count} colorClass={subspace.colorClass} />
                                        )
                                    })
                                }

                            </ul>
                        </li>
                        <li>
                            <span id="personal-span">
                                <img src="img\caret-down.svg" className="left-nav-icon caret" />
                                <img src="img\dot.svg" className="grey-icon left-nav-icon" />
                                Personal
                                <span className="task-count">28</span>
                            </span>
                        </li>
                        <li>
                            <span>
                                <img src="img\plus.svg" className="red-icon left-nav-icon" />
                                Add Project
                            </span>
                        </li>
                    </ul>
                </section>
            </div>
        </>
    )
};

export default LeftNav;