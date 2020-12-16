<script lang="ts">
  import { background } from '@this/constants/theme';
  import CalendarIcon from '@this/icons/CalendarIcon';
  import LogoutIcon from '@this/icons/LogoutIcon';

  let rootClass = '';
  export { rootClass as class };
  export let player: any = {};

  const footyWebNumber = player.footyWebNumber;
  const initials = player.initials;
  const lastName = player.lastName;
  const firstName = player.firstName;
  const gender = player.gender;
  const club = player.club;
  const lastTransferDate = player.lastTransferDate;
  const url = `/players/${footyWebNumber}/`;
  const colour = background[gender] ?? 'gray';
</script>

<a class="{rootClass} p-2" href={url}>
  <div class="flex flex-col sm:flex-row sm:justify-between">
    <div class="flex items-center space-x-2">
      <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-{colour}-100 text-{colour}-500">{initials}</div>
      <h2 class="text-lg font-medium title-font">{lastName}, {firstName}</h2>
    </div>
    <div class="flex justify-between sm:space-x-4">
      <span class="inline-flex items-center text-sm py-1 ml-2">
        <LogoutIcon class="text-{colour}-500 w-5 h-5 mr-1" />
        {club}
      </span>
      <span class="inline-flex items-center text-sm py-1 mr-2">
        <CalendarIcon class="text-{colour}-500 w-5 h-5 mr-1" />
        {lastTransferDate}
      </span>
    </div>
  </div>
</a>
