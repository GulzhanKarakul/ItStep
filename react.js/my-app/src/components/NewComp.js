import React from 'react';
// import styles from 'NewComp.css';

class NewComp extends React.Component {
    // names=['Joe', 'Mary', 'Abay'];
    render() {
        return (
            <div >
                {
                    this.props.users.map(u=> {
                        return (
                            <div>
                            <h1>{u.name}</h1>
                            <h2>{u.status}</h2>
                             <img  src={u.avatar}></img>
                             <p>{u.netState}</p>
                            </div>
                        )
                    })
                }
            </div>
        )

    }
}

export default NewComp;