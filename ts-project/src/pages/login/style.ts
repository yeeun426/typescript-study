import styled from "styled-components";
import { Card } from "antd";

const LoginPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f0f2f5;
`;

const LoginFormContainer = styled(Card)`
  min-width: 300px;
  margin-bottom: 20% !important;
  .ant-card-head {
    text-align: center !important;
    font-size: 1.5rem !important;
  }
`;

export { LoginPageContainer, LoginFormContainer };
