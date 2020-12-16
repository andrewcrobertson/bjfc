<script lang="ts">
  import CardHistorical from '../CardHistorical';
  let rootClass = '';
  export { rootClass as class };
  export let players: any[] = [];
</script>

<div class="{rootClass} flex flex-wrap">
  {#each players as { footyWebNumber, initials, lastName, firstName, gender, lastTransactionDate }, i}
    <CardHistorical
      class="w-full border-l border-r border-b border-gray-300 {i === 0 ? 'border-t' : ''}"
      {initials}
      {lastName}
      {firstName}
      {gender}
      {lastTransactionDate}
      url="/players/{footyWebNumber}/" />
  {:else}
    <p class="p-4">There are no historical players</p>
  {/each}
</div>
