<script lang="ts">
  import XIcon from '@this/components/icon/XIcon';
  import LabelledIcon from '@this/components/labelledIcon/LabelledIcon';

  let rootClass = '';
  export { rootClass as class };
  export let iconClass = '';
  export let text: string = null;

  const textSanitised = text ?? 'Historical';
</script>

<LabelledIcon class={rootClass} {iconClass} icon={XIcon}>{textSanitised}</LabelledIcon>
