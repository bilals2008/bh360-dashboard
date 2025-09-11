// File: d:\backup\OneDrive\Desktop\NDS\src\hooks\usePath.js
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

export const usePath = () => {
  const navigate = useNavigate();

  // function for go to path
  const goto = useCallback(
    (path) => {
      navigate(path);
    },
    [navigate]
  );

  // function for back
  const back = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  //   function for next step means forward
  const forward = useCallback(() => {
    navigate(1);
  }, [navigate]);

  return { goto, back, forward };
};
