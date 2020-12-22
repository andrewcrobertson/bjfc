<script lang="ts">
  import AvatarHeading from '@this/components/common/AvatarHeading';
  import DollarLabelledIcon from '@this/components/labelledIcon/DollarLabelledIcon';
  import DateLabelledIcon from '@this/components/labelledIcon/DateLabelledIcon';

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
    <div class="flex justify-between sm:space-x-4 text-sm">
      <DollarLabelledIcon iconClass="text-{colour}-500" text="{total} {status}" />
      <DateLabelledIcon iconClass="text-{colour}-500" {date} />
    </div>
  </div>
</div>
