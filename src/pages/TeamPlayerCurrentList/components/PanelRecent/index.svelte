<script lang="ts">
  import CardGeneral from '../CardGeneral';
  let rootClass = '';
  export { rootClass as class };
  export let players: any[] = [];
</script>

<div class="{rootClass} flex flex-wrap">
  {#each players as { footyWebNumber, initials, lastName, firstName, gender, lastTransactionDate }, i}
    <CardGeneral
      class="w-full border-l border-r border-b border-gray-300 {i === 0 ? 'border-t' : ''}"
      {initials}
      {lastName}
      {firstName}
      {gender}
      {lastTransactionDate}
      url="/players/{footyWebNumber}/" />
  {:else}
    <p class="p-4">There are no recent players</p>
  {/each}
</div>
