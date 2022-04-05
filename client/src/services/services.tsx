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
