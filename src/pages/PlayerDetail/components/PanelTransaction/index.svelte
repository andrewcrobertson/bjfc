<script lang="ts">
  import CardTransaction from '../CardTransaction';
  export let records: any[] = [];
</script>

<div class="flex flex-wrap sm:p-4 mt-2">
  {#each records as { transactionDate, product, lineItemTotal, transactionStatus }, i}
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
