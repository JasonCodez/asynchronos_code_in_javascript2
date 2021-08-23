// #1
let baseURL = "http://numbersapi.com/";

let favNum = async function() {
   let { data } = await axios.get(`${baseURL}13?json`)
   console.log(data.text);
}
// ***********************************************

// #2



let multNums = async function() {

   const ul1 = document.querySelector("#list1");
   let num1Promise = axios.get(`${baseURL}1?json`)
   let num2Promise = axios.get(`${baseURL}2?json`)
   let num3Promise = axios.get(`${baseURL}3?json`)
   let num4Promise = axios.get(`${baseURL}4?json`)

   let num1 = await num1Promise;
   let num2 = await num2Promise;
   let num3 = await num3Promise;
   let num4 = await num4Promise;

   let numArray = [num1, num2, num3, num4];

   for(let i = 0; i < numArray.length; i++) {
      let li = document.createElement("li");
      li.innerText = `The number ${numArray[i].data.text}`;
      ul1.appendChild(li);
   }

}

multNums()
// **************************************************

// #3

let multFacts = async function() {

   const ul2 = document.querySelector("#list2");
   let num1Promise = axios.get(`${baseURL}13?json`)
   let num2Promise = axios.get(`${baseURL}13?json`)
   let num3Promise = axios.get(`${baseURL}13?json`)
   let num4Promise = axios.get(`${baseURL}13?json`)

   let num1 = await num1Promise;
   let num2 = await num2Promise;
   let num3 = await num3Promise;
   let num4 = await num4Promise;

   let numArray = [num1, num2, num3, num4];

   for(let i = 0; i < numArray.length; i++) {
      let li = document.createElement("li");
      li.innerText = `The number ${numArray[i].data.text}`;
      ul2.appendChild(li);
   }

}

multFacts()