<script lang="ts">
  import CardTransfer from '../CardTransfer';
  export let members: any[] = [];
</script>

<div class="flex flex-wrap sm:p-4">
  {#each members as { footyWebNumber, initials, familyName, firstName, gender, club }, i}
    <CardTransfer
      class="w-full border-l border-r border-b border-gray-300 {i === 0 ? 'border-t' : ''}"
      {initials}
      {familyName}
      {firstName}
      {gender}
      {club}
      url="/members/{footyWebNumber}/" />
  {:else}
    <p class="p-4">There are no transferred players</p>
  {/each}
</div>
