<script lang="ts">
	import { Router, Route } from "svelte-routing";
	import Home from "./routes/Home.svelte";
	export let url = "";
</script>

<Router {url}>
	<div>
		<Route path="/">
			<Home />
		</Route>
	</div>
</Router>
