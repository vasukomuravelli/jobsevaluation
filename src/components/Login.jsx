import React from "react";
import { Form, Input, Button, Select } from "antd";
import {useDispatch } from "react-redux";
import { LoginLoading, LoginSuccess, LoginFailure } from "../redux/Auth/actions";
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const [details, setDetails] = React.useState({});
    const { Option } = Select;
    const [role, setRole] = React.useState("");    
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const handleChange = (event) => {
        let { id, value } = event.target;
        id = id === "basic_username" ? "email" : "password";
        setDetails({ ...details, [id]: value });
    };

    const userChange = (value) => {
        setRole(value);
        dispatch(LoginLoading);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            fetch("https://reqres.in/api/login", {
                method: "POST",
                body: JSON.stringify(details),
                headers: { "Content-Type": "application/json" },
            }).then((res) => res.json()).then((res) => {
                dispatch(LoginSuccess(role));
                return navigate(-1);
            });
        } catch (e) {
            dispatch(LoginFailure(e));
        }
    };
  return (
    <div>
      <h1>Login</h1>
      <Form
        name="basic"
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
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
          onChange={(e) => handleChange(e)}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
          onChange={(e) => handleChange(e)}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          name="user"
          label="User"
          rules={[{ required: true }]}
          >
          <Select
            placeholder="Select a option and change input text above"
            allowClear
            onChange={userChange}
          >
            <Option value="Admin">Admin</Option>
            <Option value="Client">Client</Option>
          </Select>
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit" onClick={(e)=>handleSubmit(e)}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
