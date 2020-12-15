<script lang="ts">
  import { background } from '@this/constants/theme';
  import BadgeCheckIcon from '@this/icons/BadgeCheckIcon';
  import CurrencyDollarIcon from '@this/icons/CurrencyDollarIcon';

  let rootClass = '';
  export { rootClass as class };
  export let url = '';
  export let initials = null;
  export let lastName = null;
  export let firstName = '';
  export let gender = null;
  export let paidThisSeason = false;

  const colour = background[gender] ?? 'gray';
</script>

<a class="{rootClass} p-2" href={url}>
  <div class="flex flex-col sm:flex-row sm:justify-between">
    <div class="flex items-center space-x-2">
      <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-{colour}-100 text-{colour}-500">{initials}</div>
      <h2 class="text-lg font-medium title-font">{lastName}, {firstName}</h2>
    </div>
    <span class="flex justify-end items-center leading-none text-sm mr-2 py-1">
      {#if paidThisSeason}
        <CurrencyDollarIcon class="w-5 h-5 mr-1 text-{colour}-500" />
        Paid
      {:else}
        <BadgeCheckIcon class="w-5 h-5 mr-1 text-{colour}-500" />
        Registered
      {/if}
    </span>
  </div>
</a>
