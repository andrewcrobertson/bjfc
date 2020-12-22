<script lang="ts">
  import AvatarHeading from '@this/components/common/AvatarHeading';
  import DollarLabelledIcon from '@this/components/labelledIcon/DollarLabelledIcon';
  import CalendarLabelledIcon from '@this/components/labelledIcon/CalendarLabelledIcon';

  let rootClass = '';
  export { rootClass as class };
  export let transaction: any = {};

  const initials = transaction.year;
  const text = transaction.product;
  const colour = 'gray';
</script>

<div class="{rootClass} p-2">
  <div class="flex flex-col sm:flex-row sm:justify-between">
    <AvatarHeading {colour} {initials} {text} />
    <div class="flex justify-between sm:space-x-4 text-sm">
      <DollarLabelledIcon iconClass="text-{colour}-500" label="{transaction.total} {transaction.status}" />
      <CalendarLabelledIcon iconClass="text-{colour}-500" label={transaction.date} />
    </div>
  </div>
</div>
