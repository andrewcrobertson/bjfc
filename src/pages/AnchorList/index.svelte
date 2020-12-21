<script lang="ts">
  import type { IState } from './state';
  export let state: IState = null;
  const links = state.links;
</script>

<ul>
  {#each links as link}
    <li><a href={link}>{link}</a></li>
  {/each}
</ul>
