<script lang="ts">
  import EmojiHappyIcon from '@this/components/icon/EmojiHappyIcon';
  import LabelledIcon from '@this/components/labelledIcon/LabelledIcon';

  let rootClass = '';
  export { rootClass as class };
  export let iconClass = '';
  export let text: string = null;
</script>

<LabelledIcon class={rootClass} {iconClass} icon={EmojiHappyIcon}>{text}</LabelledIcon>
