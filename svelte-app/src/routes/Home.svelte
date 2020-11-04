<script>
    import { onMount } from "svelte";
    import { Link } from "svelte-routing";
    let pokemons = [];
    onMount(async function () {
        const response = await fetch(
            "https://pokeapi.co/api/v2/pokemon?limit=10"
        );
        const json = await response.json();
        pokemons = json.results.map((pokemon) => {
            const id = pokemon.url.split('/').reverse()[1]
            return { ...pokemon, id }
        })
    });
</script>

<h1>Choose your Pokémon</h1>
<ul>
    {#each pokemons as pokemon}
        <li><Link to="pokemon/{pokemon.id}">{pokemon.name}</Link></li>
    {/each}
</ul>
