import { useState } from "react";

export const useForm = (intialValue: any) => {
    const [values, setValues] = useState(intialValue);
    return [
      values,
      (e: any) => {
        setValues({
          ...values,
          [e.target.name]: e.target.value,
        });
      },
    ];
  };