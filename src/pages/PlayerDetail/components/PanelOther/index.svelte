<script lang="ts">
  import CardTransaction from '../CardTransaction';
  import CardTransfer from '../CardTransfer';
  import type { IClubHistoryRecord, ITransaction } from '../../state';

  export let transfers: IClubHistoryRecord[];
  export let transactions: ITransaction[];
</script>

<div class="sm:py-2">
  <div class="pt-2 pb-8">
    <h1 class="mb-4">Club History</h1>
    {#each transfers as { date, club }, i}
      <CardTransfer class="w-full {i === 0 ? 'border-t' : ''} border-r border-b border-l border-gray-300" {date} {club} />
    {:else}
      <p class="p-4">There is no club history</p>
    {/each}
  </div>

  <div>
    <h1 class="mb-4">Recent Transactions</h1>
    {#each transactions as transaction, i}
      <CardTransaction class="w-full {i === 0 ? 'border-t' : ''} border-r border-b border-l border-gray-300" {transaction} />
    {:else}
      <p>There are no recent transaction records</p>
    {/each}
  </div>
</div>
