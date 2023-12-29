import React from "react";
import { connect } from "react-redux";
import './UserComp.css'

const UserComp = ({ user }) => {
    return (
        <div class="user-card">
            <h1>User Information ID:{user.id}</h1>
            <div class="user-details">
                <div class="user-detail">
                    <h2>Name:</h2>
                    <p>{user.name}</p>
                </div>
                <div class="user-detail">
                    <h2>Username:</h2>
                    <p>{user.username}</p>
                </div>
                <div class="user-detail">
                    <h2>Email:</h2>
                    <p>{user.email}</p>
                </div>
                <div class="user-detail">
                    <h2>Phone:</h2>
                    <p>{user.phone}</p>
                </div>
            </div>
            <div class="user-address">
                <h2>Address:</h2>
                <p>{user.address.city}, {user.address.zipcode}</p>
                <p>{user.address.street}, {user.address.suite}</p>
            </div>
            <div class="user-company">
                <h2>Company:</h2>
                <p>{user.company.name}</p>
                <p>bs: {user.company.bs}</p>
                <p>Catchphrase: {user.company.catchPhrase}</p>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        
    }
}
  
const mapDispatchToProps = {
    
}
  
export default connect(mapStateToProps, mapDispatchToProps)(UserComp);