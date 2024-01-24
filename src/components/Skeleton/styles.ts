import styled from "styled-components";

export const SkeletonStyledText = styled.div`
  background: linear-gradient(90deg, #f3f3f3 25%, #e0e0e0 50%, #f3f3f3 75%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
  width: 100%;
  height: 20px;
  margin-top: 10px;
`;
