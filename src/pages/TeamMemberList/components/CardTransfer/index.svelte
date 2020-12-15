<script lang="ts">
  import { background } from '@this/constants/theme';
  import CalendarIcon from '@this/icons/CalendarIcon';
  import LogoutIcon from '@this/icons/LogoutIcon';

  let rootClass = '';
  export { rootClass as class };
  export let url = '';
  export let initials = null;
  export let lastName = null;
  export let firstName = '';
  export let gender = null;
  export let club = '';
  export let lastTransferDate = '';

  const colour = background[gender] ?? 'gray';
</script>

<a class="{rootClass} p-2" href={url}>
  <div class="flex flex-col sm:flex-row sm:justify-between">
    <div class="flex items-center space-x-2">
      <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-{colour}-100 text-{colour}-500">{initials}</div>
      <h2 class="text-lg font-medium title-font">{lastName}, {firstName}</h2>
    </div>
    <div class="flex justify-end space-x-2">
      <span class="inline-flex items-center leading-none text-sm py-1">
        <LogoutIcon class="w-5 h-5 mr-1 text-{colour}-500" />
        {club}
      </span>
      <span class="inline-flex items-center leading-none text-sm py-1">
        <CalendarIcon class="w-5 h-5 mr-1 text-{colour}-500" />
        {lastTransferDate}
      </span>
    </div>
  </div>
</a>
