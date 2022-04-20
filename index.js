import react from 'react';
import axios from 'axios';

async function getData(userid) {
    const {data: users} = await axios ("https://jsonplaceholder.typicode.com/users/" + userid);
    const {data: posts} = await axios ("https://jsonplaceholder.typicode.com/posts/" + userid);

    user.posts= [{...post}];
    console.log(user);
};

export default getData;

