<script>
    export let id;
    let pokemon = [];
    let stats = [];
    const fetchData = (async function () {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        pokemon = await response.json();
        stats = pokemon.stats;
        image = pokemon?.sprites?.other["official-artwork"]["front_default"];
    })();
</script>

{#await fetchData}
    <h1>laoding...</h1>
{:then}
    <span>Pokemon {pokemon?.name}</span>
    <img src={image} />
    <h4>Stats:</h4>
    <ul>
        {#each stats as stat}
            <li>{stat.stat.name}: {stat.base_stat}</li>
        {/each}
    </ul>
{/await}
