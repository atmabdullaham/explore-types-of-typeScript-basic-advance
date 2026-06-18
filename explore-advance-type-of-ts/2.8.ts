// promise
// simulate

const createpromise = () => {
  return new Promise<string>((resolve, reject) => {
    const data = "something";
    if (data) {
      resolve(data);
    } else {
      reject("faild to load data");
    }
  });
};

// calling create promise function
const showData = async (): Promise<string> => {
  const data: string = await createpromise();
  return data;
};

showData();

const getTodo = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await res.json();
  return data;
};

getTodo();
