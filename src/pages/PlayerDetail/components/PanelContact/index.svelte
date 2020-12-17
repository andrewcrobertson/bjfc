<script lang="ts">
  import CardContact from '../CardContact';
  export let contacts: any[] = [];
</script>

<div class="flex flex-wrap sm:p-4">
  {#each contacts as contact}
    <CardContact class="md:w-1/2 w-full p-2 sm:p-4" {contact} />
  {:else}
    <p class="p-4">There are no contacts</p>
  {/each}
</div>
