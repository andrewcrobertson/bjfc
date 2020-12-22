<script lang="ts">
  import { background } from '@this/constants/theme';
  import CalendarIcon from '@this/components/icon/CalendarIcon';

  let rootClass = '';
  export { rootClass as class };
  export let player: any = {};

  const footyWebNumber = player.footyWebNumber;
  const initials = player.initials;
  const lastName = player.lastName;
  const firstName = player.firstName;
  const gender = player.gender;
  const lastTransactionDate = player.lastTransactionDate;
  const url = `/players/${footyWebNumber}/`;
  const colour = background[gender] ?? 'gray';
</script>

<a class="{rootClass} p-2" href={url}>
  <div class="flex flex-col sm:flex-row sm:justify-between">
    <div class="flex items-center space-x-2">
      <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-{colour}-100 text-{colour}-500">{initials}</div>
      <h2 class="text-lg font-medium title-font">{lastName}, {firstName}</h2>
    </div>
    <span class="flex justify-end items-center text-sm mr-2 py-1">
      <CalendarIcon class="w-5 h-5 mr-1 text-{colour}-500" />
      Last Transaction:
      {lastTransactionDate === null ? 'Unknown' : lastTransactionDate}
    </span>
  </div>
</a>
