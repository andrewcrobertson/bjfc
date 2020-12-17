<script lang="ts">
  import CardContact from '../CardContact';
  export let contacts: any[] = [];
</script>

<div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
  {#each contacts as contact}
    <CardContact class="w-full" {contact} />
  {:else}
    <p class="p-4">There are no contacts</p>
  {/each}
</div>
