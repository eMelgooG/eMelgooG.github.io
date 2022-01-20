fetch('https://jsonplaceholder.typicode.com/posts', { method: 'GET', headers: { 'content-type': 'application/json' } })
    .then(data => {
        if (!data.ok) {
            throw Error(data.status);
        }
        return data.json();
    }).then(data => {
        
        var x = document.getElementsByClassName('motto');
        var title = document.createElement('div');
        title.innerHTML = 'Fetch Get method';
        x.appendChild(title);
        for (index = 0; index < data.length; index++) {
            var e = document.createElement('div');
            e.innerHTML = '' + i + '   ' + data[index].title;
            x[0].appendChild(e);
        }
    }).catch(e => {
        console.log(e);
    })