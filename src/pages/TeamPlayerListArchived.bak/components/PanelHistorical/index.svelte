<script lang="ts">
  import CardHistorical from '../CardHistorical';

  let rootClass = '';
  export { rootClass as class };
  export let players: any[] = [];
</script>

<div class="{rootClass} flex flex-wrap">
  {#each players as player, i}
    <CardHistorical class="w-full {i === 0 ? 'border-t' : ''} border-r border-b border-l border-gray-300" {player} />
  {:else}
    <p class="p-4">There are no historical players</p>
  {/each}
</div>
