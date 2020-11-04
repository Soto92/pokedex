<script>
    import { onMount } from "svelte";

    let pokemons = [];
    onMount(async function () {
        const response = await fetch(
            "https://pokeapi.co/api/v2/pokemon?limit=10"
        );
        const json = await response.json();
        pokemons = json.results;
    });
</script>

<h1>Choose your Pokémon</h1>
<ul>
    {#each pokemons as pokemon}
        <li>{pokemon.name}</li>
    {/each}
</ul>
