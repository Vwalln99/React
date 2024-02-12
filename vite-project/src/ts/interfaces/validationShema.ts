import * as yup from "yup";

const movieShema = yup
  .object({
    title: yup
      .string()
      .required("Title is required")
      .min(2, "Title must have min. 2 chars")
      .max(30, "Title must have max. 30 chars"),
    director: yup.string().required("Director is required"),
    runtime: yup.number().required("Runtime is required"),
  })
  .required();

export default movieShema;
