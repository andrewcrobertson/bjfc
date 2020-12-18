<script lang="ts">
  import CardTransaction from '../CardTransaction';
  import CardTransfer from '../CardTransfer';
  export let transfers: any = {};
  export let transactions: any = {};
</script>

<div class="sm:py-2">
  <div class="pt-2 pb-8">
    <h1 class="mb-4">Club History</h1>
    {#each transfers as { date, club }, i}
      <CardTransfer class="w-full border-l border-r border-b border-gray-300 {i === 0 ? 'border-t' : ''}" {date} {club} />
    {:else}
      <p class="p-4">There is no club history</p>
    {/each}
  </div>

  <div>
    <h1 class="mb-4">Recent Transactions</h1>
    {#each transactions as transaction, i}
      <CardTransaction class="w-full border-l border-r border-b border-gray-300 {i === 0 ? 'border-t' : ''}" {transaction} />
    {:else}
      <p>There are no recent transaction records</p>
    {/each}
  </div>
</div>
