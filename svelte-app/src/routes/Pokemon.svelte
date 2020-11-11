<script>
    import { onMount } from "svelte";
    export let id;
    let pokemon = [];
    let stats = [];
    onMount(async function () {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        pokemon = await response.json();
        stats = pokemon.stats
    });
</script>

<span> Pokemon {pokemon?.name} </span>
<h4>Stats:</h4>
<ul>
    {#each stats as stat}
       <li>{stat.stat.name}: {stat.base_stat}</li>
    {/each}
</ul>
