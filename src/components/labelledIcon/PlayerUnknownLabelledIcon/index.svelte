<script lang="ts">
  import XIcon from '@this/components/icon/XIcon';
  import ExclamationIcon from '@this/components/icon/ExclamationIcon';

  let rootClass = '';
  export { rootClass as class };
  export let iconClass = '';
  export let text: string = null;

  const textSanitised = text ?? 'Unkown';
</script>

<ExclamationIcon class={rootClass} {iconClass} icon={XIcon}>{textSanitised}</ExclamationIcon>
