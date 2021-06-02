import React from "react";
import Loader from "react-loader-spinner";
import { usePromiseTracker } from "react-promise-tracker";
const Loading = () => {
  const { promiseInProgress } = usePromiseTracker();
  return (
    promiseInProgress && (
      <div className="loader">
        <Loader types="ThreeDots" color="#2B4D68" height="100" width="100" />
      </div>
    )
  );
};

export default Loading;
