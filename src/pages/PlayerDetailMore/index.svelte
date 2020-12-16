<script lang="ts">
  import AvatarHeading from '@this/components/AvatarHeading';
  import { pageTitleStore as pageTitle } from '@this/layouts/StandardLayout';
  import CardTransaction from './components/CardTransaction';
  import CardTransfer from './components/CardTransfer';
  import players from './data';
  export let code: string = null;

  const player = players[code];
  const footyWebNumber = player.footyWebNumber;
  const colour = 'gray';
  pageTitle.set('Player (More)');
</script>

<div class="max-w-6xl mx-auto xl:py-24">
  <div class="flex flex-col sm:flex-row sm:justify-between pb-5">
    <AvatarHeading class="flex items-center space-x-2" {colour} text="{player.firstName} {player.lastName}" />
    <div class="flex justify-end items-center text-sm mr-2 py-1">
      <a class="text-sm border border-gray-300 px-3 py-1" href="/players/{footyWebNumber}/">Main</a>
    </div>
  </div>
  <div class="flex flex-wrap sm:p-4 mt-2">
    {#each player.transfers as { applicationDate, sourceClub, destinationClub }, i}
      <CardTransfer class="w-full border-l border-r border-b border-gray-300 {i === 0 ? 'border-t' : ''}" {applicationDate} {destinationClub} />
    {:else}
      <p class="p-4">There are no transfer records</p>
    {/each}
  </div>
  <div class="flex flex-wrap sm:p-4 mt-2">
    {#each player.transactions as { transactionDate, product, lineItemTotal, transactionStatus }, i}
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
