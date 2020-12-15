<script lang="ts">
  import Responsive from '@this/components/Responsive';
  import CalendarIcon from '@this/icons/CalendarIcon';
  import CurrencyDollarIcon from '@this/icons/CurrencyDollarIcon';

  let rootClass = '';
  export { rootClass as class };
  export let transactionDate = null;
  export let product = null;
  export let lineItemTotal = '';
  export let transactionStatus = null;

  const colour = 'blue';
</script>

<Responsive>
  <div slot="sm" class="{rootClass} p-2">
    <div class="flex flex-col">
      <h2 class="text-lg font-medium title-font ml-2">{product}</h2>
      <div class="flex justify-between">
        <span class="inline-flex items-center leading-none text-sm py-1 ml-2">
          <CalendarIcon class="text-{colour}-500 w-5 h-5 mr-1" />
          {transactionDate}
        </span>
        <span class="inline-flex items-center leading-none text-sm py-1 mr-2">
          <CurrencyDollarIcon class="text-{colour}-500 w-5 h-5 mr-1" />
          {lineItemTotal}
          {transactionStatus}
        </span>
      </div>
    </div>
  </div>
  <div slot="else" class="{rootClass} p-2">
    <div class="flex justify-between">
      <div class="flex items-center">
        <h2 class="text-lg font-medium title-font ml-2">{product}</h2>
      </div>
      <div class="flex">
        <span class="mr-2 inline-flex items-center leading-none text-sm py-1">
          <CurrencyDollarIcon class="text-{colour}-500 w-5 h-5 mr-1" />
          {lineItemTotal}
          {transactionStatus}
        </span>
        <span class="mr-2 inline-flex items-center leading-none text-sm py-1">
          <CalendarIcon class="text-{colour}-500 w-5 h-5 mr-1" />
          {transactionDate}
        </span>
      </div>
    </div>
  </div>
</Responsive>
