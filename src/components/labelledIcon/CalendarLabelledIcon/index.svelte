<script lang="ts">
  import CalendarIcon from '@this/components/icon/CalendarIcon';
  import LabelledIcon from '@this/components/labelledIcon/LabelledIcon';

  let rootClass = '';
  export { rootClass as class };
  export let iconClass = '';
  export let label: string = null;
</script>

<LabelledIcon class={rootClass} {iconClass} icon={CalendarIcon}>{label}</LabelledIcon>
