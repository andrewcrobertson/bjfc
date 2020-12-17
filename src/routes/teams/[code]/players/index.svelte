<script lang="ts" context="module">
  export async function preload(page, session) {
    const { code } = page.params;
    return { code };
  }
</script>

<script lang="ts">
  import { onMount } from 'svelte';
  import TeamPlayerCurrentListPage from '@this/pages/TeamPlayerCurrentList';
  export let code: string = null;

  onMount(() => window.scrollTo(0, 0));
</script>

<TeamPlayerCurrentListPage {code} />
