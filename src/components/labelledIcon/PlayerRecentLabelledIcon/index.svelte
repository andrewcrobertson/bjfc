<script lang="ts">
  import CheckIcon from '@this/components/icon/CheckIcon';
  import LabelledIcon from '@this/components/labelledIcon/LabelledIcon';

  let rootClass = '';
  export { rootClass as class };
  export let iconClass = '';
  export let text: string = null;

  const textSanitised = text ?? 'Recent';
</script>

<LabelledIcon class={rootClass} {iconClass} icon={CheckIcon}>{textSanitised}</LabelledIcon>
