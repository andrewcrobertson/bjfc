<script lang="ts">
  import AvatarHeading from '@this/components/common/AvatarHeading';
  import CalendarIcon from '@this/components/icon/CalendarIcon';

  let rootClass = '';
  export { rootClass as class };
  export let date: string = null;
  export let club = '';
  export let colour = 'gray';

  const dateSanitised = date ?? 'Unknown';
</script>

<div class="{rootClass} p-2">
  <div class="flex flex-col sm:flex-row sm:justify-between">
    <AvatarHeading {colour} text={club} />
    <!-- <h2 class="text-lg font-medium title-font ml-2">{club}</h2> -->
    <div class="inline-flex items-center text-sm ml-2 py-1">
      <CalendarIcon class="text-{colour}-500 w-5 h-5 mr-1" />
      {dateSanitised}
    </div>
  </div>
</div>
