<script lang="ts">
  import CalendarIcon from '@this/icons/CalendarIcon';
  import CurrencyDollarIcon from '@this/icons/CurrencyDollarIcon';

  let rootClass = '';
  export { rootClass as class };
  export let transactionDate = null;
  export let product = null;
  export let lineItemTotal = '';
  export let transactionStatus = null;
  export let colour = 'gray';
</script>

<div class="{rootClass} p-2">
  <div class="flex flex-col sm:flex-row sm:justify-between">
    <h2 class="text-lg font-medium title-font ml-2">{product}</h2>
    <div class="flex justify-between sm:space-x-4">
      <span class="inline-flex items-center text-sm py-1 ml-2">
        <CurrencyDollarIcon class="text-{colour}-500 w-5 h-5 mr-1" />
        {lineItemTotal}
        {transactionStatus}
      </span>
      <span class="inline-flex items-center text-sm py-1 mr-2">
        <CalendarIcon class="text-{colour}-500 w-5 h-5 mr-1" />
        {transactionDate}
      </span>
    </div>
  </div>
</div>
