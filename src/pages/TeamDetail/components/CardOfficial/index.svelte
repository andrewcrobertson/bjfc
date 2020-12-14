<script lang="ts">
  import * as personGenderEnum from '@this/constants/personGenderEnum';
  import { personBackground } from '@this/constants/theme';
  import AtSymbolIcon from '@this/icons/AtSymbolIcon';
  import EmojiHappyIcon from '@this/icons/EmojiHappyIcon';
  import PhoneIcon from '@this/icons/PhoneIcon';
  import EmailButton from '../EmailButton';
  import PhoneButton from '../PhoneButton';

  let rootClass = '';
  export { rootClass as class };
  export let official: any = {};
  export let role = '';

  const { initials, firstName, familyName, phone, email, gender } = official;
  const colour = personBackground[gender ?? personGenderEnum.unknown];
</script>

<div class={rootClass}>
  <div class="border border-gray-300 p-6">
    <div class="flex items-center mb-4">
      <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-{colour}-100 text-{colour}-500">{initials}</div>
      <h2 class="text-lg font-medium title-font ml-2">{firstName} {familyName}</h2>
    </div>
    <div class="text-sm items-center">
      <EmojiHappyIcon class="inline w-5 h-5 mr-1 text-{colour}-500" />
      {role}
    </div>
    <div class="text-sm items-center">
      <PhoneIcon class="inline w-5 h-5 mr-1 text-{colour}-500" />
      {phone === null ? 'N/A' : phone}
    </div>
    <div class="text-sm items-center">
      <AtSymbolIcon class="inline w-5 h-5 mr-1 text-{colour}-500" />
      {email}
    </div>
    <div class="text-center mt-6 leading-none flex justify-between w-full">
      <PhoneButton {phone} />
      <EmailButton {email} />
    </div>
  </div>
</div>
