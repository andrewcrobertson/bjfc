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

<div class="{rootClass} flex flex-col sm:flex-row sm:justify-between p-2">
  <AvatarHeading {colour} text={club} />
  <div class="flex flex-col text-sm space-y-1">
    <CalendarLabelledIcon class="self-end" iconClass="text-{colour}-500" {label} />
  </div>
</div>
