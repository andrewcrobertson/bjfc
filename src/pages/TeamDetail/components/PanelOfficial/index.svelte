<script lang="ts">
  import CardNoOfficial from '../CardNoOfficial';
  import CardOfficial from '../CardOfficial';
  export let officials: any[] = [];
</script>

<div class="flex flex-wrap sm:p-4">
  {#each officials as { role, official }}
    {#if official === null}
      <CardNoOfficial class="md:w-1/2 w-full p-2 sm:p-4" {role} />
    {:else}
      <CardOfficial class="md:w-1/2 w-full p-2 sm:p-4" {role} {official} />
    {/if}
  {:else}
    <p class="p-4">There are no officials</p>
  {/each}
</div>
