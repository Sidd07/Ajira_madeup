import React from 'react';

const ProfileForm = (props) => {
    return (
        <div className="border-all mt-20 mb-20 p-20">  
            <h1 className="width-100 text-left pl-10"> My Profile</h1>
            <form>
            <div className="row">
                <div className="block-50">
                    <input type="text" value={props.value} name="first" placeholder="First Name"  />
                </div>
                <div className="block-50 lg-pl-10">
                    <input type="text" value={props.value} name="last" placeholder="Last Name"   />
                </div>
            </div>
            <div className="row">
                <input type="number" value={props.value} name="phone" placeholder="Phone Number" />
            </div>
            <div className="row">
                <input type="password" value={props.value} name="password" placeholder="Password"  />
            </div>
            <div className="row">
                <input type="password" value={props.value} name="confrim password" placeholder="confrim password"   />
            </div>
            <div className="row"> 
            <div className="block-50 "></div>
            <div className="block-50 ">
            <button className="btn btn-grey float-right "> Add new address </button>
            </div>
            </div>   
          </form>
        </div>
    )

}

export default ProfileForm;
