async function fetchpikachu(){
    try
    {
        const pokemonname = document.getElementById("pokemonname").value.toLowerCase();
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonname}`);


        if(!response.ok){
            throw new Error(` Don't know about this pokemon`)
        }


        const data = await response.json();
        const pokemonsprite=data.sprites.front_default;
        const imgelement=document.getElementById("pokemonimg");

        imgelement.src=pokemonsprite;
        imgelement.style.display = "block"




    }catch(error){

        console.log(error);

    }
}