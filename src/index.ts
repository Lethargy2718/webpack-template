console.log("started");

const promise: Promise<any> = new Promise((resolve) =>
    setTimeout(() => resolve(5), 2000),
);
promise
    .then((data) => {
        console.log(data);
        return data * 2;
    })
    .finally(() => console.log("done"));
