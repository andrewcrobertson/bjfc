<script lang="ts">
  import CardRecent from '../CardRecent';
  import type { ITeamPlayerRecent } from '../../state';

  let rootClass = '';
  export { rootClass as class };
  export let players: ITeamPlayerRecent[] = [];
</script>

<div class="{rootClass} flex flex-wrap">
  {#each players as player, i}
    <CardRecent class="w-full {i === 0 ? 'border-t' : ''} border-r border-b border-l border-gray-300" {player} />
  {:else}
    <p class="p-4">There are no recent players</p>
  {/each}
</div>
