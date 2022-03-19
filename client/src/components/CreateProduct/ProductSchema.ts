import * as Yup from "yup";

export const productSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too short")
      .max(50, "Too long name")
      .required("Requared"),
    price: Yup.number()
      .typeError("must be number")
      .positive("price must be greater than zero"),
    image: Yup.array().of(
      Yup.mixed()
        .test("fileType", "Unsupported File Format", function (value) {
          const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/png"];
          return value ? SUPPORTED_FORMATS.includes(value.type) : true;
        })
        .test("fileSize", "File Size is more than 1MB", (value) => {
          const sizeInBytes = 1000000; //1MB
          return value ? value.size <= sizeInBytes : true;
        })
    ),
    quantity: Yup.number()
      .typeError("must be number")
      .min(0, "quantiry must be positive number"),
  });