<script lang="ts">
  import Responsive from '@this/components/Responsive';
  import { background } from '@this/constants/theme';
  import CalendarIcon from '@this/icons/CalendarIcon';
  let rootClass = '';
  export { rootClass as class };
  export let url = '';
  export let initials = null;
  export let lastName = null;
  export let firstName = '';
  export let gender = null;
  export let lastTransactionDate = '';

  const colour = background[gender] ?? 'gray';
</script>

<Responsive>
  <a slot="sm" class="{rootClass} p-2" href={url}>
    <div class="flex justify-between">
      <div class="flex items-center">
        <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-{colour}-100 text-{colour}-500">{initials}</div>
        <h2 class="text-lg font-medium title-font ml-2">{lastName}, {firstName}</h2>
      </div>
    </div>
    <span class="flex justify-end items-center leading-none text-sm mr-2 py-1">
      <CalendarIcon class="w-5 h-5 mr-1 text-{colour}-500" />
      Last Transaction:
      {lastTransactionDate === null ? 'Unknown' : lastTransactionDate}
    </span>
  </a>
  <a slot="else" class="{rootClass} p-2" href={url}>
    <div class="flex justify-between">
      <div class="flex items-center">
        <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-{colour}-100 text-{colour}-500">{initials}</div>
        <h2 class="text-lg font-medium title-font ml-2">{lastName}, {firstName}</h2>
      </div>
      <span class="mr-3 inline-flex items-center leading-none text-sm py-1">
        <CalendarIcon class="w-5 h-5 mr-1 text-{colour}-500" />
        Last Transaction:
        {lastTransactionDate === null ? 'Unknown' : lastTransactionDate}
      </span>
    </div>
  </a>
</Responsive>
