<script lang="ts">
  import CurrencyDollarIcon from '@this/icons/CurrencyDollarIcon';

  let rootClass = '';
  export { rootClass as class };
  export let transactionDate = null;
  export let product = null;
  export let lineItemTotal = '';
  export let transactionStatus = null;

  const colour = 'blue';
</script>

<div class="{rootClass} p-2">
  <div class="flex justify-between">
    <div class="flex items-center">
      <h2 class="text-lg font-medium title-font ml-2">{product} {transactionDate}</h2>
    </div>
    <span class="mr-3 inline-flex items-center leading-none text-sm py-1">
      <CurrencyDollarIcon class="w-5 h-5 mr-1 text-{colour}-500" />
      {lineItemTotal}
      {transactionStatus}
    </span>
  </div>
</div>
