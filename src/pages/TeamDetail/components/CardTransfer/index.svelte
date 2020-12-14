<script lang="ts">
  import { background } from '@this/constants/theme';
  import LogoutIcon from '@this/icons/LogoutIcon';

  export let url = '';
  export let initials = null;
  export let familyName = null;
  export let firstName = '';
  export let gender = null;
  export let club = '';

  const colour = background[gender] ?? 'gray';
</script>

<a class="w-full p-2" href={url}>
  <div class="border border-gray-300 p-2 rounded-lg">
    <div class="flex justify-between">
      <div class="flex items-center">
        <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-{colour}-100 text-{colour}-500">{initials}</div>
        <h2 class="text-lg font-medium title-font ml-2">{familyName}, {firstName}</h2>
      </div>
      <span class="mr-3 inline-flex items-center leading-none text-sm py-1">
        <LogoutIcon class="w-5 h-5 mr-1 text-{colour}-500" />
        {club}
      </span>
    </div>
  </div>
</a>
