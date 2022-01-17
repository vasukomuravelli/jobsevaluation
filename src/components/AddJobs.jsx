import React from "react";
import {
    Form,
    Input,
    Button,
} from 'antd';

import { addJobLoading, addJobSuccess, addJobError } from "../redux/admin/Actions";

import {nanoid} from "nanoid";

import { useDispatch } from "react-redux";

import { Link } from "react-router-dom";

export const AddJobs = () => {
    
    const [jobs, setJobs] = React.useState("");
    const handleChange = (event) => {
        let { id, value } = event.target;
        setJobs({ ...jobs, [id]: value , id : nanoid(5)});
    };
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        dispatch(addJobLoading());
        try {
            dispatch(addJobSuccess(jobs));            
        } catch (e) {
            dispatch(addJobError(e));
        }
    }
    
    return (
        <div>
        <Form
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      autoComplete="off"
    >
      <Form.Item
        label="Company"
        name="Company"
        rules={[
          {
            required: true,
            message: 'Please input your Comapany name!',
          },
                ]}
                onChange={(e) => handleChange(e)}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Job"
        name="Job"
        rules={[
          {
            required: true,
            message: 'Please input your Job Title!',
          },
                ]}
                onChange={(e) => handleChange(e)}
      >
        <Input />
            </Form.Item>
            <Form.Item
        label="Salary"
        name="Salary"
        rules={[
          {
            required: true,
            message: 'Please input your Salary range!',
          },
                ]}
                onChange={(e) => handleChange(e)}
      >
        <Input />
            </Form.Item>
            <Form.Item
        label="Description"
        name="Description"
        rules={[
          {
            required: true,
            message: 'Please input your Job Description!',
          },
                ]}
                onChange={(e) => handleChange(e)}
      >
        <Input />
            </Form.Item>
            <Form.Item
        label="Location"
        name="Location"
        rules={[
          {
            required: true,
            message: 'Please input your Location!',
          },
                ]}
                onChange={(e) => handleChange(e)}
      >
        <Input />
            </Form.Item>    
            <Form.Item
        label="JobType"
        name="JobType"
        rules={[
          {
            required: true,
            message: 'Please input your Job Type!',
          },
                ]}
                onChange={(e) => handleChange(e)}
      >
        <Input />
            </Form.Item>  
            
      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit" onClick = {(e)=>handleSubmit(e)}>
          Submit
        </Button>
      </Form.Item>
            </Form>
            <Link to="/"><button>Go To HomePage</button></Link>
            </div>
    )
}