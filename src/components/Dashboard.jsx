import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { applyJobLoading, applyJobSuccess, applyJobError } from "../redux/client/actions";
import { Link } from "react-router-dom";

export const Dashboard = () => {
    const { loading, error, jobs } = useSelector((state) => ({ loading: state.AdminState.loading, error: state.AdminState.error, jobs: state.AdminState.jobs }));
    const {role} = useSelector((state)=>({role  : state.AuthState.userState}))
    const dispatch = useDispatch();

    const apply= (id)=>{
        dispatch(applyJobLoading());
        try {
            dispatch(applyJobSuccess(id));            
        } catch (e) {
            dispatch(applyJobError());        
        }
        
    }

    console.log("role", role);

    return loading ? <div>...Loading</div> : error ? <div>Something went wrong !</div> : (
        <div>
            {jobs.map((e) => (<div key={e.id}>
                <div>
                    <p >{e.Company}</p>
                    <p style={{display : "inlineBlock"}}>{e.Job}</p>
                    <p style={{display : "inlineBlock"}}>{e.Salary}</p>
                    <p>{e.Description}</p>
                    <p style={{display : "inlineBlock"}}>{e.Location}</p>
                    <p style={{display : "inlineBlock"}}>{e.JobType}</p>
                </div>
                <div>
                    <button onClick={()=>apply(e.id)}>Apply</button>
                </div>
            </div>))}
            {role==="Admin" ? <Link to="/addjobs"><button>Add Jobs</button></Link> : null}
        </div>
    )
}