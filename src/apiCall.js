
export const getusers = async () => {
    try {
      const response  = await fetch('https://jsonplaceholder.typicode.com/users');
      const result = await response.json();
  
      return result;
  
    } catch (error) {
        console.log(error);
        return 'failed'
    }
} 

export const adduser = async () => {

    const userData = {
        "id": crypto.randomUUID(),
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
            }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
        }
    }

    try {
        await fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            body: JSON.stringify(userData),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
        });

        return userData
    }
    catch(error) {
        console.log(error);
        return 'failed post user'
    }
}

