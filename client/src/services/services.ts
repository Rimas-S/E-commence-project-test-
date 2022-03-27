
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