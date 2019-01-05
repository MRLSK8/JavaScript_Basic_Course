axios.get('https://api.github.com/users/mrlsk8')
    .then(function(response) {
        console.log(response.data.name);
    })
    .catch(function(error){
        console.warn(error);
    });
