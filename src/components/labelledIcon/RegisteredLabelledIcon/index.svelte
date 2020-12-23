<script lang="ts">
  import ClipboardListIcon from '@this/components/icon/ClipboardListIcon';
  import LabelledIcon from '@this/components/labelledIcon/LabelledIcon';

  let rootClass = '';
  export { rootClass as class };
  export let iconClass = '';
  export let text: string = null;

  const textSanitised = text ?? 'Registered';
</script>

<LabelledIcon class={rootClass} {iconClass} icon={ClipboardListIcon}>{textSanitised}</LabelledIcon>
