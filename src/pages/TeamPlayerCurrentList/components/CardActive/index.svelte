<script lang="ts">
  import type { PlayerStatusEnum } from '@this/constants/enums';
  import { background } from '@this/constants/theme';
  import PlayerStatus from '@this/components/PlayerStatus';

  let rootClass = '';
  export { rootClass as class };
  export let url = '';
  export let initials = null;
  export let lastName = null;
  export let firstName = '';
  export let gender = null;
  export let status: PlayerStatusEnum = null;

  const colour = background[gender] ?? 'gray';
</script>

<a class="{rootClass} p-2" href={url}>
  <div class="flex flex-col sm:flex-row sm:justify-between">
    <div class="flex items-center space-x-2">
      <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-{colour}-100 text-{colour}-500">{initials}</div>
      <h2 class="text-lg font-medium title-font">{lastName}, {firstName}</h2>
    </div>
    <span class="flex justify-end items-center text-sm mr-2 py-1">
      <PlayerStatus class="text-{colour}-500" {status} />
    </span>
  </div>
</a>
