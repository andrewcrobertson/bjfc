<script lang="ts">
  import CardTransfer from '../CardTransfer';
  export let records: any[] = [];
</script>

<div class="flex flex-wrap sm:p-4 mt-2">
  {#each records as { applicationDate, sourceClub, destinationClub }, i}
    <CardTransfer class="w-full border-l border-r border-b border-gray-300 {i === 0 ? 'border-t' : ''}" {applicationDate} {destinationClub} />
  {:else}
    <p class="p-4">There are no transfer records</p>
  {/each}
</div>
