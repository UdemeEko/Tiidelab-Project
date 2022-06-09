// 1. API Url
const url = "https://jsonplaceholder.typicode.com/users";

// 2. Fetch users from the API Url 
function fetchUsers(){
    // Make use of the browesr Fetch API 
    fetch(url)
        .then((response)=>response.json())
        .then(data=>{
            // 2.2 Passing the user data to the renderUsers function
            renderUsers(data);
         });
}

// 3. Render the users in the DOM
function renderUsers(usersData){
    console.log(usersData);
    const ul = document.getElementById("user-list-container");
    console.log(ul);

    //3.1 Render an li tag for each of the users
    usersData.forEach((user, index)=> {
        console.log(user, index);
        const li = document.createElement("li");
        li.innerHTML = `
        <span>${index + 1}.</span>
        <span>${user.name}</span>
        <span>-</span>
        <span class="username">${user.username}</span>
        `;
        //3.2Append the current user li tag to the UL tag
        ul.appendChild(li);
    });
}

// 4. Add a search function to the DOM
function searchUsersByUsername(){
    const input = document.getElementById("search");
    const ul = document.getElementById("user-list-container");
    const inputValue = input.value.toUpperCase();
    // console.log(input);
    // console.log(inputValue);
    // console.log(ul);
    const usersList =ul.querySelectorAll("li"); 
    // array of all the li tags []

    // console.log(usersList.[2]);

    // Loop through all the users  and render the ones that match the saerch
    // for( let i = 0; i < usersList.length)
     for (let index = 0; index < usersList.length; index++){
     const usernameSpanTag = usersList[index].querySelector(".username");
     const usernameSpanTagValue = usernameSpanTag.innerText.toUpperCase();
     const isMatch = usernameSpanTagValue.indexOf(inputValue) > -1;
     
     if(isMatch){
         usersList[index].style.display = "block";
     }else {
         usersList[index].style.display = "none";
     }
    //  console.log(usernameSpanTagValue.indexOf(inputValue));
    //  console.log(usernameSpanTagValue.indexOf(inputValue) > -1);
    //  if(usernameSpanTagValue)
     
    
    }

}

// Calling the fetch function
fetchUsers();

