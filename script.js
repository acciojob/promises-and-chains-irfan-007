//your JS code here. If required.
const name=document.getElementById("name");
const age=document.getElementById("age");
const btn=document.getElementById("btn");

btn.addEventListener("click",async (e)=>{
	e.preventDefault();
	verifyAge()
		.then((msg)=>alert(msg))
		.catch((error)=>alert(error));
});

function verifyAge() {
	return new Promise((res,rej)=>{
		setTimeout(()=>{
			if(age.value>18)
				res(`Welcome, ${name.value}. You can vote.`);
			else
				rej(`Oh sorry ${name.value}. You aren't old enough.`);
		},4000);
	});
}