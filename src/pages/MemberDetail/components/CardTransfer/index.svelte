<script lang="ts">
  import Responsive from '@this/components/Responsive';
  import LogoutIcon from '@this/icons/LogoutIcon';

  let rootClass = '';
  export { rootClass as class };
  export let applicationDate = null;
  export let sourceClub = null;
  export let destinationClub = '';

  const colour = 'blue';
</script>

<Responsive>
  <div slot="sm" class="{rootClass} p-2">
    <div class="flex flex-col">
      <h2 class="text-lg font-medium title-font ml-2">{sourceClub} &#8594; {destinationClub}</h2>
      <div class="inline-flex items-center text-sm ml-2 py-1">
        <LogoutIcon class="text-{colour}-500 w-5 h-5 mr-1" />
        {applicationDate}
      </div>
    </div>
  </div>

  <div slot="else" class="{rootClass} p-2">
    <div class="flex justify-between">
      <div class="flex items-center">
        <h2 class="text-lg font-medium title-font ml-2">{sourceClub} &#8594; {destinationClub}</h2>
      </div>
      <span class="inline-flex items-center text-sm mr-3 py-1">
        <LogoutIcon class="text-{colour}-500 w-5 h-5 mr-1" />
        {applicationDate}
      </span>
    </div>
  </div>
</Responsive>
