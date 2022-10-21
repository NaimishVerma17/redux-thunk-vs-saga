const getUsers = () => {
    return fetch('https://randomuser.me/api/?results=10',{  method: 'GET' });
};

export default getUsers;
