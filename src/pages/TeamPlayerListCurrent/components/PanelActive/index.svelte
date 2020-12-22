<script lang="ts">
  import CardActive from '../CardActive';
  import type { ITeamPlayerActive } from '../../state';

  let rootClass = '';
  export { rootClass as class };
  export let players: ITeamPlayerActive[] = [];
</script>

<div class="{rootClass} flex flex-wrap">
  {#each players as player, i}
    <CardActive class="w-full {i === 0 ? 'border-t' : ''} border-r border-b border-l border-gray-300" {player} />
  {:else}
    <p class="p-4">There are no active players</p>
  {/each}
</div>
