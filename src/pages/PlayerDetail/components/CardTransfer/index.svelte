<script lang="ts">
  import AvatarHeading from '@this/components/common/AvatarHeading';
  import DateLabelledIcon from '@this/components/labelledIcon/DateLabelledIcon';

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
    <DateLabelledIcon iconClass="text-{colour}-500" date={dateSanitised} />
  </div>
</div>
