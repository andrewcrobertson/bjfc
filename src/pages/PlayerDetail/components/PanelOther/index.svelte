<script lang="ts">
  import CardTransaction from '../CardTransaction';
  import CardTransfer from '../CardTransfer';
  export let transfers: any = {};
  export let transactions: any = {};
</script>

<div class="flex flex-wrap sm:p-4">
  <div class="flex flex-wrap sm:p-4 mt-2">
    {#each transfers as { applicationDate, destinationClub }, i}
      <CardTransfer class="w-full border-l border-r border-b border-gray-300 {i === 0 ? 'border-t' : ''}" {applicationDate} {destinationClub} />
    {:else}
      <p class="p-4">There are no transfer records</p>
    {/each}
  </div>
  <div class="flex flex-wrap sm:p-4 mt-2">
    {#each transactions as { transactionDate, product, lineItemTotal, transactionStatus }, i}
      <CardTransaction
        class="w-full border-l border-r border-b border-gray-300 {i === 0 ? 'border-t' : ''}"
        {transactionDate}
        {product}
        {lineItemTotal}
        {transactionStatus} />
    {:else}
      <p class="p-4">There are no transaction records</p>
    {/each}
  </div>
</div>
