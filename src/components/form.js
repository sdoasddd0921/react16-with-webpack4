import React from 'react';
import { Form, Select, Input, Icon, Button } from 'antd';
import '../css/input-form.css';
const Field = Form.Item;
const Option = Select.Option;

const getRequired = (type) => ({
  required: true, message: `Please enter your ${type}`
});

class InputForm extends React.Component {
  submitHandler = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values from Form.', values);
      }
    })
  }
  render() {
    const { getFieldDecorator } = this.props.form;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8, offset: 1 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 12 },
      },
    };

    const tailFormItemLayout = {
      wrapperCol: {
        xs: { span: 24, offset: 0 },
        sm: { span: 16, offset: 9 },
      },
    };

    return (
      <Form className="info-form" onSubmit={ this.submitHandler }>
        <Field
          {...formItemLayout}
          label="username"
        >
          {getFieldDecorator('username', {
            rules: [getRequired('username')]
          })(
            <Input />
          )}
        </Field>
        <Field
          {...formItemLayout}
          label="userID"
        >
          {getFieldDecorator('userID', {
            rules: [getRequired('userID')]
          })(
            <Input />
          )}
        </Field>
        <Field
          {...formItemLayout}
          label="gender"
        >
          {getFieldDecorator('gender', {
            initialValue: 'Secrecy'
          })(
            <Select>
              <Option value='Secrecy'>Secrecy</Option>
              <Option value='Male'>Male</Option>
              <Option value='Famale'>Famale</Option>
            </Select>
          )}
        </Field>
        <Field {...tailFormItemLayout}>
          <Button type='primary' htmlType='submit' >Submit</Button>
        </Field>
      </Form>
    );
  }
}


export default Form.create()(InputForm);