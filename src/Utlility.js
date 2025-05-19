


export function fileReadUtil(selectedFile, fileType) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      const fileContent = event.target.result;
      const rows = fileContent.split('\n').map(row => row.split(','));
      resolve(rows);
    };
    reader.onerror = (error) => {
      reject(error);
    };
    reader.readAsText(selectedFile);
  });
}

export function isValidData(key,value) {
    if (key === "name") {
      return value.length > 0;
    } else if (key === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(value);
    } else if (key === "phone") {
      const phoneRegex = /^\d{10}$/;
      return phoneRegex.test(value);
    }
    else if (key === "eductaion") {
      return value.length > 0;
    } else if (key === "experience") {
      return value.length > 0;
    }
    return false;
  }