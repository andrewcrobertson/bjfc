<script lang="ts">
  import CardActive from '../CardActive';
  let rootClass = '';
  export { rootClass as class };
  export let players: any[] = [];
</script>

<div class="{rootClass} flex flex-wrap">
  {#each players as { footyWebNumber, initials, lastName, firstName, gender, status }, i}
    <CardActive
      class="w-full border-l border-r border-b border-gray-300 {i === 0 ? 'border-t' : ''}"
      {initials}
      {lastName}
      {firstName}
      {gender}
      {status}
      url="/players/{footyWebNumber}/" />
  {:else}
    <p class="p-4">There are no active players</p>
  {/each}
</div>
