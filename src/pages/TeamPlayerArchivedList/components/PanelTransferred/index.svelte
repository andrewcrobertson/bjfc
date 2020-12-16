<script lang="ts">
  import CardTransfer from '../CardTransfer';
  let rootClass = '';
  export { rootClass as class };
  export let members: any[] = [];
</script>

<div class="{rootClass} flex flex-wrap sm:p-4">
  {#each members as { footyWebNumber, initials, lastName, firstName, gender, club, lastTransferDate }, i}
    <CardTransfer
      class="w-full border-l border-r border-b border-gray-300 {i === 0 ? 'border-t' : ''}"
      {initials}
      {lastName}
      {firstName}
      {gender}
      {club}
      {lastTransferDate}
      url="/players/{footyWebNumber}/" />
  {:else}
    <p class="p-4">There are no transferred players</p>
  {/each}
</div>
