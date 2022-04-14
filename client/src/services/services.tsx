import { Link, Typography } from "@mui/material";
import MySnackbar from "../components/Snackbar/MyScanckbar";

//* Convert resBlob to base64
const blobToData = (blob: any) => {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.readAsDataURL(blob);
  });
};

// File array to string array
export const fileToStringArray = async (arr: any) => {
  let newArr: any = [];
  for (const file of arr) {
    if (file !== "") {
      const resData = await blobToData(file);
      newArr.push(resData);
    }
  }
  if (newArr.length === 0) newArr = [""];
  return newArr;
};

// error/success function
export const successAndErrorInfo = (
  successAndError: any,
  setSuccessAndError: any
) => {
  if (successAndError.success) {
    return (
      <MySnackbar
        status="success"
        message={successAndError.success}
        setSuccessAndError={setSuccessAndError}
      />
    );
  } else if (successAndError.error) {
    return (
      <MySnackbar
        status="error"
        message={successAndError.error}
        setSuccessAndError={setSuccessAndError}
      />
    );
  }
};

// Average rating function
export const averageRating = (array: any) => {
  let averageRating = 0;
  if (array != null || undefined) {
    array.forEach(
      (item: { rate: number }) => (averageRating = item.rate + averageRating)
    );
  }

  averageRating = averageRating / array.length;
  return averageRating;
};

// export const countDuplicatesInArray = (arr: string[]) => {
//   const result = arr.reduce((accumulator: any, value: any) => {
//     return { ...accumulator, [value]: (accumulator[value] || 0) + 1 };
//   }, {});
//   return result;
// };

export const countItemInArray = (arr: string[], item: string) => {
  const count = arr.filter((x: string) => x === item).length;
  return count;
};

export const Copyright = (props: any) => {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://ecommerceeasy.herokuapp.com/">
        ecommerceeasy
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};
