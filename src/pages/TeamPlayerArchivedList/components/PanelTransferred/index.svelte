<script lang="ts">
  import CardTransfer from '../CardTransfer';

  let rootClass = '';
  export { rootClass as class };
  export let players: any[] = [];
</script>

<div class="{rootClass} flex flex-wrap">
  {#each players as player, i}
    <CardTransfer class="w-full border-l border-r border-b border-gray-300 {i === 0 ? 'border-t' : ''}" {player} />
  {:else}
    <p class="p-4">There are no transferred players</p>
  {/each}
</div>
