<script lang="ts">
  import * as personGenderEnum from '@this/constants/personGenderEnum';
  import { personBackground } from '@this/constants/theme';
  import EmojiHappyIcon from '@this/icons/EmojiHappyIcon';
  let rootClass = '';
  export { rootClass as class };
  export let text = '';
  export let colour = personBackground[personGenderEnum.unknown];
</script>

<div class="{rootClass} cursor-default inline-flex items-center text-sm border border-gray-300 border-dotted px-3 py-3">
  <EmojiHappyIcon class="inline w-5 h-5 mr-2 text-{colour}-500" />{text}
</div>
