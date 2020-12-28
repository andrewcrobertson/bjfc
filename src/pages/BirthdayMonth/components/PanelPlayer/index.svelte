<script lang="ts">
  import CardPlayer from '../CardPlayer';
  import type { IStatePlayer } from '../../state';

  let rootClass = '';
  export { rootClass as class };
  export let players: IStatePlayer[] = [];
  export let emptyMessage = '';
</script>

<div class="{rootClass} flex flex-wrap">
  {#each players as player, i}
    <CardPlayer class="w-full {i === 0 ? 'border-t' : ''} border-r border-b border-l border-gray-300" {player} />
  {:else}
    <p class="p-4">{emptyMessage}</p>
  {/each}
</div>
