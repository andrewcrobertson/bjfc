<script lang="ts">
  import CardGuardian from '../CardGuardian';
  export let guardians: any[] = [];
</script>

<div class="flex flex-wrap sm:p-4">
  {#each guardians as guardian}
    <CardGuardian class="md:w-1/2 w-full p-2 sm:p-4" {guardian} />
  {:else}
    <p class="p-4">There are no guardians</p>
  {/each}
</div>
