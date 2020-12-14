<script lang="ts">
  import LogoutIcon from '@this/icons/LogoutIcon';

  let rootClass = '';
  export { rootClass as class };
  export let applicationDate = null;
  export let sourceClub = null;
  export let destinationClub = '';

  const colour = 'blue';
</script>

<div class="{rootClass} p-2">
  <div class="flex justify-between">
    <div class="flex items-center">
      <h2 class="text-lg font-medium title-font ml-2">{sourceClub} &gt; {destinationClub}</h2>
    </div>
    <span class="mr-3 inline-flex items-center leading-none text-sm py-1">
      <LogoutIcon class="w-5 h-5 mr-1 text-{colour}-500" />
      {applicationDate}
    </span>
  </div>
</div>
