<script lang="ts">
	import { Router, Route } from "svelte-routing";
	import Home from "./routes/Home.svelte";
	import Pokemon from "./routes/Pokemon.svelte"
  export let url = "";
</script>

<Router {url}>
	<div>
    <Route path="/pokemon/:id" component="{Pokemon}" />
		<Route path="/" component="{Home}" />
	</div>
</Router>
