const getData = async () => {
    try {
        const url = "https://jsonplaceholder.typicode.com/users/1";
        
        const request = await fetch(url);
        if (!request.ok) {
            throw new Error(`Response status: ${request.status}`);
        }

        const response = await request.json();
        console.log(response);

        const item = document.querySelector("#usuario-card"); 

        item.querySelector("img").src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150";
        item.querySelector(".nombre-usuario").textContent = response.name;
        item.querySelector(".username").textContent = "@" + response.username;
        item.querySelector(".email").textContent = response.email;
        item.querySelector(".empresa").textContent = response.company.name;
        item.querySelector(".ciudad").textContent = response.address.city;
        item.querySelector(".web").textContent = response.website;

    } catch (error) {
        console.log("Error: ", error);
    }
}

getData();