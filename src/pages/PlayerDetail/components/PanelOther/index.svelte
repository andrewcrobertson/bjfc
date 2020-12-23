<script lang="ts">
  import Disability from '@this/components/common/Disability';
  import CardTransaction from '../CardTransaction';
  import CardClubHistory from '../CardClubHistory';
  import type { IClubHistoryRecord, ITransaction, IDisability } from '../../state';

  export let colour = 'gray';
  export let disability: IDisability;
  export let clubHistory: IClubHistoryRecord[];
  export let transactions: ITransaction[];
</script>

<div class="sm:py-2">
  {#if disability !== null}
    <Disability class="pt-6" iconClass="text-{colour}-500" type={disability.type} notes={disability.notes} />
    <hr class="mt-1 mb-1 border border-gray-300 border-t-0" />
  {/if}

  <div class="pt-6">
    <h1 class="font-medium mb-4">Club History</h1>
    {#each clubHistory as { date, club }, i}
      <CardClubHistory class="w-full {i === 0 ? 'border-t' : ''} border-r border-b border-l border-gray-300" {date} {club} />
    {:else}
      <p class="text-sm">There is no club history</p>
    {/each}
  </div>
  <div class="pt-6">
    <h1 class="font-medium mb-4">Recent Transactions</h1>
    {#each transactions as transaction, i}
      <CardTransaction class="w-full {i === 0 ? 'border-t' : ''} border-r border-b border-l border-gray-300" {transaction} />
    {:else}
      <p class="text-sm">There are no recent transaction records</p>
    {/each}
  </div>
</div>
