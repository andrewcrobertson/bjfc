<script lang="ts">
  import CardActive from '../CardActive';
  export let members: any[] = [];
</script>

<div class="flex flex-wrap sm:p-4">
  {#each members as { footyWebNumber, initials, familyName, firstName, gender, paidThisSeason }, i}
    <CardActive
      class="w-full border-l border-r border-b border-gray-300 {i === 0 ? 'border-t' : ''}"
      {initials}
      {familyName}
      {firstName}
      {gender}
      {paidThisSeason}
      url="/members/{footyWebNumber}" />
  {:else}
    <p class="p-4">There are no active players</p>
  {/each}
</div>
