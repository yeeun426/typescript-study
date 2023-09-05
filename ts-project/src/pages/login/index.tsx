import { FC, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Checkbox, Form, Input, message } from "antd";
import { MailTwoTone, LockTwoTone } from "@ant-design/icons";
import * as S from "./style"; 

const LoginPage: FC = () => {
  const navigate = useNavigate();

  return (
    <S.LoginPageContainer>
      <S.LoginFormContainer title="project">
        <Form>
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Please Input your id" }]}
            children={
              <Input
                autoComplete="username"
                placeholder="Enter ID"
                suffix={<MailTwoTone twoToneColor="#6F68B5" />}
              />
            }
          />
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please Input your password" }]}
            children={
              <Input
                autoComplete="current-password"
                type="password"
                placeholder="Password"
                suffix={<LockTwoTone twoToneColor="#6F68B5" />}
              />
            }
          />
          <Form.Item
            name="remember"
            valuePropName="checked"
            initialValue="true"
            children={<Checkbox children={"Remember Me"} />}
          />
          <Form.Item
            children={
              <Button
                // loading={loginStatusLoading}
                block
                htmlType="submit"
                type="primary"
                children={"Login"}
              />
            }
          />
        </Form>
      </S.LoginFormContainer>
    </S.LoginPageContainer>
  );
};

export default LoginPage;
