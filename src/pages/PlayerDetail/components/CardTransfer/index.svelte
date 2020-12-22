<script lang="ts">
  import AvatarHeading from '@this/components/common/AvatarHeading';
  import CalendarLabelledIcon from '@this/components/labelledIcon/CalendarLabelledIcon';

  let rootClass = '';
  export { rootClass as class };
  export let date: string = null;
  export let club = '';
  export let colour = 'gray';

  const label = date ?? 'Unknown';
</script>

<div class="{rootClass} p-2">
  <div class="flex flex-col sm:flex-row sm:justify-between">
    <AvatarHeading {colour} text={club} />
    <CalendarLabelledIcon class="text-sm" iconClass="text-{colour}-500" {label} />
  </div>
</div>
