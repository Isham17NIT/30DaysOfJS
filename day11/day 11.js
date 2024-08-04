// Activity 1: Understanding Promises

// * Task 1: Create a promise that resolves with a message after a 
// 2-second timeout and log the message to the console
//Solution :
let promise1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("message executed successfully");
    },2000);
    
});
promise1.then((res)=>{
    console.log(res);
});
//output : message executed successfully

// • Task 2: Create a promise that rejects with an error message after a 
// 2-second timeout and handle the error using catch()
//Solution :
let promise2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("some error has occured");
    },2000);
});
promise2.catch((err)=>{
    console.log(err);
});
//output : some error has occured

// Activity 2: Chaining Promises

// * Task 3: Create a sequence of promises that simulate fetching data 
// from a server. Chain the promises to log messages in a specific order.
//Solution :
const fetchData = (data)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(data);
            resolve("All data has been fetched!");
        },2000); 
    });
    
};

console.log("data1 fetching in progress..");
fetchData(1).then(()=>{
    console.log("data2 fetching in progress..");
    fetchData(2).then(()=>{
        console.log("data 3 fetching in progress..");
        fetchData(3).then((msg)=>{
            console.log(msg);
        });
    });
});
/*output : 
data1 fetching in progress..
1
data2 fetching in progress..
2
data3 fetching in progress..
3
All data has been fetched!
*/

// Activity 3: Using Async/Await 

// • Task 4: Write an async function that waits for a promise to resolve 
// and then logs the resolved value. 
//Solution :
const fun1 = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("I have been successfully executed!");
        },2000);
    });
}
(async function (){
    const prm = await fun1();
    console.log(prm);
})();

//output : I have been successfully executed!

// Task 5: Write an async function that handles a rejected promise 
// using try-catch and logs the error message.
//Solution :
const fun2 = ()=>{
    return new Promise((resolve,reject)=>{
        reject("Some error has been detected");
    })
}
(async function()
{
    try 
    {
        await fun2();
    } 
    catch (err) 
    {
        console.log(err);
    }
})();
//output : Some error has been detected

//  Activity 4: Fetching Data from an API

// Task 6: Use the fetch API to get data from a public API and log the 
// response data to the console using promises.
//Solution :
const url = 'https://weather-api138.p.rapidapi.com/weather?city_name=Fergana';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '50920d862amsh183ad305193748dp1d2eb2jsnb6d30ebed125',
		'x-rapidapi-host': 'weather-api138.p.rapidapi.com'
	}
};

const fun3 = ()=>{
    return new Promise((resolve,reject)=>{
        fetch(url,options).then((message)=>{
            message.json().then((data)=>{
            resolve(data);
            })
        }).then((message)=>{
            console.log(message);
        })
    })
};

//  Task 7: Use the fetch API to get data from a public API and log the
//  response data to the console using async/await.
//Solution :
(async function(){
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.log("error generated");
    }
    })()

//  Activity 5: Concurrent Promises

// Task 8: Use Promise.all to wait for multiple promises to resolve and 
// then log all their values. 
//Solution :
function asyncFunc(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("successful");
        },4000);
    });
};

const x=fun1();
const y=asyncFunc();
Promise.all([x,y]).then((values)=>{
    console.log(values);
});
//output
//[ 'I have been successfully executed!', 'successful' ]

// Task 9: Use Promise.race to log the value of the first promise that 
// resolves among multiple promises.
//Solution :
Promise.race([x,y]).then((values)=>{
    console.log(values);
});


