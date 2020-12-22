<script lang="ts">
  import AvatarHeading from '@this/components/AvatarHeading';
  import CalendarIcon from '@this/icons/CalendarIcon';
  import CurrencyDollarIcon from '@this/icons/CurrencyDollarIcon';

  let rootClass = '';
  export { rootClass as class };
  export let transaction: any = {};

  const date = transaction.date;
  const year = transaction.year;
  const product = transaction.product;
  const total = transaction.total;
  const status = transaction.status;
  const colour = 'gray';
</script>

<div class="{rootClass} p-2">
  <div class="flex flex-col sm:flex-row sm:justify-between">
    <AvatarHeading {colour} initials={year} text={product} />
    <div class="flex justify-between sm:space-x-4">
      <span class="inline-flex items-center text-sm py-1 ml-2">
        <CurrencyDollarIcon class="text-{colour}-500 w-5 h-5 mr-1" />
        {total}
        {status}
      </span>
      <span class="inline-flex items-center text-sm py-1 mr-2">
        <CalendarIcon class="text-{colour}-500 w-5 h-5 mr-1" />
        {date}
      </span>
    </div>
  </div>
</div>
