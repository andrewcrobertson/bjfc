<script lang="ts">
  import Responsive from '@this/components/Responsive';
  import { background } from '@this/constants/theme';
  import CalendarIcon from '@this/icons/CalendarIcon';
  import LogoutIcon from '@this/icons/LogoutIcon';

  let rootClass = '';
  export { rootClass as class };
  export let url = '';
  export let initials = null;
  export let familyName = null;
  export let firstName = '';
  export let gender = null;
  export let club = '';
  export let lastTransferDate = '';

  const colour = background[gender] ?? 'gray';
</script>

<Responsive>
  <a slot="sm" class="{rootClass} p-2" href={url}>
    <div class="flex flex-col">
      <div class="flex items-center">
        <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-{colour}-100 text-{colour}-500">{initials}</div>
        <h2 class="text-lg font-medium title-font ml-2">{familyName}, {firstName}</h2>
      </div>
      <div class="flex justify-between">
        <span class="inline-flex items-center leading-none text-sm py-1 ml-2">
          <LogoutIcon class="w-5 h-5 mr-1 text-{colour}-500" />
          {club}
        </span>
        <span class="inline-flex items-center leading-none text-sm py-1 mr-2">
          <CalendarIcon class="w-5 h-5 mr-1 text-{colour}-500" />
          {lastTransferDate}
        </span>
      </div>
    </div>
  </a>
  <a slot="else" class="{rootClass} p-2" href={url}>
    <div class="flex justify-between">
      <div class="flex items-center">
        <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-{colour}-100 text-{colour}-500">{initials}</div>
        <h2 class="text-lg font-medium title-font ml-2">{familyName}, {firstName}</h2>
      </div>
      <div class="flex">
        <span class="mr-2 inline-flex items-center leading-none text-sm py-1">
          <LogoutIcon class="w-5 h-5 mr-1 text-{colour}-500" />
          {club}
        </span>
        <span class="mr-2 inline-flex items-center leading-none text-sm py-1">
          <CalendarIcon class="w-5 h-5 mr-1 text-{colour}-500" />
          {lastTransferDate}
        </span>
      </div>
    </div>
  </a>
</Responsive>
