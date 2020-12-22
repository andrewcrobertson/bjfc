<script lang="ts">
  import PhoneIcon from '@this/components/icon/PhoneIcon';
  import LabelledIcon from '@this/components/labelledIcon/LabelledIcon';

  let rootClass = '';
  export { rootClass as class };
  export let iconClass = '';
  export let text: string = null;
</script>

<LabelledIcon class={rootClass} {iconClass} icon={PhoneIcon}>{text}</LabelledIcon>
