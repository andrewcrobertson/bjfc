<script lang="ts">
  import CalendarIcon from '@this/icons/CalendarIcon';

  let rootClass = '';
  export { rootClass as class };
  export let applicationDate = null;
  export let destinationClub = '';
  export let colour = 'gray';
</script>

<div class="{rootClass} p-2">
  <div class="flex flex-col sm:flex-row sm:justify-between">
    <h2 class="text-lg font-medium title-font ml-2">{destinationClub}</h2>
    <div class="inline-flex items-center text-sm ml-2 py-1">
      <CalendarIcon class="text-{colour}-500 w-5 h-5 mr-1" />
      {applicationDate}
    </div>
  </div>
</div>
