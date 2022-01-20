fetch('https://jsonplaceholder.typicode.com/posts', { method: 'GET', headers: { 'content-type': 'application/json' } })
    .then(data => {
        if (!data.ok) {
            throw Error(data.status);
        }
        return data.json();
  
    }).then(data => {
        var x = document.getElementsByClassName('motto');
        for (index = 0; index < 10; index++) {
            var link = document.createElement('a');
            link.setAttribute('href', 'https://www.google.com');
            link.textContent = data[index].title;
            x[0].appendChild(link);

        }
    }).catch(e => {
        console.log(a);
    })