<script lang="ts">
  import { background } from '@this/constants/theme';

  export let url = '';
  export let initials = null;
  export let familyName = null;
  export let firstName = '';
  export let gender = null;

  const colour = background[gender] ?? 'gray';
</script>

<a class="w-full p-2" href={url}>
  <div class="border border-gray-300 p-2 rounded-lg">
    <div class="flex justify-between">
      <div class="flex items-center">
        <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-{colour}-100 text-{colour}-500">{initials}</div>
        <h2 class="text-lg font-medium title-font ml-2">{familyName}, {firstName}</h2>
      </div>
    </div>
  </div>
</a>
