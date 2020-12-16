<script lang="ts">
  import EmailButton from '@this/components/EmailButton';
  import PhoneButton from '@this/components/PhoneButton';
  import * as personGenderEnum from '@this/constants/personGenderEnum';
  import { personBackground } from '@this/constants/theme';
  import EmojiHappyIcon from '@this/icons/EmojiHappyIcon';

  let rootClass = '';
  export { rootClass as class };
  export let role = '';

  const colour = personBackground[personGenderEnum.unknown];
</script>

<div class={rootClass}>
  <div class="border border-gray-300 bg-gray-100 p-4 lg:p-6">
    <div class="flex items-center mb-4">
      <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-{colour}-200 text-{colour}-500">TBD</div>
      <h2 class="text-lg font-medium title-font ml-2">To Be Determined</h2>
    </div>
    <div class="flex flex-col -mb-3">
      <div class="cursor-default inline-flex items-center leading-none text-sm border border-gray-300 border-dotted mb-2 px-3 py-3">
        <EmojiHappyIcon class="inline w-5 h-5 mr-2 text-{colour}-500" />
        Role:
        {role}
      </div>
      <PhoneButton class="mb-2" {colour} />
      <EmailButton class="mb-2" {colour} />
    </div>
  </div>
</div>
