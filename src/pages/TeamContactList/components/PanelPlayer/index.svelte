<script lang="ts">
  import CardPlayer from '../CardPlayer';
  import type { ITeamPlayer } from '../../state';

  let rootClass = '';
  export { rootClass as class };
  export let players: ITeamPlayer[] = [];
  export let heading = '';
  export let emptyMessage = '';
</script>

<div class={rootClass}>
  <h2>{heading}</h2>
  {#each players as player, i}
    <CardPlayer class="w-full pt-1 pl-4" {player} />
  {:else}
    <p class="p-4">{emptyMessage}</p>
  {/each}
</div>
